// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Votting is Ownable{

  using SafeMath for uint256;
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIdTracker;

  struct Coordinator {
    uint256 x1;
    uint256 y1;
    uint256 x2;
    uint256 y2;
  }

  struct Map {
    address owner;
    Coordinator[] plusCoordinator;
    Coordinator[] minusCoordinator;
  }

  enum State { Created, Voting, Ended } // State of voting;

  struct Voter {
    uint256 index;
    State state;
    Coordinator map;
  }

  Voter[] public voters;
  Map[] private maps;

  mapping (address => Voter) public ownerOfVoter;
  mapping (address => Map) private ownerOfMap;

  event CreatedVoteforTerrain(Voter indexed _voter);
  event CreatedVoteforExtending(Voter indexed _voter);
  event EndedVoter(Voter indexed _voter);
 

  modifier isMapOfOwner(Coordinator memory _coordinator) {
    Map memory map = ownerOfMap[msg.sender];
    Coordinator[] memory plusCoordinator =  map.plusCoordinator;
    Coordinator[] memory minusCoordinator =  map.minusCoordinator;
    for(uint i = 0; i < plusCoordinator.length; i++) {
      if(isIncludeCoordinator(plusCoordinator[i], _coordinator))
      {
        if(!isIncludeCoordinator(minusCoordinator[i], _coordinator))
        {
           _;
        }
      }
    }
  }

  modifier CreatedState(Voter memory _voter) {
    require(_voter.state == State.Created, "it must be in Started");
    _;
  }
    
  modifier VotingState(Voter memory _voter) {
    require(_voter.state == State.Voting, "it must be in Voting Period");
    _;
  }
  
  modifier EndedState(Voter memory _voter) {
    require(_voter.state == State.Ended, "it must be in Ended Period");
    _;
  }

  constructor(Coordinator memory _coord) {
    Map storage _map = ownerOfMap[owner()];
    _map.owner = owner();
    (_map.plusCoordinator).push(_coord);
  }
  
  // if _coord1 include _coord2, return true, else return false;
  function isIncludeCoordinator(Coordinator memory _coord1, Coordinator memory _coord2) private pure returns (bool) { 
    if( _coord1.x1 >= _coord2.x1 
        && _coord1.x2 <= _coord2.x2
        && _coord1.y1 >= _coord2.y1
        && _coord1.y2 <=_coord2.y2 )
      return true;
    else return false;
  }

  function voteforTerrain(Voter memory _voter) public isMapOfOwner(_voter.map) CreatedState(_voter) {
    _tokenIdTracker.increment();
    Voter memory voter = _voter;
    voter.state = State.Created;
    voter.index = _tokenIdTracker.current();
    voters.push(voter);
    emit CreatedVoteforTerrain(voter);
  }

  function voteforExtending(Voter memory _voter) public onlyOwner CreatedState(_voter) {
    _tokenIdTracker.increment();
    Voter memory voter = _voter;
    voter.state = State.Created;
    voter.index = _tokenIdTracker.current();
    voters.push(voter);
    emit CreatedVoteforExtending(voter);
  }

  function endedVote(uint256 index) public VotingState(voters[index]) {
    require(ownerOfVoter[msg.sender].index == index, "only vote onwer");
    Voter storage voter = voters[index];
    voter.state = State.Ended;  
    emit EndedVoter(voter);
  }

  function terrainMap(Voter memory _voter, address _address) external isMapOfOwner(_voter.map)  EndedState(_voter) {
    Map storage _map = maps[maps.length];
    _map.owner = _address;
    (_map.plusCoordinator).push(_voter.map);
    (_map.minusCoordinator).push(_voter.map);
    ownerOfMap[_address] = _map;
  }

  function extendingMap(Coordinator memory _extendingMap, address _address) external onlyOwner isMapOfOwner(_extendingMap) {
    Map storage _map1 = maps[maps.length];
    Map storage _map2 = ownerOfMap[msg.sender];
    _map1.owner = _address;
    (_map1.plusCoordinator).push(_extendingMap);
    ownerOfMap[_address] = _map1;
    (_map2.minusCoordinator).push(_extendingMap);
  }

  function myMap() external view returns (Map[] memory _maps) {
    uint256 index = 0;
    for(uint i = 0; i < maps.length; i++) {
      if(maps[i].owner == msg.sender) {
        _maps[index] = maps[i];
        index++;
      }
    }
    return _maps;
  }
}
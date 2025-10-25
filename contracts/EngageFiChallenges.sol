// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EngageFiChallenges is Ownable(msg.sender) {  // <-- Fix here
    IERC20 public cUSD;

    struct Challenge {
        uint256 id;
        string brandName;
        string title;
        uint256 rewardAmount;
        uint256 rewardsPool;
        uint256 maxParticipants;
        uint256 participantCount;
        bool isActive;
    }

    mapping(uint256 => Challenge) public challenges;
    uint256 public nextChallengeId;
    mapping(uint256 => mapping(address => bool)) public hasUserClaimedReward;

    event ChallengeCreated(uint256 indexed id, string brandName, uint256 rewardAmount);
    event RewardClaimed(uint256 indexed challengeId, address indexed user);

    constructor(address _cUSDAddress) {
        cUSD = IERC20(_cUSDAddress);
    }

    // ... (rest of the code remains unchanged)
}
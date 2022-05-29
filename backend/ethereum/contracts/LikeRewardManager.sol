// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract LikeRewardManager {
    address administrator;
    mapping(address => uint) likeAmountOnLastRewardWithdrawl;

    constructor(address _administrator) {
        administrator = _administrator;
    }

    modifier adminOnly() {
        require(msg.sender == administrator, "This function can only be called by contract administrator");
        _;
    }

    function sendRewards(address payable recipient, uint numberOfLikes, uint rewardPerLike) public adminOnly {
        uint previousNumberOfLikes = likeAmountOnLastRewardWithdrawl[recipient];
        likeAmountOnLastRewardWithdrawl[recipient] = numberOfLikes;
        
        uint totalReward = rewardPerLike * (numberOfLikes - previousNumberOfLikes);

        recipient.transfer(totalReward);
    }
}
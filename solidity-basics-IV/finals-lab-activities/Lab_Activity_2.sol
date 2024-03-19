// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract MyFinalsActivity2{
    address payable public owner;
    uint256 immutable public creationTime;
    uint256 public constant INITIAL_ETH_AMOUNT = 2 ether;
    uint256 public remainingEth;

    event EtherReceived(address sender, uint amount);
    event EtherSent(address recipient, uint amount);

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can access this function");
        _;
    }

    constructor(){
        owner = payable(msg.sender);
        creationTime = block.timestamp;
        remainingEth = INITIAL_ETH_AMOUNT;
    }

    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    function ReceivedAndEmit() external payable{
        emit EtherReceived(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256){
        return address(this).balance;
    }

    function sendEther(address payable _recipient, uint256 _amount) public onlyOwner{
        require(_amount <= remainingEth, "Insufficient funds in the contract");
        _recipient.transfer(_amount);
        remainingEth -=_amount;
        emit EtherSent(_recipient, _amount);
    }

    function destroy() public onlyOwner{
        selfdestruct(owner);
    }
}

/*
In this activity, this demo allows us to manage transactions with ownership. Moreover, the integration of the functions are able to play
their own functionalities such as receiving, sending, and even to free up the storage. Furthermore, the functions are able to display
the desired output of the users and restricts the non owner of the contract in some functions.
*/
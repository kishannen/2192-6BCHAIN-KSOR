// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet{
    address payable public owner;
    event Withdraw(uint amount);

     constructor (){
        owner = payable(msg.sender);
     }

     receive() external payable { }

     function withdraw(uint _amount) external{
        require(msg.sender == owner, "Not Owner");
        emit Withdraw(_amount);
     }

     function getBalance() external view returns(uint){
        return (address(this).balance);
     }
}

/*
In this activity, the balance can be viewed and received. However, when withdrawing, the owner can do it but not the other address.
Through this, the contract provided a security to the ownern as the transaction cannot be intervened by others.
*/
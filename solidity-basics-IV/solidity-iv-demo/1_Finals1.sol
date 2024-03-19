// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FallbackExample{
    event FallbackReceived(address sender, uint amount);
    // Event to log payment received
    event PaymentReceived(address payer, uint256 amount);

    //Falbback function
    fallback() external payable{
        emit FallbackReceived(msg.sender, msg.value);
    }

    //Function to receive Ether
    receive() external payable{
        emit PaymentReceived(msg.sender, msg.value);
    }
}
/*
In this activity, I learn about the basics of Fallback and Receive. If I did not transact, it will fail since it doesn't have any data.
If I enter a value and click the calldata transact section, it will receive the data and increment the balance depending on the value I added.
*/
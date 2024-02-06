// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

contract FunctionIntro{
    //Functions can return multiple values.
    function add(uint x, uint y) external pure returns (uint){
        return (x + y);
    }

    function sub(uint x, uint y) external pure returns (uint){
        return (x - y);
    }

    function multiply(uint x, uint y) external pure returns (uint){
        return (x * y);
    }

    function divide(uint x, uint y) external pure returns (uint){
        return (x / y);
    }
    
}

// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

//Data Types
contract ValueTypes{
    bool public b = true;
    uint public u = 123;
    int public i = -123;
    int public minInt = type(int).min;
    int public maxInt = type(int).max;
    address public addr = 0x2b7140d984FbC32Dd5102e1dfd53A710a371B425;
    bytes32 public b32 = 0x626c756500000000000000000000000000000000000000000000000000000000;
}


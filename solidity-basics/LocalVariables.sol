// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

contract LocalVariables{
    uint public i;
    int public w; //owned local variable
    bool public b;
    address public myAddress;

    function foo() external {
        uint x = 123;
        int a = 229; //owned local
        bool f = false;
        // more code

        x += 456;
        f = true;
        w += 179; //owned local

        i = 123;
        a = 229;
        b = true; 
        myAddress = address(1);
    }
}

/*foo is not payable that's why others are not able to have values, initially they have zero values and false values
However if we clicked the foo, it will create values*/
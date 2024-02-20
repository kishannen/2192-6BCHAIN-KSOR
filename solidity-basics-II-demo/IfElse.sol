// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

contract IfElse{
    mapping (address => uint256) public valueMapping;
    modifier nonZeroValue(uint256 _value) {
    require(_value !=0, "value cannot be zero");
    _;
    }
    function foo(uint x) public pure returns (uint){
        if (x < 10){
            return 0;
        } else if (x < 20){
            return 1;
        } else{
            return 2;
        }
    }

    function ternary(uint _x) public pure returns (uint){
       return _x < 10 ? 1 : 2; 
    }

    function setValue(uint256 _value) public nonZeroValue(_value){
        if (_value > valueMapping[msg.sender]){
            valueMapping[msg.sender] = _value;
        }
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract MQuizContract {
   uint256 public age;
   uint256 public hrsWrk;
   uint256 public hrsRate;
   uint256 public totSal;
   address public owner;

   constructor(){
        owner = msg.sender;

    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can access this function");
        _;
    }

    modifier hourlyRate(uint256 hoursRate){
      require(hoursRate > 0,  "Invalid! Hourly Rate should be greater than 0");
        _;
    }

    modifier workedHrs(uint256 wrkHrsRate){
      require(wrkHrsRate > 0,  "Invalid! Working Hours must be specified greater than 0.");
        _;
    }

    function setAge(uint256 empAge) public{
      age = empAge;
    }

    function setHrsWrk(uint256 empHrsWrk) public{
      hrsWrk = empHrsWrk;
    }

    function setRate(uint256 empHrsRT) public onlyOwner{
      hrsRate = empHrsRT;
    }

    function calculateTotSal() public onlyOwner{
      require(hrsRate == 0 && hrsWrk == 0, "Hourly Rates and/or Worked Hours cannot be specified as 0.");
      totSal = hrsRate * hrsWrk;
    }

}
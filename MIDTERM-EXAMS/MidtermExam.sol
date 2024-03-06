// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract GradeContract2{
    string public studName;
    uint256 public prelimGrade;
    uint256 public midtermGrade;
    uint256 public finalGrade;
    GradeStats status;

    enum GradeStats{
        Passed,
        Failed
    }

    address public owner;

    constructor(){
        owner = msg.sender;

    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can access this function");
        _;
    }

    modifier validGrade(uint256 _grade){
        require(_grade >= 0 && _grade <= 100, "Grade must been 0 to 100");
        _;
    }

    event GradeComputed(string indexed name, GradeStats status);
 
    function setName(string calldata studentName) public {
        studName = studentName;

    }

    function setPrelimGrade(uint256 _grade) public onlyOwner validGrade(_grade){
       prelimGrade = _grade;
    }

    function setMidtermGrade(uint256 _grade) public onlyOwner validGrade(_grade){
        midtermGrade = _grade;
    }

    function setFinalGrade(uint256 _grade) public onlyOwner validGrade(_grade){
        finalGrade = _grade;
    }

    function gradeStatus() public view returns (GradeStats){
        return status;
    }

    function calculateGrade() public onlyOwner{
        uint256 studAve = prelimGrade + midtermGrade 
        + finalGrade / 3;
        if (studAve >= 75){
           status = GradeStats.Passed;
        }
        else{
            status = GradeStats.Failed;
        }
        emit GradeComputed(studName, status);
    }
}
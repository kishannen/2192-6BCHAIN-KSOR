// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

contract GlobalVariables{
   function globalVars() external view returns (address, uint, uint, uint, address, address){
    address sender = msg.sender;
    uint timestamp = block.timestamp;
    uint blockNum = block.number;

    //self-variables
    uint gasLim = block.gaslimit;
    address coinBase = block.coinbase;
    address originAdd = tx.origin;
    return (sender, timestamp, blockNum, gasLim, coinBase, originAdd)
;   }
}

/*When I clicked the globalVars function, it will return the address
as well a value of a timestamp in uint256 form and also the block number. Also the other global variables
are used to identify the gas limit, the address of the miner and address of the account where it was created originally in the transactions*/
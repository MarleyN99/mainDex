//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

//This contract facilitates all transactions
contract Transactions {
uint256 transactionCount;

//Events are emitted to the blockchain for miners to add into their blocks
event transfer(address from, address receiver, uint amount, uint256 timestamp);

//Specify the properties that belong to a transaction
struct TransferStruct {
    address sender;
    address reciever;
    uint amount;
    uint256 timestamp;
}
//Define an array of transactions for logging
TransferStruct[] transactions;

function addToBlockchain(address payable reciever, uint amount) public {
    //Incriment count for each contract call
    transactionCount += 1;
    //push transaction to list
    transactions.push(TransferStruct(msg.sender, reciever, amount, block.timestamp));
    //send transaction
    emit transfer(msg.sender, reciever, amount,block.timestamp);
}
//Return log of transactions, read only returns array of transfers
function getAlltransactions() public view returns (TransferStruct[] memory){
    return transactions;
}
//Return just transacton count, read only
function getTransactionCount() public view returns (uint256) {
    return transactionCount;
}
}

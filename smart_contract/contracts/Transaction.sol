// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


contract Transaction{

event TransferEthereum(address from, address receiver, uint amount,  uint256 timestamp, string message);

struct TransferEthereumStruct{


    address from;
    address receiver;
    uint amount;
    uint256 timestamp;
    string message;
}
TransferEthereumStruct[] transactions;


function addToBlockChain(address payable receiver, uint amount,string memory message) public{

transactions.push (TransferEthereumStruct(msg.sender, receiver, amount, block.timestamp, message));
emit TransferEthereum(msg.sender, receiver, amount, block.timestamp, message);

}



}
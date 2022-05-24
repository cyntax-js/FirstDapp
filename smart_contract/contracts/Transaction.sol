// SPDX-License-Identifier: MIT

pragma solidity ^ 0.8.4;


contract Transactions{


event TransferEth(address from, address receiver, uint amount,uint256 timestamp,string message);

struct TransferEthStruct{
address from;
address receiver;
uint amount;
uint256 timestamp;
string message;
}
TransferEthStruct[] transactions;

function AddToBlockChain  (address payable receiver, uint amount, string memory message) public{

transactions.push(TransferEthStruct(msg.sender, receiver, amount, block.timestamp,message));

emit TransferEth(msg.sender, receiver, amount, block.timestamp,message);

}

}
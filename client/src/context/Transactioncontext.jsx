import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
export const TransactionContext = React.createContext();
const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  // new ethers.providers.Web3Provider();
  const signer = provider.getSigner();
  const transactionContract = {
    contractAbi,
    contractAddress,
    signer,
  };

  console.log(transactionContract);
  //   return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const checkIfWalletConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletConnect();
  });
  return (
    <TransactionContext.Provider value={{ checkIfWalletConnect }}>
      {children}
    </TransactionContext.Provider>
  );
};

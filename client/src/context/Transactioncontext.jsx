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
  const [account, setAccount] = useState("");

  const [ethBalance, setEthBalance] = useState("0");
  const checkIfWalletConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length === 0) {
        console.log("no ethereum account");
      } else setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getWalletBalance = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      const CurrentAccount = accounts[0];

      const balance = await ethereum.request({
        method: "eth_getBalance",
        params: [CurrentAccount, "latest"],
      });

      const wei = parseInt(balance, 16);
      const eth = wei / Math.pow(10, 18);
      setEthBalance(eth.toFixed(4));
    } catch (error) {
      console.log(error);
    }
  };

  const ConnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length === 0) {
        console.log("no ethereum account");
      } else setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletConnect();
    getWalletBalance();
  }, [getWalletBalance]);

  return (
    <TransactionContext.Provider value={{ account, ConnectWallet, ethBalance }}>
      {children}
    </TransactionContext.Provider>
  );
};

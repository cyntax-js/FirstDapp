import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Home = () => {
  const { account, ConnectWallet, ethBalance } = useContext(TransactionContext);

  console.log(account);
  console.log(ethBalance, "Balance is supposed to be here");
  return (
    <div
      //   className="flex w-full justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div
            className="dapp_balance"
            style={{
              color: "#fff",
              fontSize: "12px",
              display: "flex",
              justifyContent: "flexEnd",
              alignItems: "center",
              maxWidth: "24rem",
              width: "100%",
              padding: "0.5em 1em",
              gap: "5px",
              fontWeight: "300",
            }}
          >
            DippyDapp Bal: {""}
            <span className="eth_bal" style={{ fontWeight: "700" }}>
              {" "}
              {ethBalance} <span className="eth_symbol">ETH</span>
            </span>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism2">
            <Input placeholder="Your Address" name="addressTo" type="text" />
            <Input placeholder="amount (ETH)" name="amount" type="number" />
            <Input placeholder="Enter Message" name="message" type="text" />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {account === "" ? (
              <button
                type="button"
                onClick={ConnectWallet}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Connect Wallet <AiFillPlayCircle className="text-white mr-2" />
              </button>
            ) : (
              <button
                type="button"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Receive <SiEthereum />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

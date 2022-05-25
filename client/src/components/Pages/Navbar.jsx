import React, { useContext, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../../context/TransactionContext";
import { ShortenAddress } from "../../utils/ShortenAddress";
// import logo from "../../images/logo.png";
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const { account, ConnectWallet } = useContext(TransactionContext);

  console.log(account);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src="/img/dippyDapp.svg"
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {account === "" ? (
          <button
            type="button"
            onClick={ConnectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        ) : (
          <p>
            <ShortenAddress address={account} />
          </p>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import { ethers } from "ethers";
import ERC20ABI from "./ERC20ABI.json";
import { useState, useEffect } from "react";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(data.get("addr"), ERC20ABI, provider);
    const tokenName = await erc20.name();
    const tokenSymbol = await erc20.symbol();
    const totalSupply = await erc20.totalSupply();

    setContractInfo({
      address: data.get("addr"),
      tokenName,
      tokenSymbol,
      totalSupply,
    });
  };
  return (
    <div className="flex flex-row w-full h-full ">
      <div className=" w-[50%] h-screen flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mx-8">
            <h1 className="text-2xl font-bold text-center mt-5">
              Read from Contract
            </h1>
            <input
              type="text"
              placeholder="Enter address"
              className=" w-[90%] text-center p-2 rounded-xl mt-3 ml-8 border-2 border-gray-500"
            />
            <button className="p-2  bg-slate-500 w-[90%] rounded-full ml-8 mt-4 text-white">
              GET TOKEN INFO
            </button>

            {/* info coin section */}

            <div className="flex flex-col mt-8 shadow-xl m-8 rounded-xl">
              <div className="flex flex-row justify-evenly">
                <h1>Name</h1>
                <h1>Symbol</h1>
                <h1>Total Supply</h1>
              </div>
              <div className="flex flex-row justify-evenly -ml-8 my-4">
                <h1>Titanium</h1>
                <h1>TI</h1>
                <h1>1000</h1>
              </div>
            </div>
          </div>

          {/*get account details  */}
          <div className="flex flex-col mt-1 p-2 shadow-xl mx-8 rounded-xl">
            <button className="p-2 bg-slate-500 w-[90%] rounded-full ml-8 my-2 mt-2 text-white ">
              GET MY INFO
            </button>
            <div className="flex flex-row justify-evenly my-2">
              <h1>Address</h1>
              <h1>Balance</h1>
            </div>
            <div className="flex flex-row justify-evenly -ml-8 my-4">
              <h1>0xurghuier98784849848</h1>
              <h1>1000</h1>
            </div>
          </div>

          {/* write on contract */}
          <div className="flex flex-col mt-0 p-4 shadow-xl mx-8 rounded-xl items-center">
            <h1 className="text-2xl font-bold">Write on contract</h1>
            <input
              type="text"
              placeholder="Enter address"
              className=" w-[90%] text-center p-2 rounded-xl mt-3 ml-8 border-2 border-gray-500"
            />
            <input
              type="text"
              placeholder="Amount"
              className=" w-[90%] text-center p-2 rounded-xl mt-3 ml-8 border-2 border-gray-500"
            />
            <button className="p-2  bg-slate-500 w-[90%] rounded-full ml-8 my-4 text-white">
              SEND
            </button>
          </div>
        </form>
      </div>

      {/* recent transactions section */}

      <div className="items-center w-[50%] h-screen">
        <h1 className="text-center font-bold text-3xl p-3">
          Recent Transactions
        </h1>
      </div>
    </div>
  );
}

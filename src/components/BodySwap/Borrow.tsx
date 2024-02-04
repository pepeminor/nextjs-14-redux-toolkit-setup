"use client";

import { useState } from "react";
import Image from "next/image";
import LogoEth from "@/../../public/LogoEth.png";
import { CSSButton, PCss, WrapInput } from "./styles";
import { FaArrowDown } from "react-icons/fa";

const Borrow = () => {
  const [inputData, setInputData] = useState({
    collateral: 0,
    receive: 0,
  });

  const inputCollateral = (event: any) => {
    if (!event) return;
    setInputData((prev: any) => ({
      ...prev,
      collateral: event.target.value.replace(",", "."),
    }));
  };

  return (
    <div className="mt-4 w-full text-black">
      <WrapInput>
        <PCss>Input Collateral</PCss>
        <div className="wrapValue">
          <input placeholder="0" type="number" onChange={inputCollateral} />
          <div className="value">
            <Image
              width={24}
              height={24}
              src={LogoEth}
              alt="Ethereum"
              // className="mr-2"
            />
            <p>0</p>
          </div>
        </div>
        <div className="wrapValue">
          <p>$0</p>
          <div className="value">
            <p>Available: 0</p>
            <p>MAX</p>
          </div>
        </div>
        <div className="arrowDown">
          <FaArrowDown />
        </div>
      </WrapInput>

      <WrapInput>
        <PCss>You'll Receive</PCss>
        <div className="wrapValue">
          {/* <input placeholder="0" type="number" onChange={inputCollateral} /> */}
          <p className="dataReceive">0</p>
          <div className="value">
            <Image
              width={24}
              height={24}
              src={LogoEth}
              alt="Ethereum"
              // className="mr-2"
            />
            <p>0</p>
          </div>
        </div>

        <div className="wrapValue">
          <p>$0</p>
          {/* <div className="value">
            <p>Available: 0</p>
            <p>MAX</p>
          </div> */}
        </div>
      </WrapInput>

      <CSSButton>Borrow</CSSButton>
    </div>
  );
};

export default Borrow;

"use client";

import { useState } from "react";
import Image from "next/image";
import LogoEth from "@/../../public/LogoEth.png";
import { CSSWrapTable, CSSButton, LICss, PCss, ULCss, WrapInput } from "./styles";
import { FaArrowDown } from "react-icons/fa";

const fake_data = [1, 2, 3, 4];

const Repay = () => {
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
      <CSSWrapTable>
        <h3>My Borrow</h3>
        <div className="wrapTable">
          <ul className="titleTable borderLine">
            <li>Collateral</li>
            <li>Debt</li>
            <li>APY</li>
            <li></li>
          </ul>

          {fake_data.map((_) => (
            <ul className="titleTable">
              <li>
                <div>
                  <Image
                    width={24}
                    height={24}
                    src={LogoEth}
                    alt="Ethereum"
                    className="mr-1"
                  />
                </div>
                <p>123</p>
              </li>
              <li>
                <p>123</p>
                <p>xAqua</p>
              </li>
              <li>15/01/2024</li>
              <li>
                <CSSButton>Repay</CSSButton>
              </li>
            </ul>
          ))}
        </div>
      </CSSWrapTable>
    </div>
  );
};

export default Repay;

"use client";

import { useState } from "react";
import Image from "next/image";
import LogoEth from "@/../../public/LogoEth.png";
import { CSSWrapTable, CSSButton } from "./styles";
import { useThemeContext } from "@/Context/ThemeContext";

const fake_data = [1, 2, 3, 4];

const History = () => {
  const [inputData, setInputData] = useState({
    collateral: 0,
    receive: 0,
  });

  const { theme } = useThemeContext();

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
        <h3>Borrow History</h3>
        <div className="wrapTable">
          <ul className="titleTable borderLine">
            <li>Create Date</li>
            <li>Collateral</li>
            <li>Loan Amount</li>
          </ul>

          {fake_data.map((_) => (
            <ul className="titleTable">
              <li>15/01/2024</li>
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
            </ul>
          ))}
        </div>
      </CSSWrapTable>

      <CSSWrapTable $widthLiTag={"110px"}>
        <h3>Repay History</h3>
        <div className="wrapTable">
          <ul className="titleTable borderLine">
            <li>Create Date</li>
            <li>Paid Date</li>
            <li>Collateral</li>
            <li>Loan Amount</li>
            <li>Status</li>
          </ul>

          {fake_data.map((_) => (
            <ul className="titleTable">
              <li>15/01/2024</li>
              <li>15/01/2024</li>
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
              <li>
                <CSSButton $bgColor={theme?.colors.lightYellow} $width={"70px"}>
                  Paid
                </CSSButton>
              </li>
            </ul>
          ))}
        </div>
      </CSSWrapTable>

      <CSSWrapTable $widthLiTag={"110px"}>
        <h3>Liquidate History</h3>
        <div className="wrapTable">
          <ul className="titleTable borderLine">
            <li style={{ width: 160 }}>Date</li>
            <li>Amount xAqua</li>
            <li>Amount ETH</li>
            <li>xAqua Price</li>
          </ul>

          {fake_data.map((_) => (
            <ul className="titleTable">
              <li style={{ width: 160 }}>21:05:12 15/01/2024</li>
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
              <li>0.45</li>
            </ul>
          ))}
        </div>
      </CSSWrapTable>
    </div>
  );
};

export default History;

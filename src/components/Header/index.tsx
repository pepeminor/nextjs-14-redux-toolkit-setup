"use-client";

import LogoBase from "@/../../public/LogoBase.png";
import LogoXAqua from "@/../../public/LogoXAqua.png";
import Fish_01 from "@/../../public/Fish_01.png";
import Fish_02 from "@/../../public/Fish_02.png";
import LogoEth from "@/../../public/LogoEth.png";
import "@rainbow-me/rainbowkit/styles.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useMemo, useState } from "react";

import useWindowSize from "@/hooks/useWindowSize";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styled from "styled-components";
import { useAccount } from "wagmi";
import ConnectedButton from "./ConnectedButton";

import Discord from "@/../public/Discord.svg";
import Docs from "@/../public/Docs.svg";
import X from "@/../public/X-logo.svg";
import Zealy from "@/../public/Zealy.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { PAGE_BREAK_POINT } from "@/common/helper";
const tagNormal = "text-black px-2 text-[18px] font-mono sm:mb-2";
const tagActive = "text-main underline px-2 text-[18px] font-mono sm:mb-2";

const linkNormal = "flex items-center px-4 py-2 mx-2 hover:underline";
const linkActive =
  "flex items-center px-4 py-2 mx-2 hover:underline font-bold bg-yellow rounded-[30px]";

const social_list = [
  {
    icon: Discord,
    link: "https://discord.gg/basescriptions",
    alt: "Follow us on Discord",
  },
  {
    icon: X,
    link: "https://twitter.com/ScriptionOnBase",
    alt: "Follow us on X",
  },
  {
    icon: Zealy,
    link: "https://zealy.io/c/basescriptions/",
    alt: "Follow us on Zealy",
  },
  {
    icon: Docs,
    link: "https://docs.basescriptions.com/",
    alt: "Follow us on Docs",
  },
];

const MENU = [
  {
    alt: "Borrow",
    link: "/",
  },
  {
    alt: "Convert",
    link: "/convert",
  },
  {
    alt: "Leaderboard",
    link: "/leaderboard",
  },
];

const Header = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const { isConnected } = useAccount();

  const [isExtendMenu, setIsExtendMenu] = useState(false);

  const link = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Inscriptions",
      path: "/inscriptions",
    },
    {
      label: "Marketplace",
      path: "/marketplace",
    },
  ];

  const formatPathname = pathname === "/" ? "/borrow" : pathname.toLowerCase();

  const Button = isConnected ? <ConnectedButton /> : <ConnectButton />;

  const isMobile = useMemo(() => width < PAGE_BREAK_POINT.MD, [width]);

  // const initData = useCallback(async () => {
  //   try {
  //     const rs = await getBalanceByAddress(address as string);
  //     setMyListToken(rs);
  //   } catch (err) {
  //     setMyListToken([]);
  //   }
  // }, [address, setMyListToken]);

  // useEffect(() => {
  //   initData();
  // }, [initData]);

  return (
    <HeaderWrapper>
      <header className="fixed top-[0px] z-10 flex w-[100%] justify-center bg-white">
        <nav className="mx-auto flex w-[100%] max-w-[1400px] items-center justify-between px-4 text-black md:flex-col sm:flex-row">
          {isMobile ? (
            <>
              <div className="flex items-center gap-1">
                <Link className="flex items-center " href="/">
                  <Image
                    priority
                    width={45}
                    height={45}
                    src={LogoXAqua}
                    alt="XAqua home page"
                    className="mr-2"
                  />
                  <span className="font-mono text-[24px] sm:hidden">XAqua</span>
                </Link>
                <div
                  onClick={() => setIsExtendMenu((prev) => !prev)}
                  className="flex items-center"
                >
                  <RxHamburgerMenu size={32} color="#fff" />
                </div>
              </div>
              <div>{Button}</div>
            </>
          ) : (
            <>
              <ul className="flex items-center md:mb-4">
                <li>
                  <Link className="flex items-center " href="/">
                    <Image
                      priority
                      width={90}
                      height={90}
                      src={LogoXAqua}
                      alt="picture"
                      className="mr-8"
                    />
                  </Link>
                </li>
                {MENU.map((item) => {
                  return (
                    <li key={item.alt}>
                      <Link
                        className={`${formatPathname.includes(item.alt.toLowerCase()) ? linkActive : linkNormal}`}
                        href={item.link}
                      >
                        {item.alt}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className={`flex flex-wrap items-center md:justify-end`}>
                <li className="flex items-center px-4">
                  <Image
                    priority
                    width={32}
                    height={32}
                    src={Fish_01}
                    alt="picture"
                    className="mr-2"
                  />
                  <p>0</p>
                </li>

                <li className="flex items-center px-4">
                  <Image
                    priority
                    width={32}
                    height={32}
                    src={Fish_02}
                    alt="picture"
                    className="mr-2"
                  />
                  <p>0</p>
                </li>

                <li className="flex items-center px-4">
                  <Image
                    priority
                    width={32}
                    height={32}
                    src={LogoEth}
                    alt="picture"
                    className="mr-2"
                  />
                  <p>0</p>
                </li>
                <li className="px-2 font-mono text-[18px] md:text-[14px] sm:mb-2">
                  {Button}
                </li>
              </ul>
            </>
          )}
        </nav>
      </header>
      {isMobile ? null : (
        <div className="fixed bottom-0 right-0 z-20 p-8">
          <ul>
            {social_list.map((social) => (
              <li
                key={social.link}
                className="mb-4 hover:cursor-pointer hover:opacity-70"
              >
                <Link target="_blank" href={social.link}>
                  <Image
                    width={44}
                    height={44}
                    priority
                    src={social.icon}
                    alt={social.alt}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isMobile && (
        <MobileMenu open={isExtendMenu}>
          <PanelMobile className="relative h-full">
            <div className="mx-auto flex w-[100%] max-w-[1400px] items-center justify-between p-4 md:flex-col sm:flex-row">
              <div
                onClick={() => setIsExtendMenu((prev) => !prev)}
                className="flex items-center"
              >
                <RxHamburgerMenu size={32} color="#fff" />
              </div>
              <div onClick={() => setIsExtendMenu((prev) => !prev)}>
                <Link className="flex items-center " href="/">
                  <Image
                    width={36}
                    height={36}
                    src={LogoBase}
                    alt="picture"
                    className="mr-2"
                  />
                  <span className="font-mono text-[24px] sm:hidden">XAqua</span>
                </Link>
              </div>
            </div>
            <div className="h-full px-4">
              <ul className="flex flex-col justify-center ">
                {link.map((item) => (
                  <li
                    onClick={() => setIsExtendMenu((prev) => !prev)}
                    className={`${formatPathname.includes(item.label.toLowerCase()) ? tagActive : tagNormal} py-2 `}
                    key={item.path}
                    style={{ padding: "0.5rem 0" }}
                  >
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                ))}
                <div className="py-3 pb-5">
                  <FlexItem>
                    {social_list.map((social) => (
                      <span key={social.link}>
                        <Link target="_blank" href={social.link}>
                          <Image
                            width={22}
                            height={22}
                            priority
                            src={social.icon}
                            alt={social.alt}
                          />
                        </Link>
                      </span>
                    ))}
                  </FlexItem>
                </div>
                <li
                  onClick={() =>
                    isConnected ? null : setIsExtendMenu((prev) => !prev)
                  }
                  className="py-2  font-mono text-[18px] text-white md:text-[14px] sm:mb-2"
                >
                  {isConnected ? (
                    <ConnectedButton cb={() => setIsExtendMenu(false)} />
                  ) : (
                    <ConnectButton />
                  )}
                </li>
              </ul>
            </div>
          </PanelMobile>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default memo(Header);

const SocialIcon = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
`;

const FlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const HeaderWrapper = styled.div``;

const PanelMobile = styled.div``;

export const MobileMenu = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  /* width: ${({ open }) => (open ? "100%" : "0")}; */
  background-color: #000;
  z-index: 1000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
  }
`;

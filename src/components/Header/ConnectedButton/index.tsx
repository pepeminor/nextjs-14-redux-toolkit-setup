'use-client';

import '@rainbow-me/rainbowkit/styles.css';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';

import styles from './button.module.css';

// import { getPointByAdress } from '@/common/utils';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FaCopy, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { GiLaurelsTrophy } from 'react-icons/gi';

// chainId 8453 is on Base Main-net
export const BASE_CHAIN_ID = 8453;

const ConnectedButton = ({ cb }: { cb?: Function }) => {
  const { address } = useAccount();
  const { switchNetwork } = useSwitchNetwork({
    chainId: BASE_CHAIN_ID,
  });
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();

  const [points, setPoints] = useState(0);

  const isBaseChain = chain?.id === BASE_CHAIN_ID;

  const notify = () => toast('Copied!');

  const onCopy = () => {
    address && navigator?.clipboard.writeText(address);
    notify();
  };

  // useEffect(() => {
  //   const getPoint = async (_address: string) => {
  //     try {
  //       const res = await getPointByAdress(_address);
  //       if (res) {
  //         const sumPoint = res.reduce((a: number, b: any) => a + Number(b?.point), 0);
  //         setPoints(sumPoint);
  //       }
  //     } catch (error) {}
  //   };
  //   if (address) {
  //     getPoint(address);
  //   }
  // }, [address]);

  const handleOpenSwitchNetwork = useCallback(() => {
    switchNetwork?.(BASE_CHAIN_ID);
  }, [switchNetwork]);

  return (
    <div className={isBaseChain && address ? styles.walletView : styles.walletViewNoHover}>
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, authenticationStatus, mounted }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      className="bg-red text-white p-2 rounded-md"
                      onClick={handleOpenSwitchNetwork}
                      type="button"
                    >
                      Switch network
                    </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button className="bg-white text-black p-2 rounded-md" type="button">
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
      <div className={styles.childWalletView}>
        <div className={styles.wrapInsideChild}>
          <div className={styles.insideChild}>
            <Link href="/myPoint" className={styles.item} onClick={() => cb?.()}>
              <div className={styles.flexItem}>
                <GiLaurelsTrophy />
                <span>My B-Points: {points}</span>
              </div>
            </Link>
            <Link href={'/myInscription'} className={styles.item} onClick={() => cb?.()}>
              <div className={styles.flexItem}>
                <FaHome />
                <span>My BaseScriptions</span>
              </div>
            </Link>
            <div className={styles.item} onClick={() => cb?.()}>
              <div className={styles.flexItem} onClick={onCopy}>
                <FaCopy />
                <span>Copy address</span>
              </div>
            </div>
            <div className={`${styles.item} ${styles.itemSignout}`} onClick={() => disconnect()}>
              <div className={styles.flexItem}>
                <FaSignOutAlt />
                <span>Disconnect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConnectedButton);

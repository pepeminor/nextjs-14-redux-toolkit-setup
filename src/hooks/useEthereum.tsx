'use client';

import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

const useEthereum = () => {
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [isIOSSafari, setIOSSafari] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [check, setCheck] = useState<any>();

  const { connector: activeConnector } = useAccount();

  useEffect(() => {
    if (mounted && activeConnector && activeConnector?.id === 'metaMask') {
      // metamask is installed
      setIsMetaMask(true);
    }
  }, [activeConnector, mounted]);

  useEffect(() => {
    const isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      mobile: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      },
    };
    setCheck(isMobile);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      const rs =
        /iP(ad|od|hone)/i.test(userAgent) &&
        /WebKit/i.test(userAgent) &&
        !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent);
      setIOSSafari(rs);
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    isMetaMask,
    isIOSSafari,
    check,
  };
};

export default useEthereum;

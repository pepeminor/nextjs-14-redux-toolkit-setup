'use client';

import { useEffect } from 'react';
import { getExchangeRate } from '@/common/utils';
import { useThemeContext } from '@/Context/ThemeContext';

const useEthPrice = () => {
  const { setEthUSD } = useThemeContext();

  const getEthUSD = async () => {
    const ethUSD = await getExchangeRate();
    setEthUSD(ethUSD);
  };

  useEffect(() => {
    const intervalId = setInterval(getEthUSD, 600000); // 10mins
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    getEthUSD();
  }, []);

  return null;
};

export default useEthPrice;

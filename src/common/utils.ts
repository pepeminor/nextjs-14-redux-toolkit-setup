import axios from "axios";

export const BASE_SCANNER_URL = "https://basescan.org/tx/";
export const ADDRESS_MARKETPLACE_CONTRACT =
  "0xb68017b5dd8596bc40042bc5eb9d3600576baae0";
export const TICKET_TYPE = "BaseRC20";

export function getExchangeRate() {
  const apiUrl = "https://api.coinbase.com/v2/exchange-rates";

  const queryParams = {
    currency: "ETH",
    rates: "USDT",
  };

  return axios
    .get(apiUrl, { params: queryParams })
    .then((response) => {
      if (response.data && response.data.data && response.data.data.rates) {
        const exchangeRate = response.data.data.rates.USDT;
        return exchangeRate;
      } else {
        return 0;
      }
    })
    .catch((error) => {
      console.error("_E_getExchangeRate", error);
      return 0;
    });
}

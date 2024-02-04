import moment from "moment";

export const DEFAULT_EMPTY_VALUE = "N/A";
export const DOMAIN_URI = "https://xqua.com";

export enum PAGE_BREAK_POINT {
  MD = 768,
  SM = 556,
}

export const shortAddress = (
  address: string,
  start: number = 0,
  end: number = 4,
) => {
  if (!address) return DEFAULT_EMPTY_VALUE;
  return `${address?.slice(start, end)}...${address?.slice(-end)}`;
};

export function formatNumber(
  value?: number | undefined,
  digit = 0,
  offsetRate?: number,
  toFixed = false,
) {
  if (value == undefined || value == null || Number.isNaN(value)) {
    return "0";
  }

  if (offsetRate != null) {
    value /= offsetRate;
  }

  const result = Intl.NumberFormat("en-US", {
    minimumFractionDigits: toFixed ? digit : 0,
    maximumFractionDigits: digit,
  }).format(value);

  // Eliminate result like -0.00
  if (Number(result) === 0 && result.startsWith("-"))
    return toFixed ? Number(0).toFixed(digit) : "0";

  return result;
}

export function formatTimestamp(timestamp: number, customFormat?: string) {
  if (isNaN(Number(timestamp))) return DEFAULT_EMPTY_VALUE;
  return moment.unix(timestamp).format(customFormat ?? "MM/DD/YYYY - HH:mm:ss");
}
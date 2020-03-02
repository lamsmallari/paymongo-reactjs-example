import currency from "currency.js";

const PESO = value =>
  currency(value, { symbol: "₱", decimal: ".", separator: "," }).format(true);

export default PESO;

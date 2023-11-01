export const formatNumber = (n: number) => {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2 });
};

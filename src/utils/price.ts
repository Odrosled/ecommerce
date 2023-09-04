export const price = (n?: number): string => {
  const formatter = new Intl.NumberFormat("it", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(n ?? 0);
};
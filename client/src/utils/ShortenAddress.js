export const ShortenAddress = ({ address }) => {
  return ` ${address.slice(0, 10)}${address.slice(32, 42)}`;
};

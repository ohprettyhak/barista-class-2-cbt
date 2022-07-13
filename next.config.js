const debug = process.env.NODE_ENV !== "production";
const name = "barista-class-2-cbt";

module.exports = {
  assetPrefix: !debug ? `https://cbt.haklee.me/barista-c2/` : "",
};

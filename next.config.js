const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? `https://cbt.haklee.me/barista-c2/` : "",
  basePath: !debug ? `/barista-c2` : "",
  images: {
    unoptimized: true,
    domains: ["cbt.haklee.me", "ohprettyhak.github.io/barista-class-2-cbt"],
  },
};

module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Big G Goods - General Store Merchants";
      return args;
    });
  },
  pwa: {
    name: "Big G Goods - General Store Merchants",
    themeColor: "#e2b007",
    msTileColor: "#e2b007",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  }
};

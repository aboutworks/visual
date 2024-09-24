const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: (config) => {
    // 处理 .tiff 文件
    config.module
      .rule("tiff")
      .test(/\.(tif|tiff)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash].[ext]",
        outputPath: "assets/images/",
      });

    // 处理 .obj 文件
    config.module
      .rule("obj")
      .test(/\.obj$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash:8].[ext]",
        outputPath: "assets/models/", // 指定输出路径
        publicPath: "assets/models/", // 指定公共路径
      });

    // 处理 .mtl 文件
    config.module
      .rule("mtl")
      .test(/\.mtl$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash:8].[ext]",
        outputPath: "assets/models/", // 指定输出路径
        publicPath: "assets/models/", // 指定公共路径
      });

    // 处理 .hdr 文件
    config.module
      .rule("hdr")
      .test(/\.hdr$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash].[ext]",
        outputPath: "assets/hdr/", // 指定输出路径
        publicPath: "assets/hdr/", // 指定公共路径
      });
  },
});

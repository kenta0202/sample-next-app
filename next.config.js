module.exports = {
  images: {
    // disableStaticImages: true,
    domains: [
      "links.papareact.com",
      "source.unsplash.com",
      "images.microcms-assets.io",
      "lh3.googleusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  //   next.config.js に使用する外部ドメインを設定
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
    BLOGAPP_KEY: process.env.NEXT_PUBLIC_BLOGAPP_KEY,
  },
  // サーバーサイド以外でも環境変数を使えるようにする
  // どこでも process.env.* で環境変数が利用できる
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ };
  //   return config;
  // },
};

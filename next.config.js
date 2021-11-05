module.exports = {
  images: {
    domains: ["links.papareact.com", "source.unsplash.com"],
  },
  //   next.config.js に使用する外部ドメインを設定
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
  },
  // サーバーサイド以外でも環境変数を使えるようにする
  // どこでも process.env.* で環境変数が利用できる
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ };
  //   return config;
  // },
};

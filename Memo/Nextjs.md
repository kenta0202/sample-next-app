# 環境構築

## nextjs プロジェクトの作成

- npx create-next-app --example with-typescript my-first-next-app2
- ルート配下に public,src,styles フォルダを作成
- util,pages,components,interfaces を src に移動

## Tailwindcss

- npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- touch styles/styled.css styles/dist.css
- 言語拡張機能のインストール:styled.css に ↓ を貼り付け
- @tailwind base;
  @tailwind components;
  @tailwind utilities;
- npm uninstall postcss
- npm i -D postcss-cli
- package.json の script の設定
  - "css:dev": "NODE_ENV=development TAILWIND_MODE=watch postcss ./styles/styled.css -o ./styles/dist.css -w ",
  - "css:pro": "NODE_ENV=production postcss ./styles/styled.css -o ./styles/dist.css"
- \_app.tsx を pages 配下に作成
- \_app.tsx に dist.css をインポート
- tailwind.confing に ↓ を追加
  - purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  - mode: "jit"
- npm i -D cssnano
- postcss.config.ts に plugins を追加
  - cssnano: process.env.NODE_ENV === "production" ? {} : false,
- npm i -D eslint-plugin-tailwindcss
  - {
    "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
    ],
    "plugins": ["tailwindcss"]
    }

## その他

- tsconfig.json の変更
  - "target": "es6",
  - "forceConsistentCasingInFileNames": false,
  - "baseUrl": "src"
  - "include": ["src/**/*", "next-env.d.ts", "**/*.ts", "**/*.tsx"],
- package.json
  - "homepage": "./",
  - build フォルダから build したものを表示するため
  - "eslintIgnore": ["/.eslintrc.js"]
- .env.local ファイルの作成
  - {process.env.NEXT_PUBLIC_FOO}で使用できる
- npm install --save-dev @types/node
  - TypeScript で、この Node.js が提供するモジュールを扱うため

## Eslint

- npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- touch tsconfig.eslint.json .eslintrc.js
- package.json
  - "lint": "eslint . src --ext .ts,.tsx",
  - "lint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix"
  - "eslintIgnore": ["/.eslintrc.js"]
- npm i -D eslint

## Firebase

- npm i -g firebase-tools
- npm i -D firebase
- firebase login
- firebase init
- build が本番用
- npm run build
- firebase deploy
  https://gist.github.com/LeeDDHH/e0eb75f87f48cd5c5a613a692c66ac78

## NextAuth

- 承認済みの Js 生成元 http://localhost:3000
- 承認済みのリダイレクト URL http://localhost:3000/api/auth/callback/google
- NEXTAUTH_URL=http://localhost:3000
- const router = useRouter();
  const [session, loading] = useSession();

if (loading) {
return <div>Loading....</div>;
}
if (!session) {
router.push("/");
}

## お問い合わせフォーム

- https://zenn.dev/tiwu_dev/articles/a7ebe4d36e4b74?utm_source=pocket_mylist
-

# その他

- Link 要素の as は動的リンクの時に使う
- getServerSideProps: リクエストの度に生成される(サーバーサイドレンダリング)
- getStaticProps: HTML はビルド時に生成され、それぞれのリクエストに対して CDN として再利用される(静的生成)
- ページのコンテンツが外部データに依存する場合 → getStaticProps
- ページのパス(path)が外部データに依存する場合 → getStaticPaths

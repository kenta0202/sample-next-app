## その他

- .env に環境変数を書き込んだ後は一度 Ctrl +C で終了した後に、npm start で再コンパイル

## ヘッドレス CMS(MicroCMS)

- npm i -D microcms-js-sdk
-

## Static Forms でサーバレスなお問い合わせフォームの作成

- https://zuma-lab.com/posts/next-create-contact-page-by-static-forms

## Heroicons

- npm i @heroicons/react
- @heroicons/react/outline か@heroicons/react/solid からインポート
- import { BeakerIcon } from '@heroicons/react/solid'

## Recoil の実装

- npm i recoil
- state の設定
- \_app.tsx で return されたものを RecoilRoot で囲う
- 各ページの処理
  - import { useSetRecoilState, useRecoilValue } from "recoil";
  -

## Scroll の実装

- npm i react-scroll
- import { Link as Scroll } from "react-scroll";
- <Scroll to="#" smooth={true} duration={600} offset={-50}> コンセプト </Scroll>

## Lodash

- https://shimba.io/honmaaax/article/01DYTXNCEQ8YD56BNTJX3FH86P?type=article
- npm i --save lodash
- npm i --save-dev @types/lodash
- import \_ from 'lodash'
- const deepCopyArray = \_.cloneDeep(array) クローンを作成
- \_.isEmpty(obj) オブジェクトが空かどうかを判定
- \_.chunk(array, 3); // 最大３件ごとに分割
- \_.groupBy(users, 'dogOrCat'); グループ化
- \_.difference(array, [values]) : 差集合。つまり左から右を除去。
- \_.intersection([arrays]) : 積集合。つまり全てに共通してあるもののみ。
- \_.union([arrays]) : 和集合。つまり全ての合算（重複なし）。
- \_.xor([arrays]) : 排他的論理和。つまり全ての中で重複の無い値のみ。
- \_.uniq(array) : 重複排除。

## Dayjs

- npm i dayjs
- import dayjs from 'dayjs'
- const a = dayjs('2019-01-10 17:30:20');
- a.format('YYYY-MM-DD HH:mm:ss')); // '2019-01-10 17:30:20'

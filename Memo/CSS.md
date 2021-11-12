## CSS

- static：配置方法を指定せず、場所も指定しません。(初期値)
- relative：相対位置から配置を指定します。
- absolute：絶対位置から配置を指定します。
  - relative,absolute は top,right,bottom で場所を変更
- fixed：絶対位置から配置を指定し、画面をスクロールしても固定
- colspan=”” :水平方向にセルを結合
- rowspan=”” :垂直方向にセルを結合する
- transition 4 つのプロパティ

  - transition: margin-right 4s ease-in-out 1s;
  - /_ プロパティ名 | 時間 | イージング関数 | 遅延 _/
  - active や hover と一緒に使う
  - transition-property: all; どのプロパティにアニメーションを適用するか指定するプロパティ。
  - transition-duration: 300ms; アニメーション開始から終了までの所要時間
  - transition-timing-function: ease; アニメーションのイージング
  - transition delay: 0s; アニメーションが開始するまでの遅延時間を指定するプロパティ

- animation 8 つのプロパティ
  - animation: rotation 2s ease 0s 1 alternate none running;
  - animation-name 要素に適用するキーフレームアニメーションを指定するプロパティ
  - animation-duration アニメーション開始から終了までの所要時間を指定するプロパティ。
  - animation-timing-function アニメーションのイージングを指定するプロパティ。
    - ease, linear, ease-in-out,cubic-bezier(x1,y1,x2,y2)
  - animation-delay アニメーションが開始するまでの遅延時間を指定するプロパティ。
  - animation-iteration-count アニメーションのループ回数を指定するプロパティ。infinite を指定すると無限ループする。
  - animation-direction アニメーションの再生方向を指定するプロパティ。
    - normal,reverse,alternate,alternate-reverse
  - animation-fill-mode アニメーションの実行前後の状態の指定する
    - none,backwards,forwards,both
  - animation-play-state アニメーションの再生・停止を指定する
    - running 再生中, paused 一時停止

## Taiwind

- bg-gradient-to-r from-darkgrey via-pink-500 to-yellow-500
- whitespace
- cursor-pointer
- transition
- duration-100
- transform
- scale-125
- overflow
- space
- ring :Utilities for creating outline rings with box-shadows.
- translate 変換 移動
- transition-○○ ease-in-out duration-300
- col-span-{n}ユーティリティを使用して、要素を n 列に広げます。
- className={`${!selected && " ml-4"}`}

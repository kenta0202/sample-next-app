/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-sync-scripts */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from 'next/router';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
} from "utils/Blog/constants";

class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="ja"
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"
      >
        <Head>
          <meta name="description" content={SITE_DESCRIPTION} />
          {/* Webページの概要や内容などを指定 */}
          <meta name="theme-color" content="#5588cc" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#fa811e"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#2894bf"
          />
          {/* ブラウザのバーの色を変更 */}
          <meta charSet="utf-8" />
          {/* 文字コードの設定 日本語で記述するサイトであれば「utf-8」*/}
          <meta name="author" content="kenta0202" />
          {/* 著者名や会社名などを指定 */}
          <meta name="keywords" content={SITE_KEYWORDS} />
          {/* Webページの内容に関係するキーワード */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* （Internet Explorer）を使っている人向けに、指定したバージョンで表示させる */}
          {/* <meta name="robots" content="noindex,nofollow" /> */}
          {/* 指定したページを検索結果に載せたくない場合に記述します。
            ・noindex：検索結果にインデックス（掲載）しない
            ・nofollow：クローラーに巡回させない */}
          <meta name="format-detection" content="telephone=no" />
          {/* メールアドレス・電話番号・住所の自動リンクを無効化する */}
          {/*  OGPの設定  */}
          {/* OGPタグ:SNSとWebページの情報を連携させる際に記述するタグ */}
          <meta property="og:type" content="blog" />{" "}
          {/* 表示するページの種類 */}
          <meta property="og:title" content={SITE_NAME} />
          {/* ページのタイトルを指定します。titleタグで設定したタイトルと同様のものを記述するのが一般的ですが、別のタイトルを記載すると、og:titleのタイトルが優先される。 */}
          <meta property="og:url" content={SITE_URL} />
          {/* 表示するページのURLを指定します。URLは絶対パスで記述。 */}
          <meta property="og:description" content={SITE_DESCRIPTION} />
          {/* og:descriptionの適した文字数は80～90文字程度 */}
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:image" content={`${SITE_URL}/ogp.png`} />
          {/* Webの記事やページがSNSでシェアされた際に表示されるサムネイルとなる画像を指定 */}
          {/* Twitterカードの設定 */}
          <meta name="twitter:card" content="summary" />
          {/* サマリーカードの場合は”summary“、大型画像付きサマリーカードの場合は”summary_large_image”と指定 */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          {/* ホームページをスマホのホーム画面に追加した時に表示される画像のこと */}
        </Head>
        <body
          id="#"
          className="min-h-screen dark:text-gray-300 dark:bg-darkgrey"
        >
          <Main />
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossOrigin="anonymous"
          ></script>
          <script src="/js/scroll.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

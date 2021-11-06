/* eslint-disable @next/next/no-sync-scripts */
// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// type Props = {}

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head></Head>
        <body
          id="#"
          className="min-h-screen dark:text-gray-300 dark:bg-darkgrey"
        >
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossOrigin="anonymous"
          ></script>
          <script src="/js/scroll.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// type Props = {}

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head />
        <body
          id="#"
          className="min-h-screen dark:text-gray-300 dark:bg-darkgrey"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

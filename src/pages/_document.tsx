// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// type Props = {}

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen dark:text-gray-50 bg-gray-100 dark:bg-darkgrey">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

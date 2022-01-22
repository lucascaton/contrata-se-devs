import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    if (typeof global.navigator === "undefined") global.navigator = {};

    return (
      <Html lang="pt">
        <Head>
          <link rel="icon" href="/favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

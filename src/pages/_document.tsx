import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src='/writable/__ENV.js' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

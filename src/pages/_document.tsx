import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

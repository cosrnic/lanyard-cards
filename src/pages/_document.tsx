import { getAvatarURL } from "@/utils/getAvatarURL";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={getAvatarURL("508662064063971348")}
                />
                <meta property="og:title" content="Lanyard Cards" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://cards.cosrnic.uk" />
                <meta property="og:image" content="/images/pfp.png" />
                <meta
                    property="og:description"
                    content="Lanyard by Phineas, Website by Cosmic"
                />
                <meta name="theme-color" content="#D7BB87" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

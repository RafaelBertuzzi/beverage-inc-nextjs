import {AppProps} from "next/app";

import "../styles/global.scss"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Footer />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp

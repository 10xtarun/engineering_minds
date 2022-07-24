import Document from "next/document"
import { Html, Head, Main, NextScript } from "next/document"

class MainDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <!-- Required meta tags --> */}
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" type="text/css" href="plugins/bootstrap4/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" />
                    <script src="js/jquery-3.2.1.min.js"></script>
                    <script src="js/custom.js"></script>
                    <script src="js/elements.js"></script>
                    <script src="plugins/bootstrap4/popper.js"></script>
                    <script src="plugins/bootstrap4/bootstrap.min.js"></script>
                    <script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

export default MainDocument
import Document from "next/document"
import { Html, Head, Main, NextScript } from "next/document"

class MainDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Engineering Minds"/>

                    <link rel="stylesheet" type="text/css" href="assets/bootstrap4/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="assets/styles/main_styles.css" />
                    <link rel="stylesheet" type="text/css" href="assets/styles/responsive.min.css" />
                    <link rel="stylesheet" type="text/css" href="assets/styles/elements.css" />
                    <link rel="stylesheet" type="text/css" href="assets/styles/elements_responsive.css" />
                    <link rel="stylesheet" type="text/css" href="assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css" />
                    <script src="assets/js/jquery-3.2.1.min.js"></script>
                    <script src="assets/bootstrap4/popper.js"></script>
                    <script src="assets/bootstrap4/bootstrap.min.js"></script>
                    <script src="assets/js/custom.js"></script>
                    <script src="assets/plugins/greensock/TweenMax.min.js"></script>
                    <script src="assets/plugins/greensock/TimelineMax.min.js"></script>
                    <script src="assets/plugins/scrollmagic/ScrollMagic.min.js"></script>
                    <script src="assets/plugins/greensock/animation.gsap.min.js"></script>
                    <script src="assets/plugins/greensock/ScrollToPlugin.min.js"></script>
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
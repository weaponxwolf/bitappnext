import React from 'react'
import Script from 'next/script'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const Scripts = () => {
  return (
    <>
    <Html>
    <Head />
    <Main />
    <NextScript />
    <Script strategy='beforeInteractive' src="/assets/js/jquery-3.5.1.min.js"></Script>
    <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
    <Script src="/assets/vendor/wow/wow.min.js"></Script>
    <Script src="/assets/vendor/owl-carousel/js/owl.carousel.min.js"></Script>
    <Script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></Script>
    <Script src="/assets/vendor/animateNumber/jquery.animateNumber.min.js"></Script>
    <Script src="/assets/js/google-maps.js"></Script>
    <Script src="/assets/js/theme.js"></Script>
    </Html>
    </>
  )
}

export default Scripts
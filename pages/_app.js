import React from "react";
import Link from "next/link";
import Head from "next/head";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="container">
        <Head>
          <title>Ondrej Sika</title>
        </Head>
        <p>
          <h3 className="site-header">Ondrej Sika</h3> ~{" "}
          <Link href="/">
            <a>About Me</a>
          </Link>{" "}
          ~{" "}
          <Link href="/contact-me">
            <a>Contact Me</a>
          </Link>
        </p>
        <Component {...pageProps} />
        <style jsx>{`
          .site-header {
            display: inline;
            font-size: 1em;
          }
        `}</style>
        <style jsx global>{`
          * {
            font-family: fantasy;
          }
          .container {
            margin: 0 auto;
            max-width: 800px;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;

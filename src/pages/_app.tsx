import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import React from 'react';
import Navbar from "../components/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

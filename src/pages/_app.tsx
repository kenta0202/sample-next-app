import "../../styles/dist.css";
import "../../styles/normalize.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

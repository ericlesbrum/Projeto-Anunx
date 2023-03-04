import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastyProvider } from '@/src/contexts/Toasty';
import { SessionProvider } from "next-auth/react"
import theme from '../src/theme';
import CheckAuth from '../src/components/CheckAuth';

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session} basePath="/api/auth">
        <ThemeProvider theme={theme}>
          <Head>
            <title>Anunx</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ToastyProvider>
            <CssBaseline />
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps} />
                : <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
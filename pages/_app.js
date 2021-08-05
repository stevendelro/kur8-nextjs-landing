import { ThemeProvider, makeStyles, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import MyAppBar from '../components/Layout/MyAppbar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    width: '100vw',
  },
}));

export default function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    prefersDarkMode ? setDarkMode(true) : setDarkMode(false);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#fff',
            light: '#fff',
            dark: '#b2b2b2',
            contrastText: '#000',
            accent: '#923f2e',
          },
          secondary: {
            main: '#000',
            light: '#333',
            dark: '#000',
            contrastText: '#ffffff',
          },
          common: {
            defaultDarkBackground: '#303030',
            defaultLightBackground: '#f5f5f5',
          },
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <React.Fragment>
      <Head>
        <title>KUR8</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <MyAppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

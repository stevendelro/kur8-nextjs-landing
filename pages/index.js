import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from 'react';

import About from '../components/Sections/About';
import Demos from '../components/Sections/Demos';
import Footer from '../components/Sections/Footer';
import Logo from '../components/Sections/Logo';
import Team from '../components/Sections/Team';

const useStyles = makeStyles(theme => ({
  topLevelContainer: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container className={classes.topLevelContainer} maxWidth="xl">
      <Logo />
      <About />
      <Demos />
      <Team />
      <Footer />
    </Container>
  );
}

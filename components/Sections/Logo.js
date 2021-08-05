import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import Kur8Logo from '../Kur8Logo';

const useStyles = makeStyles(theme => ({
  heroSectionRoot: {
    height: '90vh',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
}));

function Hero() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid
      className={classes.heroSectionRoot}
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Kur8Logo />
    </Grid>
  );
}

export default Hero;

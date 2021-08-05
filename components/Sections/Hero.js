import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroSectionRoot: {
    height: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
}));

function Hero() {
  const theme = useTheme();
  const classes = useStyles();
  let renderedLogo;
  if (theme.palette.type === 'dark') {
    renderedLogo = 'https://lineemen.sirv.com/Images/kur8-logo-grey.png';
  } else {
    renderedLogo = 'https://lineemen.sirv.com/Images/kur8-logo-white.png';
  }
  return (
    <Grid
      className={classes.heroSectionRoot}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={renderedLogo} width="693" height="417" alt="" />
      <Typography variant="h4" component="h1">
        A visual overview of Kubernetes architecture and Prometheus metrics
      </Typography>
    </Grid>
  );
}

export default Hero;

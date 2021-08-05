import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(them => ({
  heroSectionRoot: {
    height: '100vh',
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.heroSectionRoot}
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <img
        src="https://lineemen.sirv.com/Images/kur8-logo.jpg"
        width="693"
        height="417"
        alt=""
      />
      <Typography variant="h3" component="h1">
        Sounds like curate
      </Typography>
    </Grid>
  );
}

export default Hero;

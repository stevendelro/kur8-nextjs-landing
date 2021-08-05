import { makeStyles } from '@material-ui/core/styles';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined'; // monitoring
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined'; // structure
import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'; // charts
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroSectionRoot: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  heroTitle: {
    marginBottom: theme.spacing(4),
  },
  whatIsContainer: {
    marginBottom: theme.spacing(6),
  },
  keyPoint: {
    width: '300px',
    margin: theme.spacing(0, 3),
  },
  keyPointIcon: {
    margin: theme.spacing(2, 0),
  },
  keyPointTitle: {
    marginBottom: theme.spacing(2),
  },
  keyPointText: {},
}));

function About() {
  const classes = useStyles();
  return (
    <Grid
      id="about"
      className={classes.heroSectionRoot}
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Container className={classes.whatIsContainer} maxWidth="sm">
        <Typography className={classes.heroTitle} variant="h2" align="center">
          What is KUR8
        </Typography>
        <Typography variant="h5" align="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
          nesciunt accusamus eius architecto atque sint tempore veritatis
          molestiae nihil deleniti beatae, voluptates repudiandae optio. A nihil
          ratione incidunt ducimus.
        </Typography>
      </Container>
      <Grid
        className={classes.keyPointGroup}
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Box sm={12} md={4}>
          <Grid
            className={classes.keyPoint}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <BallotOutlinedIcon
              className={classes.keyPointIcon}
              style={{ fontSize: 70 }}
            />
            <Typography className={classes.keyPointTitle} variant="h6">
              Monitoring
            </Typography>
            <Typography className={classes.keyPointText} align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              ipsam nesciunt accusamus eius architecto atque sint tempore
              veritatis molestiae nihil deleniti beatae, voluptates repudiandae
              optio. A nihil ratione incidunt ducimus.
            </Typography>
          </Grid>
        </Box>
        <Box sm={12} md={4}>
          <Grid
            className={classes.keyPoint}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <MapOutlinedIcon
              className={classes.keyPointIcon}
              style={{ fontSize: 70 }}
            />
            <Typography className={classes.keyPointTitle} variant="h6">
              Topology
            </Typography>
            <Typography className={classes.keyPointText} align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              ipsam nesciunt accusamus eius architecto atque sint tempore
              veritatis molestiae nihil deleniti beatae, voluptates repudiandae
              optio. A nihil ratione incidunt ducimus.
            </Typography>
          </Grid>
        </Box>
        <Box sm={12} md={4}>
          <Grid
            className={classes.keyPoint}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <TrendingUpIcon
              className={classes.keyPointIcon}
              style={{ fontSize: 70 }}
            />
            <Typography className={classes.keyPointTitle} variant="h6">
              Charts
            </Typography>
            <Typography className={classes.keyPointText} align="center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              ipsam nesciunt accusamus eius architecto atque sint tempore
              veritatis molestiae nihil deleniti beatae, voluptates repudiandae
              optio. A nihil ratione incidunt ducimus.
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;

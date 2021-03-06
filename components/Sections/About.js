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
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(15),
    },
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.grey[800],
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  heroTitle: {
    marginBottom: theme.spacing(4),
  },
  description: {
    width: '500px',
  },
  whatIsContainer: {
    marginBottom: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(20),
    },
  },
  keyPoint: {
    width: '300px',
    margin: theme.spacing(0, 6),
  },
  keyPointIcon: {
    margin: theme.spacing(2, 0),
  },
  keyPointTitle: {
    marginBottom: theme.spacing(2),
  },
  keyPointText: {
    fontSize: theme.typography.pxToRem(20)
  }
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
      <Container className={classes.whatIsContainer} maxWidth="md">
        <Typography className={classes.heroTitle} variant="h2" align="center">
          What is KUR8
        </Typography>
        <Typography variant="h5" align="center">
          KUR8 is a visual overview of Kubernetes architecture and Prometheus
          metrics. Deploy directly into your Kubernetes cluster with one config
          file along with another set of permissions using RBAC authorization.
          KUR8 will spin up locally allowing you to monitor your Kubernetes
          cluster at a glance.
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
            <MapOutlinedIcon
              className={classes.keyPointIcon}
              style={{ fontSize: 100 }}
            />
            <Typography className={classes.keyPointTitle} variant="h4">
              Topology
            </Typography>
            <Typography className={classes.keyPointText} variant='h5' align="center">
              Depending on how your cluster is orchestrated, the structure page
              will render different configurations of master nodes and worker
              nodes. KUR8 will allow developers to quickly get an intuitive
              sense of the topology and architecture of the Kubernetes cluster.
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
              style={{ fontSize: 100 }}
            />
            <Typography className={classes.keyPointTitle} variant="h4">
              Charts
            </Typography>
            <Typography className={classes.keyPointText} variant='h5' align="center">
              Quickly scan our charts to gather relevant metrics for Kubernetes
              monitoring to instantly get a sense of the current state of your
              cluster. Easy PROMQL autocomplete querying will guide you to build
              your own custom metrics page.
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
            <BallotOutlinedIcon
              className={classes.keyPointIcon}
              style={{ fontSize: 100 }}
            />
            <Typography className={classes.keyPointTitle} variant="h4">
              Monitoring
            </Typography>
            <Typography className={classes.keyPointText} variant='h5' align="center">
              Always stay in the loop with all Prometheus alerts including the
              custom ones right in your dashboard. KUR8 will reveal any alerts
              that are firing and which rule group they fall including their
              severity, labels, and summaries regarding each active alert.
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;

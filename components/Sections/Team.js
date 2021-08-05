import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroSectionRoot: {
    minHeight: '100vh',
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
    marginBottom: theme.spacing(12),
  },
  whatIsContainer: {
    marginBottom: theme.spacing(6),
  },
  subtitle: {
    marginBottom: theme.spacing(9),
  },
  teamMember: {
    width: '300px',
    margin: theme.spacing(0, 6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
    },
  },
  teammateName: {
    fontWeight: '500',
    margin: theme.spacing(2, 0, 0),
  },
  teammateTitle: {
    fontWeight: '400',
    margin: theme.spacing(2, 0, 0),
  },
  teammateImg: {
    borderRadius: '10px',
    boxShadow: theme.shadows[15],
  },
  footer__socials: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0, 0, 7),
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
  },
}));

const imgs = [
  'https://lineemen.sirv.com/Images/ivy.JPG',
  'https://lineemen.sirv.com/Images/jimmy.jpeg',
  'https://lineemen.sirv.com/Images/steven.jpg',
  'https://www.linkedin.com/in/jimmycngo/',
];

function About() {
  const classes = useStyles();

  return (
    <Grid
      id="team"
      className={classes.heroSectionRoot}
      container
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Container className={classes.whatIsContainer} maxWidth="sm">
        <Typography className={classes.heroTitle} variant="h2" align="center">
          Meet The Team
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
            className={classes.teamMember}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <CardMedia
              component="img"
              className={classes.teammateImg}
              alt="steven del rosario"
              height="300"
              image="https://lineemen.sirv.com/Images/steven.jpg"
              title="Steven Del Rosario"
            />
            <Typography className={classes.teammateName} variant="h5">
              Steven Del Rosario
            </Typography>
            <Typography className={classes.teammateTitle} variant="h6">
              SOFTWARE ENGINEER
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Box
                onClick={() =>
                  (window.location.href = `https://www.linkedin.com/in/stevendelro/`)
                }
                className={classes.footer__socials}>
                LINKEDIN
              </Box>
              <Box
                onClick={() =>
                  (window.location.href = `https://github.com/stevendelro`)
                }
                className={classes.footer__socials}>
                GITHUB
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sm={12} md={4}>
          <Grid
            className={classes.teamMember}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <CardMedia
              component="img"
              className={classes.teammateImg}
              alt="ivy yu"
              height="300"
              image="https://lineemen.sirv.com/Images/ivy.JPG"
              title="Ivy Yu"
            />
            <Typography className={classes.teammateName} variant="h5">
              Ivy Yu
            </Typography>
            <Typography className={classes.teammateTitle} variant="h6">
              SOFTWARE ENGINEER
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Box
                onClick={() =>
                  (window.location.href =
                    'https://www.linkedin.com/in/ivy-yu-746a5b132/')
                }
                className={classes.footer__socials}>
                LINKEDIN
              </Box>
              <Box
                onClick={() =>
                  (window.location.href = `https://github.com/ivy118`)
                }
                className={classes.footer__socials}>
                GITHUB
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sm={12} md={4}>
          <Grid
            className={classes.teamMember}
            container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <CardMedia
              component="img"
              className={classes.teammateImg}
              alt="jimmy c ngo"
              height="300"
              image="https://lineemen.sirv.com/Images/jimmy.jpeg"
              title="Jimmy Ngo"
            />
            <Typography className={classes.teammateName} variant="h5">
              Jimmy Ngo
            </Typography>
            <Typography className={classes.teammateTitle} variant="h6">
              SOFTWARE ENGINEER
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Box
                onClick={() =>
                  (window.location.href = `https://www.linkedin.com/in/jimmycngo/`)
                }
                className={classes.footer__socials}>
                LINKEDIN
              </Box>
              <Box
                onClick={() =>
                  (window.location.href = `https://github.com/jimmycngo`)
                }
                className={classes.footer__socials}>
                GITHUB
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;

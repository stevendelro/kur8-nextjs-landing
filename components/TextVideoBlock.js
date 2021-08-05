import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Video from './Video';

const useStyles = makeStyles(theme => ({
  textVideoBlock__ROOT: {
    marginBottom: theme.spacing(30),
    [theme.breakpoints.only('md')]: {
      marginBottom: theme.spacing(15),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      width: '100%',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  textVideoBlock__title: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.grey[800],
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(2, 3),
      marginBottom: theme.spacing(3),
    },
  },
  textVideoBlock__text: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.grey[800],
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(2, 3),
    },
  },
  textVideoBlock__image: {
    padding: theme.spacing(3, 5),
    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(3, 0),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 3, 0),
    },
  },
}));

export default function TextVideoBlock({
  videoPath,
  imagePath,
  text,
  title,
  videoSide = 'right',
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Story = () => {
    return (
      <Grid item sm={12} md={5}>
        <Typography
          className={classes.textVideoBlock__title}
          component="p"
          variant="h3"
          color="textSecondary"
          align={isSmallScreen ? 'left' : videoSide}>
          {title}
        </Typography>
        <Typography
          component="p"
          variant="h5"
          color="textSecondary"
          className={classes.textVideoBlock__text}
          align={isSmallScreen ? 'left' : videoSide}
          paragraph>
          {text}
        </Typography>
      </Grid>
    );
  };

  let composedArrangement;
  switch (videoSide) {
    case 'right':
      isSmallScreen
        ? // Keep image above text on small screens
          (composedArrangement = (
            <>
              <Grid
                item
                sm={12}
                md={7}
                className={classes.textVideoBlock__image}>
                <Video videoPath={videoPath} imagePath={imagePath} />
              </Grid>
              <Story />
            </>
          ))
        : (composedArrangement = (
            <>
              <Story />
              <Grid
                item
                sm={12}
                md={7}
                className={classes.textVideoBlock__image}>
                <Video videoPath={videoPath} imagePath={imagePath} />
              </Grid>
            </>
          ));
      break;
    case 'left':
      composedArrangement = (
        <>
          <Grid item sm={12} md={7} className={classes.textVideoBlock__image}>
            <Video videoPath={videoPath} imagePath={imagePath} />
          </Grid>
          <Story />
        </>
      );
      break;

    default:
      composedArrangement = (
        <>
          <Story />
          <Grid item sm={12} md={7} className={classes.textVideoBlock__image}>
            <Video videoPath={videoPath} imagePath={imagePath} />
          </Grid>
        </>
      );
      break;
  }

  return (
    <Grid
      container
      className={classes.textVideoBlock__ROOT}
      direction={isSmallScreen ? 'column' : 'row'}
      justifyContent="center"
      alignItems="center">
      {composedArrangement}
    </Grid>
  );
}

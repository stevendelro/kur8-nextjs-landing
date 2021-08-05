import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  appbarLinks: {
    marginRight: theme.spacing(2),
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.common.black,
  },
}));

const StyledSwitch = withStyles(theme => ({
  switchBase: {
    color: theme.palette.common.white,
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: '#9ccef2',
        borderColor: theme.palette.secondary.light,
      },
    },
  },
  track: {
    opacity: 1,
    backgroundColor: '#c1e0f7',
  },
  checked: {
    color: theme.palette.primary.light,
  },
}))(Switch);

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function MyAppBar(props) {
  const { darkMode, toggleDarkMode } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
              <Typography variant="h6">
                <Link
                  href="#about"
                  className={classes.appbarLinks}
                  onClick={e => e.preventDefault}>
                  ABOUT
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  href="#team"
                  className={classes.appbarLinks}
                  onClick={e => e.preventDefault}>
                  TEAM
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  href="https://github.com/oslabs-beta/KUR8"
                  className={classes.appbarLinks}
                  onClick={e => e.preventDefault}>
                  GITHUB
                </Link>
              </Typography>
            </Grid>

            <FormGroup>
              <FormControlLabel
                className={classes.darkModeSwitchContainer}
                control={
                  <StyledSwitch
                    id="themetouglebutton"
                    // className={classes.darkModeSwitch}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                }
              />
            </FormGroup>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}

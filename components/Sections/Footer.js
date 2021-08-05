import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Kur8Logo from '../Kur8Logo'

const useStyles = makeStyles(theme => ({
  myFooter__ROOT: {
    flexGrow: 1,
  },
  footer__appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
    padding: theme.spacing(0, 0, 7, 0),

  },
  footer__logo: {
    transition: 'all .2s ease-in-out',
    '&:hover': { transform: 'scale(1.1)' },
  },
  footer__nameDate: {
    paddingTop: theme.spacing(1),
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.grey[800],
  },
}));

export default function MyFooter(props) {
  const classes = useStyles();
  const theme = useTheme();
  let renderedLogo;
  if (theme.palette.type === 'dark') {
    renderedLogo = 'https://lineemen.sirv.com/Images/kur8-logo-grey.jpg';
  } else {
    renderedLogo = 'https://lineemen.sirv.com/Images/kur8-logo-white.png';
  }
  return (
    <footer className={classes.myFooter__ROOT}>
      <AppBar
        position="static"
        elevation={0}
        className={classes.footer__appBar}>
        {/* LOGO */}
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.footer__logo}>
            <Kur8Logo />
          </Grid>

          <Grid className={classes.footer__nameDate} item>
            <Typography variant="overline">
              KUR8 is Open Source and licensed under MIT -{' '}
              {`${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </footer>
  );
}

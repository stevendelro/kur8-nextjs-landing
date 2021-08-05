import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  video__ROOT: {
    verticalAlign: 'middle',
    borderRadius: '10px',
    boxShadow: theme.shadows[15],
  },
}));

export default function Video({
  imagePath,
  videoPath,
  height = 'auto',
  width = '100%',
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isTinyScreenDown = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.videoContainer}>
      <video
        className={classes.video__ROOT}
        height={height}
        width={width}
        autoPlay={isTinyScreenDown ? false : true}
        muted
        controls={false}
        preload="auto"
        poster={imagePath}
        data-setup="{}"
        loop>
        <source src={videoPath} type="video/mp4"></source>
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that supports HTML5 video. See:
          https://videojs.com/html5-video-support/
        </p>
      </video>
    </div>
  );
}

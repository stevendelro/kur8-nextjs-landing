import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from 'react';

import TextVideoBlock from '../TextVideoBlock';

const useStyles = makeStyles(theme => ({
  textVideoBlockContainer: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
    paddingBottom: theme.spacing(20),
    '&:last-child': {
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      '&:last-child': {
        paddingBottom: theme.spacing(30),
      },
    },

  },
}));

const titleArr = [
  'Structure Page',
  'Metrics Page',
  'Custom Metrics',
  'Alerts Page',
];

const textArr = [
  'Navigate through the structures page to easily see your control planes and worker nodes with all their pods inside. Click on the components to see more details about its metadata, status, and specifications. Easily find information regarding the image IDs or IP addresses of anything from containers to ingresses.',
  'Review relevant metrics such as the number of pods in each namespace, which pods have gone down, CPU and memory usage by both container and pod—all in gauge, histogram, and line chart form.',
  "Create custom charts and graphs with KUR8's PromQL autocomplete search bar for intuitive custom metrics querying within varied time ranges and step intervals.",
  'Observe all Prometheus alert information like name, health, state, evaluation time, severity, labels, and summaries. Quickly discover which alerts are currently firing and which group they fall under.',
];

const imagePaths = [
  'https://lineemen.sirv.com/Images/structures.mp4?thumbnail=1920',
  'https://lineemen.sirv.com/Images/metrics.mp4?thumbnail=1920',
  'https://lineemen.sirv.com/Images/custom.mp4?thumbnail=1920',
  'https://lineemen.sirv.com/Images/alerts.mp4?thumbnail=1920',
];
const videoPaths = [
  'https://lineemen.sirv.com/Images/structures.mp4',
  'https://lineemen.sirv.com/Images/metrics.mp4',
  'https://lineemen.sirv.com/Images/custom.mp4',
  'https://lineemen.sirv.com/Images/alerts.mp4',
];

function Videos() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.textVideoBlockContainer} maxWidth="xl">
        {videoPaths.map((videoPath, index) => {
          return (
            <TextVideoBlock
              key={`text-video-block-${index}`}
              videoPath={videoPath}
              imagePath={imagePaths[index]}
              text={textArr[index]}
              title={titleArr[index]}
              videoSide={index % 2 === 0 ? 'left' : 'right'}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default Videos;

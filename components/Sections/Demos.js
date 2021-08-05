import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextVideoBlock from '../TextVideoBlock';

const useStyles = makeStyles(theme => ({
  textVideoBlockContainer: {
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(5),
    },
  },
}));

const textArr = [
  'Navigate through the structures page to easily see your control planes and worker nodes with all their pods inside. Click on the components to see more details about its metadata, status, and specifications. Easily find information regarding the image IDs or IP addresses of anything from containers to ingresses.',
  'Get the state of your cluster at a glance with our curated metrics dashboard.',
  'Use our custom metrics page to use our PromQL autocomplete feature to query any metrics you want.',
  'All of your Prometheus alerts including your custom ones are displayed here in the Alerts tab. Find out if any alerts are firing and which rule groups they fall under.',
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
      <Container className={classes.textVideoBlockContainer} maxWidth='xl'>
        {videoPaths.map((videoPath, index) => {
          return (
            <TextVideoBlock
              key={`text-video-block-${index}`}
              videoPath={videoPath}
              imagePath={imagePaths[index]}
              text={textArr[index]}
              videoSide={index % 2 === 0 ? 'left' : 'right'}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default Videos;

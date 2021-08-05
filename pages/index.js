import React from 'react';
import Container from '@material-ui/core/Container';

import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Demos from '../components/Sections/Demos';
// import GetStarted from '../components/Sections/GetStarted';

export default function Index() {
  return (
    <Container maxWidth= 'xl'>
      <Hero />
      <About />
      <Demos />
      {/* <GetStarted /> */}
    </Container>
  );
}

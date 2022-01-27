import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm a Tech-savvy Web developer with a specialty in Front-end development, search engine optimization and digital marketing. I help your business evolve digitally and grow in your market by bringing in more clients and quality sales.
      </SectionText>
      <Button onClick={() => window.location = 'https://techalat.com'}>Read my Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;
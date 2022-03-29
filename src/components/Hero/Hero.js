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
      Dear Entrepreneur
            You are the kind of person that deserves the best. The ambition, vision, and guts of business owner like yourself have always been the driving force behind today's economy. I'm like you. You can trust me to deliver to your best satisfaction.
      </SectionText>
      <Button onClick={() => window.location = 'https://techalat.com'}>Read my Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;
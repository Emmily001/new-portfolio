import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Employed search engine optimization to improve clients website reach'},
  { text: 'Applied knowledge of front-end and back-end development to create succesful designs.' },
  { text: 'Developed wireframes, site maps and content inventories for new website designs.',  },
  { text: 'Coded websites using HTMl, CSS, Javascript , Tailwind, Bootstrap, React and Nodejs.',  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Work Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

  
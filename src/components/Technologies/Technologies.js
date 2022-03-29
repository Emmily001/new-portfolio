import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCss3, DiHtml5, DiJsBadge, DiBootstrap, DiGit, DiSass, DiWordpress } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { RiFolderReceivedFill } from "react-icons/ri";
import { FaVuejs, FaNode } from "react-icons/fa";
import { SiWebpack, SiNetlify, SiGooglesearchconsole, SiXcode, SiCodeship, SiCodersrank, SiTailwindcss } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
    I have a detailed understanding of complex, up-to-date programming languages and full-stack technologies.
    </SectionText>
    <List>
      <ListItem>
        <SiXcode size="4rem" />
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <br />
          <ListParagraph>
          <DiHtml5 size="3rem" /> Html<br />
          <DiCss3 size="3rem" />Css<br />
          <DiJsBadge size="3rem" />Javascript<br />
          <FaNode size="3rem" />NodeJs<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCodeship size="4rem" />
        <ListContainer>
          <ListTitle>Framework/Library</ListTitle>
          <br />
          <ListParagraph>
          <DiReact size="3rem" /> React.js<br />
          <DiFirebase size="3rem" /> Next.js<br />
          <FaVuejs size="3rem" /> Vue.js<br />
          <SiTailwindcss size="3rem" /> Tailwindcss<br />
          <DiBootstrap size="3rem" /> Bootstrap<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCodersrank size="4rem" />
        <ListContainer>
          <ListTitle>Tools/Platform</ListTitle>
          <br />
          <ListParagraph>
          <DiGit size="3rem" /> Git <br />
          <DiSass size="3rem" /> Sass <br />
          <DiFirebase size="3rem" /> Firebase <br />
          <RiFolderReceivedFill size="3rem" /> Rest Api <br />
          <GrGraphQl size="3rem" /> Graphql <br />
          <DiWordpress size="3rem" /> Wordpress <br />
          <SiWebpack size="3rem" /> Webpack <br />
          <SiNetlify size="3rem" /> Netlify <br />
          <SiGooglesearchconsole size="3rem" /> SEO <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

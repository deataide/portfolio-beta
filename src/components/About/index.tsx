import React from 'react';

import {
  Container,
  FrontendIcon,
  BackendIcon,
  AboutMeIcon,
  Title,
  Description,
  SubTitle,
  TopContent,
  ContentContainer,
  Hr,
} from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <TopContent>
          <FrontendIcon />
          <Title>Frontend</Title>
          <Description>
            I like to code things that bring me new knowledge, because I like to
            see technologies that bring me further development.
          </Description>

          <SubTitle>Languages & technologies I speak:</SubTitle>

          <Description>
            HTML5, CSS3, JavaScript, React, StyledComponents and
            libraries/others.
          </Description>
        </TopContent>
        <TopContent>
          <BackendIcon />
          <Title>Backend</Title>
          <Description>
            I'm mainly focused on NodeJs, but I'm currently starting to learn
            PHP, mainly to use with Wordpress.
          </Description>

          <SubTitle>Languages & technologies I speak:</SubTitle>

          <Description>
            NodeJs(crud), Express, MySql, Postgres, and libraries/others.
          </Description>
        </TopContent>
        <TopContent>
          <AboutMeIcon />
          <Title>About Me</Title>
          <Description>
            I'm 19 years old and I've been focusing on programming for almost
            the last year, and I'm sure I'm capable of achieving the goals of
            the company.
          </Description>

          <SubTitle>Capacibles</SubTitle>

          <Description>
            Given time I can learn and develop anything.
          </Description>
        </TopContent>
      </ContentContainer>

      <Hr></Hr>
    </Container>
  );
};

export default About;

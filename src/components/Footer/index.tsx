import React from 'react';

import { Container, Nav, Title } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Title>Made by me</Title>
      <Nav>
        <li>
          <a
            href='https://www.linkedin.com/in/deivid-ataide-b482281ba/'
            target='_blank'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://github.com/deataide' target='_blank'>
            GitHub
          </a>
        </li>
      </Nav>
    </Container>
  );
};

export default Footer;

import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  Link,
  Button,
  BottomContainer,
} from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Title>
          Hi, I'm Deivid. I Love build<br></br>
          user interfaces, and backends.
        </Title>
        <SubTitle>
          If you need a programmer who is fully committed to helping you
          <br></br>
          achieve your goals by making quality code, you've found it.
        </SubTitle>
        <Link href='#aboutme'>
          <Button>Get Started</Button>
        </Link>
      </Container>
      <BottomContainer id='aboutme'></BottomContainer>
    </>
  );
};

export default Main;

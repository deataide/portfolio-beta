import React from 'react';

import {
  Container,
  Icon,
  LeftContainer,
  RightContainer,
  Description,
  Title,
  Link,
  Button,
  Content,
  Hr,
} from './styles';

const This: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContainer>
          <Icon />
        </LeftContainer>
        <RightContainer>
          <Title>This Project</Title>

          <Description>
            This project was made using React, Styled-Components <br></br>and
            Typescript. I chose these 3 technologies because I <br></br>want
            them to be my "heart", and although I don't have <br /> much
            experience, I know that these technologies are widely used. <br />{' '}
            This app contains an integration with a GitHub api I made using
            Axios.
          </Description>

          <Link
            href='https://github.com/deataide?tab=repositories'
            target='_blank'
          >
            <Button>GitHub Project</Button>
          </Link>
        </RightContainer>
      </Content>
      <Hr></Hr>
    </Container>
  );
};

export default This;

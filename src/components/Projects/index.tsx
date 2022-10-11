import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Title,
  ContentBottom,
  ContentTop,
  ContainerBottom,
  Link,
  Button,
  ContainerButton,
  ContentBox,
} from './styles';

interface ReposProps {
  name: string;
  html_url: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<ReposProps[]>([]);

  useEffect(() => {}, [ContentBox]);

  const initial = 0;
  const itensPerPage = 6;

  const baseUrl = 'https://api.github.com/users/deataide/repos';

  const getProjects = () => {
    axios
      .get(baseUrl)
      .then((res) => res.data)
      .then((datacut) => datacut.slice(initial, itensPerPage))
      .then((data) => setRepos(data))
      .catch((err) => `erro na requisição ${err}`);
  };

  console.log(repos);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container id='projects'>
      <ContentTop>
        <Title>My Recent Works/Studies</Title>
      </ContentTop>

      <ContainerBottom>
        <ul>
          {repos.map((repo) => (
            <ContentBottom key={repo.name}>
              <ContentBox>
                <Link href={repo.html_url} target='_blank'>
                  <Button>{repo.name}</Button>
                </Link>
              </ContentBox>
            </ContentBottom>
          ))}
        </ul>
      </ContainerBottom>
      <ContainerButton>
        <Link href='https://github.com/deataide' target='_blank'>
          <Button neon={true}>See more on GitHub</Button>
        </Link>
      </ContainerButton>
    </Container>
  );
}

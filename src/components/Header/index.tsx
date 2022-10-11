import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {
  Container,
  Icon,
  LeftContent,
  Title,
  RightContent,
  Nav,
  Hamburger,
} from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [color, setColor] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const watchScroll = () => {
    if (window.scrollY) {
      console.log(window.scrollY);
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', watchScroll);

  const activeColor = () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 500 && window.scrollY < 950) {
        setColor('aboutme');
        console.log(color);
      } else if (window.scrollY >= 950 && window.scrollY < 2550) {
        setColor('portfolio');
        console.log(color);
      } else if (window.scrollY >= 2550) {
        setColor('contact');
        console.log(color);
      } else {
        setColor('');
      }
    }
    if (window.innerWidth <= 768) {
      if (window.scrollY > 500 && window.scrollY < 2200) {
        setColor('aboutme');
        console.log(color);
      } else if (window.scrollY >= 2200 && window.scrollY < 5500) {
        setColor('portfolio');
        console.log(color);
      } else if (window.scrollY >= 5500) {
        setColor('contact');
        console.log(color);
      } else {
        setColor('');
      }
    }
  };

  window.addEventListener('scroll', activeColor);
  const handleHamburger = () => {
    console.log('Working');
    setHamburger(!hamburger);
    console.log(hamburger);
  };

  return (
    <Container scrolling={scrolling} active={hamburger}>
      <LeftContent>
        <Icon />

        <Title>
          <a href='#'>de.ataide</a>
        </Title>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={15}
          onColor={colors.especial}
        />
      </LeftContent>

      <RightContent>
        <Hamburger onClick={handleHamburger} active={hamburger} />
        <Nav active={hamburger} color={color}>
          <li>
            <a href='#aboutme'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Portfolio</a>
          </li>
          <li>
            <a href='#form'>Contact me</a>
          </li>
        </Nav>
      </RightContent>
    </Container>
  );
};

export default Header;

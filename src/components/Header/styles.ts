import styled from 'styled-components';
import { FaBuffer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
  scrolling?: boolean;
  active?: boolean;
  color?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;

  border-bottom: solid 1px black;
  border-bottom: ${(props) =>
    props.scrolling ? 'solid 1px #4361ee;' : 'none;'};

  background: ${(props) => (props.scrolling ? '#4361ee' : 'transparent;')};
  background: ${(props) =>
    props.scrolling
      ? 'linear-gradient(240deg, #480ca8 0%, #4361ee 100%);'
      : 'transparent'};

  width: 100vw;
  height: ${(props) => (props.scrolling ? '9vh' : '12vh')};

  transition: ${(props) => (props.scrolling ? '0.5s' : '0.2s')};

  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    background: ${(props) => props.theme.colors.primary};
    height: ${(props) => (props.active ? '40vh;' : '10vh;')};

    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${(props) => (props.active ? 'column;' : 'row;')};
  }
`;

export const Title = styled.h1`
  a {
    text-decoration: none;
    color: #ffffff;
  }
  font-size: 20px;
  text-decoration: none;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled(FaBuffer)`
  font-size: 24px;
  color: #ffffff;
`;

export const RightContent = styled.div``;

export const Nav = styled.ul<Props>`
  display: flex;
  list-style: none;

  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textsecondary};

  cursor: pointer;

  @media (max-width: 768px) {
    display: ${(props) => (props.active ? 'flex;' : 'none;')};
    gap: 20px;
    text-align: center;

    flex-direction: column;
  }

  li {
    margin-right: 36px;
  }

  a {
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
  }
  a[href*='projects'] {
    color: ${(props) =>
      props.color === 'portfolio' ? '#ffd60a;' : '#FFFFFF;'};
  }
  a[href*='aboutme'] {
    color: ${(props) => (props.color === 'aboutme' ? '#ffd60a;' : '#FFFFFF;')};
  }
  a[href*='form'] {
    color: ${(props) => (props.color === 'contact' ? '#ffd60a;' : '#FFFFFF;')};
  }
  a:hover {
    color: ${(props) => props.theme.colors.especial};
  }
`;

export const Hamburger = styled(GiHamburgerMenu)<Props>`
  position: absolute;
  right: 5%;
  top: 20%;

  @media (max-width: 768px) {
    display: block;
  }
  display: none;
  color: #ffffff;

  cursor: pointer;
  font-size: 36px;
`;

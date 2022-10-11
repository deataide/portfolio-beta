import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.primary};
  height: 10vh;
`;
export const Nav = styled.ul`
  display: flex;

  gap: 20px;
  li {
    text-decoration: none;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
export const Title = styled.h1`
  color: #ffffff;
`;

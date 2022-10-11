import styled from 'styled-components';

import stingray from '../../assets/stingray.png';

interface Props {
  neon?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  position: relative;
`;
export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentBottom = styled.div`
  margin: 40px 20px;

  width: 350px;
  height: 275px;

  background-image: url(${stingray});

  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 20px;

  display: flex;
  align-items: center;
  padding-top: 30px;

  color: #ffffff;

  justify-content: center;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  color: grey;
  padding: 40px;
`;

export const Button = styled.button<Props>`
  font-size: 14px;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.especial};
  transition: 0.2s;

  width: 150px;
  height: 50px;
  border: solid 1px ${(props) => props.theme.colors.especial};
  cursor: pointer;
  background: transparent;
  box-shadow: ${(props) => (props.neon ? 'none;' : '0 0 100px #ffd60a;')};
  :hover {
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    color: white;
  }
`;
export const Link = styled.a``;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  text-align: center;
  display: flex;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  margin: 40px 0;
`;

export const HrContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

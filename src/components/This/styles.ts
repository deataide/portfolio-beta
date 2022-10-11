import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const Icon = styled(FaReact)`
  font-size: 400px;
  color: ${(props) => props.theme.colors.lightpurple};
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  padding-left: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0;
  }
`;
export const Description = styled.span`
  @media (max-width: 768px) {
    text-align: center;
  }

  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
`;
export const Title = styled.h2`
  @media (max-width: 768px) {
    text-align: center;
  }

  font-size: 30px;
  color: ${(props) => props.theme.colors.text};
  padding: 20px 0;
`;

export const Link = styled.a`
  width: 130px;
  height: 50px;
`;
export const Button = styled.button`
  transition: 0.2s;

  margin: 30px 0;

  width: 130px;
  height: 50px;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.lightblue};
  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    background: #3c7cc5;
  }
`;

export const Hr = styled.hr`
  margin: 80px 0;
`;
export const Content = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  height: 77vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10vh;

  @media (max-width: 768px) {
    padding-top: 20vh;
  }

  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  text-align: center;

  font-weight: 300;
  color: #ffffff;
`;
export const Link = styled.a``;
export const Button = styled.button`
  transition: 0.2s;
  background: rgb(235, 201, 14);
  background: linear-gradient(
    0deg,
    rgba(235, 201, 14, 1) 0%,
    rgba(255, 230, 91, 1) 100%
  );
  height: 50px;
  width: 150px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin: 20px;
  font-size: 16px;
  color: #808080;
  font-weight: 100;

  -webkit-box-shadow: 6px 10px 25px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 10px 25px -14px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 10px 25px -14px rgba(0, 0, 0, 0.75);

  :hover {
    background: rgb(228, 199, 37);
    background: linear-gradient(
      0deg,
      rgba(228, 199, 37, 1) 0%,
      rgba(255, 240, 156, 1) 100%
    );
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  border-bottom-right-radius: 800px 40px;
  border-bottom-left-radius: 800px 40px;

  background: ${(props) => props.theme.colors.secondary};
`;

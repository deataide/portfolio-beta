import styled from 'styled-components';
import { SiDatabricks, SiPodman, SiOpsgenie } from 'react-icons/si';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: 40px;
`;

export const AboutMeIcon = styled(SiOpsgenie)`
  font-size: 72px;
  color: ${(props) => props.theme.colors.lightblue};
  padding: 10px;

  text-align: center;
`;
export const BackendIcon = styled(SiDatabricks)`
  font-size: 72px;
  color: ${(props) => props.theme.colors.lightblue};

  padding: 10px;
  border-radius: 100px;

  text-align: center;
`;
export const FrontendIcon = styled(SiPodman)`
  font-size: 72px;
  color: ${(props) => props.theme.colors.lightblue};
  padding: 10px;
  border-radius: 100px;

  text-align: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightblue};
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
`;
export const SubTitle = styled.h3`
  padding: 24px;
  color: ${(props) => props.theme.colors.lightblue};

  font-size: 14px;
  text-align: center;
`;
export const Description = styled.span`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: 14px;
  font-weight: 300;
`;
export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  width: 33.3%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    margin: 20px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
export const Hr = styled.hr`
  margin: 80px 0;
`;
export const Button = styled.button`
  font-size: 14px;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.lightblue};
  border: solid 1px ${(props) => props.theme.colors.lightblue};
  width: 130px;
  height: 50px;
  cursor: pointer;
  transition: 0.2s;
  background: transparent;

  :hover {
    background: ${(props) => props.theme.colors.secondary};
    color: white;
    border: none;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 60px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0;
    align-items: center;
    justify-content: center;
  }
`;

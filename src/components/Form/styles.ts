import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
  background: rgb(72, 12, 168);
  background: linear-gradient(
    0deg,
    rgba(72, 12, 168, 1) 0%,
    rgba(67, 97, 238, 1) 100%
  );
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: grey;
  font-weight: 300;
  padding: 10px 0 10px 0;
`;
export const InputName = styled.input`
  height: 5vh;
  border-radius: 7px;
  border: none;
  width: 50vw;
`;

export const InputComent = styled.textarea`
  height: 90px;
  border-radius: 7px;
  border: none;
  width: 50vw;
`;

export const Input = styled.input`
  width: 130px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background: ${(props) => props.theme.colors.especial};
  color: ${(props) => props.theme.colors.textsecondary};
  margin: 30px 0;
  cursor: pointer;

  :hover {
    background: #e2bd02;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #ffffff;
`;

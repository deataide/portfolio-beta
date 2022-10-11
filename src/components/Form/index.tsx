import React from 'react';

import {
  Container,
  Form,
  InputComent,
  InputName,
  Label,
  Input,
  Title,
} from './styles';

const Formulario = () => {
  return (
    <Container id='form'>
      <Title>Get in touch</Title>
      <Form
        action='mailto:deividdimasp4@hotmail.com'
        method='post'
        encType='text/plain'
      >
        <Label>
          Email
          <InputName name='email' type={'email'} id='email' />
        </Label>
        <Label>
          Message
          <InputComent name='coment' id='coment' />
        </Label>

        <Input type={'submit'} width='500px;' />
      </Form>
    </Container>
  );
};

export default Formulario;

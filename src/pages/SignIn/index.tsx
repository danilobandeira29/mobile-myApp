import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Sign In</Title>
      <Input placeholder="Name" icon="mail" />
      <Input placeholder="Password" icon="lock" />
      <Button onPress={() => console.log('acessar')}>Acessar</Button>
    </Container>
  );
};

export default SignIn;

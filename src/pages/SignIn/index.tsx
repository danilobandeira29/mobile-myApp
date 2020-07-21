import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Title>Sign In</Title>
            <Input placeholder="Name" icon="mail" />
            <Input placeholder="Password" icon="lock" />
            <Button onPress={() => console.log('acessar')}>Access</Button>
            <ForgotPasswordButton>
              <ForgotPasswordButtonText>
                Forgot my password
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#e02041" />
        <CreateAccountButtonText>Create Account</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

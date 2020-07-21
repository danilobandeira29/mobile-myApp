import React, { useRef, useCallback } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
  const formRef = useRef<FormHandles>(null);

  const handleSignInSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

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
            <Form
              ref={formRef}
              onSubmit={handleSignInSubmit}
              style={{ width: '100%' }}
            >
              <Input placeholder="Name" icon="mail" name="email" />
              <Input placeholder="Password" icon="lock" name="password" />
              <Button onPress={() => formRef.current?.submitForm()}>
                Access
              </Button>
            </Form>
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

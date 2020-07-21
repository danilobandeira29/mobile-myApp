import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666" />
      <TextInput
        keyboardAppearance="dark"
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default Input;

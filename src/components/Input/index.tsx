import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  icon: string;
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { defaultValue = '', fieldName, registerField, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',

      // to updade an input value according to a user event
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        // visually changes the input text
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666" />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </Container>
  );
};

export default Input;

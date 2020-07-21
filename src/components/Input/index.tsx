import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
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

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { placeholder, icon, name, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { defaultValue = '', fieldName, registerField, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

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

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} size={20} color={isFilled ? '#333' : '#666'} />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default forwardRef(Input);

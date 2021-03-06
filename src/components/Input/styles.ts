import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: #dcdce6;
  border: 2px solid #dcdce6;
  height: 60px;
  border-radius: 10px;

  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #333;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;

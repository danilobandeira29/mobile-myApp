import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? '70' : '40'}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 30px;
`;

export const GoBackToSignInButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  border-top-width: 1px;
  border-style: solid;
  border-top-color: #333;
`;

export const GoBackToSignInButtonText = styled.Text`
  margin-left: 10px;

  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #333;
`;

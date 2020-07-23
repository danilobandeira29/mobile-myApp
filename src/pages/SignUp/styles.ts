import styled from 'styled-components/native';
import { Platform } from 'react-native';

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

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-top: 20px;
  padding: 16px 0;
`;
export const GoBackButtonText = styled.Text`
  color: #333;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';

  margin-left: 10px;
`;

import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  /* border: 1px solid #ccc; */
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #fff;
  background-color: rgba(14, 0, 189, 0.1);
  border-radius: 6px;
  height: 200px;
  padding: 20px;
  flex-direction: row;
`;

export const ContainerImg = styled.View`
  margin-right: 20px;
`;

export const AvatarImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-color: #5cad87;

  border-width: 2px;
`;

export const ContainerInfo = styled.View`
  justify-content: space-between;
  width: 60%;
`;

export const InfoUser = styled.Text`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  font-family: Nunito-Regular;
`;

export const ButtonSocialMedia = styled.TouchableOpacity``;

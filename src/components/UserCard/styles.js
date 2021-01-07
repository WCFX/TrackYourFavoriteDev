import styled from 'styled-components/native';

export const Container = styled.View`
  border: 2px solid #ccc;
  border-radius: 6px;
  height: 200px;
  padding: 20px;
  flex-direction: row;
`;

export const ContainerImg = styled.View`
  margin-right: 20px;
`;

export const AvatarImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-color: #2c9454;
  border-width: 2px;
`;

export const ContainerInfo = styled.View`
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const LoginUser = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Location = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const OtherInfos = styled.Text`
  font-size: 16px;
  color: #fff;
`;

import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  ContainerImg,
  AvatarImg,
  ContainerInfo,
  Name,
  LoginUser,
  Location,
  OtherInfos,
} from './styles';

const UserCard = ({ data }) => (
  <Container>
    <ContainerImg>
      <AvatarImg source={{ uri: data.avatar_url }} />
    </ContainerImg>
    <ContainerInfo>
      <Name>
        <Text style={{ fontWeight: 'bold' }}>Nome:</Text> {data.name}
      </Name>
      <LoginUser>
        {' '}
        <Text style={{ fontWeight: 'bold' }}>Login:</Text> {data.login}
      </LoginUser>
      <Location>
        {' '}
        <Text style={{ fontWeight: 'bold' }}>Localização:</Text> {data.location}
      </Location>
      <OtherInfos>
        {' '}
        <Text style={{ fontWeight: 'bold' }}>Repositórios:</Text>{' '}
        {data.public_repos}
      </OtherInfos>
      <OtherInfos>
        {' '}
        <Text style={{ fontWeight: 'bold' }}>Seguidores:</Text> {data.followers}
      </OtherInfos>
      <OtherInfos>
        {' '}
        <Text style={{ fontWeight: 'bold' }}>Seguindo:</Text> {data.following}
      </OtherInfos>
    </ContainerInfo>
  </Container>
);

export default UserCard;

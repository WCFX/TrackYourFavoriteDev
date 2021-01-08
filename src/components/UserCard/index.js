import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, Linking } from 'react-native';
import {
  Container,
  ContainerImg,
  AvatarImg,
  ContainerInfo,
  InfoUser,
  ButtonSocialMedia,
} from './styles';

const UserCard = ({ data }) => {
  const handleNavigateToGithub = () => {
    Linking.openURL(`${data.html_url}`);
  };

  return (
    <Container>
      <ContainerImg>
        <AvatarImg source={{ uri: data.avatar_url }} />
      </ContainerImg>
      <ContainerInfo>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Nome:</Text> {data.name}
        </InfoUser>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Usuário:</Text> {data.login}
        </InfoUser>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Localização:</Text>{' '}
          {data.location}
        </InfoUser>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Repositórios: </Text>
          {data.public_repos}
        </InfoUser>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Seguidores:</Text>{' '}
          {data.followers}
        </InfoUser>
        <InfoUser>
          <Text style={{ fontWeight: 'bold' }}>Seguindo:</Text> {data.following}
        </InfoUser>
      </ContainerInfo>
      <ButtonSocialMedia onPress={handleNavigateToGithub}>
        <Icon name="github" size={34} color="#f9f9f9" />
        <Text style={{ marginTop: 10, color: '#f9f9f9' }}>Visite ➞</Text>
      </ButtonSocialMedia>
    </Container>
  );
};

export default UserCard;

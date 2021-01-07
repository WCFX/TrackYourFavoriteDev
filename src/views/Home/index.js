import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import UserCard from '../../components/UserCard';

import {
  Container,
  Title,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
  List,
} from './styles';

const Home = () => (
  <Container>
    <Title>Localize o seu Dev Favorito</Title>
    <Form>
      <Input
        autoCapitalize="none"
        placeholderTextColor="#ccc"
        placeholder="Digite o usuário do dev que procura"
      />
      <SubmitButton>
        <SubmitButtonText>
          <Icon name="search" size={34} color="#fff" />
        </SubmitButtonText>
      </SubmitButton>
    </Form>

    <List
      data={[
        {
          id: 1,
          name: 'Wagner',
          login: 'wcfx',
          avatar_url: 'https://github.com/wcfx.png',
          location: 'Canoas',
          url: 'https://api.github.com/users/wcfx',
          public_repos: 2,
          followers: 20,
          following: 0,
        },
      ]}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <UserCard data={item} />}
    />
  </Container>
);

export default Home;

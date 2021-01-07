import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import getRealm from '../../services/realm';

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

const Home = () => {
  const [input, setInput] = useState('');

  async function handleSaveUserInfo(user) {
    const data = {
      id: user.id,
      avatar_url: user.avatar_url,
      login: user.login,
      name: user.name,
      location: user.location,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      html_url: user.html_url,
    };
    const realm = await getRealm();

    realm.write(() => {
      realm.create('UserInfo', data);
    });
  }

  async function handleAddNewUserCard() {
    try {
      const res = await api.get(`/users/${input}`);

      await handleSaveUserInfo(res.data);

      setInput('');
      Keyboard.dismiss();
    } catch (error) {
      console.log('Deu erro');
    }
  }

  return (
    <Container>
      <Title>Localize o seu Dev Favorito</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          placeholderTextColor="#ccc"
          placeholder="Digite o usuário do dev que procura"
        />
        <SubmitButton onPress={handleAddNewUserCard}>
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
            html_url: 'https://api.github.com/users/wcfx',
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
};

export default Home;

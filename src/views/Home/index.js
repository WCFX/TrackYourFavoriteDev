import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const realm = await getRealm();
      const data = realm.objects('UserInfo').sorted('followers', true);
      setUsers(data);
    }
    loadUsers();
  }, []);

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
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      console.log('Deu erro');
      setError(true);
    }
  }

  return (
    <Container>
      <Title>Localize o seu Dev Favorito</Title>
      <Form>
        <Input
          value={input}
          error={error}
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
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UserCard data={item} />}
      />
    </Container>
  );
};

export default Home;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Repository from '../../components/Repository';

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
    <Title>Encontre o seu Dev Favorito</Title>
    <Form>
      <Input
        autoCapitalize="none"
        placeholderTextColor="#ccc"
        placeholder="Coloque o nome do dev que procura"
      />
      <SubmitButton>
        <SubmitButtonText>
          <Icon name="search" size={34} color="#fff" />
        </SubmitButtonText>
      </SubmitButton>
    </Form>

    <List
      data={[]}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Repository data={item} />}
    />
  </Container>
);

export default Home;

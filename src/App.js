import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#7162a6" />
    <Routes />
  </NavigationContainer>
);

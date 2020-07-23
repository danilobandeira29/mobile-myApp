import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#dcdce6" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#f0f0f5' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;

import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#dcdce6" />
    <View style={{ flex: 1, backgroundColor: '#f0f0f5' }} />
  </>
);

export default App;

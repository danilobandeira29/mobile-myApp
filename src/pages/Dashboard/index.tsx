import React from 'react';

import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';

import { Container, Text } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text>Dashboard</Text>
      <Button onPress={signOut}>Sign Out</Button>
    </Container>
  );
};

export default Dashboard;

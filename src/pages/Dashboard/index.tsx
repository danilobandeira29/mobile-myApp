import React from 'react';

import Button from '../../components/Button';

import { Container, Text } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Text>Dashboard</Text>
    <Button>Sign Out</Button>
  </Container>
);

export default Dashboard;

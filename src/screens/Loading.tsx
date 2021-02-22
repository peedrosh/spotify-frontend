import React from 'react';
import { Container, LoadingIcon } from '../styles/screens/Loading';
import GlobalStyle from '../styles/global';

const Loading: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <LoadingIcon />
    </Container>
  );
};

export default Loading;

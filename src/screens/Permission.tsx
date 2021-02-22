/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { Container } from '../styles/screens/Permission';

const Permission: React.FC = () => {
  navigator.geolocation.getCurrentPosition(() => {
    return 0;
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      return 0;
    });

    navigator.permissions.query({ name: 'geolocation' }).then(status => {
      status.onchange = () => {
        if (status.state === 'granted') {
          location.reload();
        }
      };
    });
  }, []);

  return (
    <Container>
      <h1>Allow to access your location</h1>
    </Container>
  );
};

export default Permission;

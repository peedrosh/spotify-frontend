import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Loading from './screens/Loading';
import Permission from './screens/Permission';
import Playlists from './screens/Playlists';
import GlobalStyle from './styles/global';
import light from './styles/theme/light';

const App: React.FC = () => {
  const [permission, setPermission] = useState(false);
  const [loading, setLoading] = useState(true);

  navigator.permissions.query({ name: 'geolocation' }).then(result => {
    if (result.state === 'granted') {
      setPermission(true);
    }

    setLoading(false);
  });

  return loading ? (
    <Loading />
  ) : (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {permission ? <Playlists /> : <Permission />}
    </ThemeProvider>
  );
};

export default App;

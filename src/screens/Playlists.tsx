import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Header, List } from '../styles/screens/Playlists';
import Loading from './Loading';

interface IWeather {
  id: number;
  city: string;
  country: string;
  description: string;
  icon: string;
  temperature: number;
}

interface IPlaylist {
  id: string;
  external_urls: {
    spotify: string;
  };
  images: [
    {
      url: string;
    },
  ];
  name: string;
}

interface ILocation {
  latitude: number;
  longitude: number;
}

const Playlists: React.FC = () => {
  const [weather, setWeather] = useState<IWeather>();
  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);
  const [location, setLocation] = useState<ILocation | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setLocation({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    if (!location) return;

    api.post('playlists', location).then(response => {
      setWeather(response.data.weather);
      setPlaylists(response.data.playlists);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, [location]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.icon}@4x.png`}
          alt={weather?.description}
        />
        <div>
          <strong>{weather?.temperature}° Celsius</strong>
          <strong>{weather?.description}</strong>
          <strong>
            {weather?.country} - {weather?.city}
          </strong>
        </div>
      </Header>

      <h1>These are all recommendations for you</h1>

      <List>
        {playlists.map(playlist => (
          <div key={playlist.id}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <div>
              <a
                href={playlist.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Playlists;

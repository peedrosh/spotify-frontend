import styled from 'styled-components';

export const Container = styled.div`
  max-width: 97.2rem;
  margin: 0 auto;
  padding: 6rem 2rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 200;
    font-style: italic;
    text-align: center;
    margin: 8rem 0;
  }
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;

    strong:nth-child(1) {
      color: #eb6e4b;
      font-size: 4.8rem;
      font-weight: 400;
      display: block;
    }

    strong:nth-child(2) {
      font-size: 2rem;
      opacity: 0.4;
      font-weight: 400;
      text-transform: capitalize;
    }

    strong:nth-child(3) {
      font-size: 2.8rem;
      font-weight: 200;
      margin-top: 1rem;
    }
  }
`;

export const Playlists = styled.section`
  margin-top: 10rem;
`;

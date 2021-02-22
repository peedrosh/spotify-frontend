import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 97.2rem;
  margin: 0 auto;
  padding: 4rem 2rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 200;
    margin: 4rem 0;
    text-align: center;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  max-width: 50rem;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 200;

      &:nth-child(1) {
        font-size: 4rem;
        color: ${props => props.theme.danger};
      }

      &:nth-child(2) {
        font-size: 1.4rem;
        text-transform: capitalize;
      }

      &:nth-child(3) {
        font-size: 2.4rem;
        margin-top: 1rem;
      }
    }
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
  padding-top: 3.2rem;

  & > div {
    position: relative;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
      }

      div {
        transition: all 0.3s;
        visibility: visible;
        opacity: 1;
      }
    }

    img {
      display: block;
      transition: transform 0.3s;
      width: 100%;
    }

    div {
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 1rem;
      visibility: hidden;
      opacity: 0;

      a {
        background-color: ${props => props.theme.primary};
        border-radius: 2rem;
        height: 4rem;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.light};
        font-size: 1.6rem;
        font-weight: 400;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#1DB954')};
        }
      }
    }
  }
`;

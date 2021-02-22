import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.2rem;
    font-weight: 200;
  }
`;

export const Button = styled.button`
  background-color: ${props => (props.disabled ? 'gray' : props.theme.primary)};
  border: none;
  border-radius: 2.4rem;
  color: ${props => props.theme.light};
  cursor: pointer;
  font-size: 1.4em;
  height: 4.8rem;
  margin-top: 4.8rem;
  width: 25rem;
  transition: background-color 0.2s;

  &:disabled {
    cursor: default;
  }

  &:hover {
    background-color: ${props =>
      props.disabled ? 'gray' : shade(0.2, props.theme.primary)};
  }
`;

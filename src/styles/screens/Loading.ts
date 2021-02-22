import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoadingIcon = styled.div`
  border: 0.3rem solid #ffffff;
  border-top: 0.3rem solid #1db954;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

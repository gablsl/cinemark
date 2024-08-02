import styled from 'styled-components';

export const MovieListContainer = styled.ul`
  padding: 48px 3%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  list-style: none;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
`;

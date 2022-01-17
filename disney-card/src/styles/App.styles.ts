import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: auto;
  background: black;
  color: white;
  padding: 20px 60px;
  box-sizing: border-box;

  @media (min-width: 991px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  border-bottom: 1px dotted black;
  .cart-item {
  }
  .buttons {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    p {
      margin: 0 1rem;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

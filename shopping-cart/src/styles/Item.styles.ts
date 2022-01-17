import styled, {css} from 'styled-components';

const shareCss = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 20px;
  height: 100%;
`;

export const Wrapper = styled.div`
  ${shareCss}

  button {
    border-radius: 10px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;

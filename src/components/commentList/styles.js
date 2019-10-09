import styled from 'styled-components';

import variables from '../../styles/variables';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

  margin-bottom: 3rem;

  button {
    border-bottom: 2px solid ${variables.colorSecondary};
    transition: all 0.2s;
    &:hover {
      transform: translateY(-2px);
      border-bottom: 2px solid ${variables.colorPrimaryDark};
    }
  }
`;

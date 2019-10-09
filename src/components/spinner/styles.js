import styled, { keyframes } from 'styled-components';

import variables from '../../styles/variables';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 4rem;
  height: 4rem;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: ${variables.colorSecondary};
  animation: ${spin} 1s ease-in-out infinite;
`;

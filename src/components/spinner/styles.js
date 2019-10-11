import styled, { keyframes } from 'styled-components';

import variables from '../../styles/variables';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  ${({ size }) => size !== 'small' && 'margin-bottom: 5rem;'}
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  text-align: center;
  ${({ size }) =>
    (size === 'small' && 'width: 2.7rem; height: 2.7rem') ||
    'width: 5rem; height: 5rem'}
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: ${variables.colorSecondary};
  animation: ${spin} 1s ease-in-out infinite;
`;

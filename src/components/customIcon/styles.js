import styled from 'styled-components';

import variables from '../../styles/variables';

export const Svg = styled.svg`
  fill: ${variables.colorSecondary};
  width: 3rem;
  height: 3rem;
  padding: 6px;

  ${({ withBorder }) =>
    withBorder &&
    `
  border-radius: 50%;
  border: 2px solid ${variables.colorSecondary};
  `}

  transition: all 0.2s;
`;

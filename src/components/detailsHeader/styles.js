import styled from 'styled-components';

import variables from '../../styles/variables';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  &:hover span {
    color: ${variables.colorPrimaryDark};
  }

  &:hover svg {
    fill: ${variables.colorPrimaryDark};
    border: 2px solid ${variables.colorPrimaryDark};
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  font-size: 1.3rem;
  transition: all 0.2s;
`;

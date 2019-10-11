import styled from 'styled-components';

import variables from '../../styles/variables';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.2rem;
    ${({ showAddBtn }) =>
      !showAddBtn && `margin-right: 50%; transform:translateX(50%)`}
  }
`;

export const StyledButton = styled.button`
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

export const StyledSpan = styled.span`
  margin-left: 0.5rem;
  font-size: 1.3rem;
  transition: all 0.2s;
`;

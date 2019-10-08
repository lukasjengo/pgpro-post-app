import styled from 'styled-components';

import variables from '../../styles/variables';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  border-radius: 3px;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background-color: ${variables.colorBlack};
  box-shadow: ${variables.shadowLigh};
  color: ${variables.colorWhite};
  font-size: 1.3rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);

    h3 {
      color: ${variables.colorPrimaryDark};
      cursor: pointer;
    }
  }

  h3 {
    margin-left: 1rem;
  }
`;

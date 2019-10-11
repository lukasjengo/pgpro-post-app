import styled, { css } from 'styled-components';
import variables from '../../styles/variables';

import { Link } from 'react-router-dom';

const btnStyles = css`
  display: inline-block;
  background-color: ${({ type }) =>
    (type === 'primary' && `${variables.colorPrimaryDark}`) ||
    (type === 'secondary' && `${variables.colorSecondary}`) ||
    `${variables.colorPrimaryDark}`};
  padding: 0.7rem 2rem;
  border-radius: 3px;
  transition: all 0.2s;
  color: ${({ type }) =>
    (type === 'primary' && `${variables.colorBlack}`) ||
    (type === 'secondary' && `${variables.colorWhite}`) ||
    `${variables.colorBlack}`};

  &:hover {
    background-color: ${variables.colorGreyLight};
    color: ${variables.colorBlack};
  }
`;

export const StyledLink = styled(Link)`
  ${btnStyles}
`;

export const StyledButton = styled.button`
  ${btnStyles}
`;

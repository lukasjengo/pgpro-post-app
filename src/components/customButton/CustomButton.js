import React from 'react';

import { StyledButton, StyledLink } from './styles';

const CustomButton = ({ isLink, to, children, onClick, type }) => {
  return isLink ? (
    <StyledLink to={to} type={type}>
      {children}
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;

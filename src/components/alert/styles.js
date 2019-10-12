import styled from 'styled-components';
import variables from '../../styles/variables';

export const AlertWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 5rem;
  z-index: 9999;
  font-size: 1.5rem;
`;

export const StyledAlert = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  color: ${variables.colorWhite};
  box-shadow: ${variables.shadowLight};
  ${({ type }) =>
    (type === 'success' && `background-color: ${variables.colorSuccess}`) ||
    (type === 'danger' && `background-color: ${variables.colorSecondary}`)};
`;

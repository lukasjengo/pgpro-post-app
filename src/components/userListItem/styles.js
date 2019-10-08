import styled from 'styled-components';
import variables from '../../styles/variables';

import { Link } from 'react-router-dom';

export const UserCard = styled.li`
  padding: 1.5rem 2rem;
  border-radius: 3px;
  background-color: ${variables.colorBlack};
  color: ${variables.colorWhite};
  box-shadow: ${variables.shadowLight};
  font-size: 1.2rem;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    color: ${variables.colorPrimaryDark};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: ${variables.colorPrimaryDark};
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const LinkWrapper = styled.div`
  margin-bottom: 1rem;

  a {
    display: block;
    color: ${variables.colorWhite};
    transition: all 0.2s;

    &:hover {
      color: ${variables.colorSecondary};
    }
  }
`;

export const DetailsLink = styled(Link)`
  display: inline-block;
  background-color: ${variables.colorSecondary};
  padding: 0.7rem 2rem;
  border-radius: 3px;
  transition: all 0.2s;
  color: ${variables.colorWhite};

  &:hover {
    background-color: ${variables.colorGreyLight};
    color: ${variables.colorBlack};
  }
`;

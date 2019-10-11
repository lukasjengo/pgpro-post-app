import styled from 'styled-components';

import variables from '../../styles/variables';

export const CommentBox = styled.li`
  font-size: 1.5rem;
  border: 1px solid ${variables.colorBlack};
  border-radius: 3px;
  padding: 1rem 2.5rem;
  margin-bottom: 1.2rem;

  transition: all 0.2s;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-weight: 600;
  }

  a {
    border-bottom: 1px solid ${variables.colorPrimaryDark};

    &:hover {
      color: ${variables.colorPrimaryDark};
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomIcon from '../customIcon/CustomIcon';

import { StyledLi } from './styles';

const PostListItem = ({ history, post: { id, title } }) => {
  return (
    <StyledLi>
      <CustomIcon name='icon-bin' withBorder={false} />
      <Link to={`${history.location.pathname}/${id}`}>
        <h3>{title}</h3>
      </Link>
    </StyledLi>
  );
};

PostListItem.propTypes = {
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default PostListItem;

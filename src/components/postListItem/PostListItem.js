import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deletePost } from '../../redux/post/postActions';

import CustomIcon from '../customIcon/CustomIcon';
import Spinner from '../spinner/Spinner';

import { StyledLi } from './styles';

const PostListItem = ({
  history,
  post: { id, title },
  deletePost,
  postsUpdating
}) => {
  return (
    <StyledLi>
      {postsUpdating ? (
        <Spinner size='small' />
      ) : (
        <button style={{ lineHeight: '1' }} onClick={() => deletePost(id)}>
          <CustomIcon name='icon-bin' />
        </button>
      )}
      <Link to={`${history.location.pathname}/${id}`}>
        <h3>{title}</h3>
      </Link>
    </StyledLi>
  );
};

PostListItem.propTypes = {
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default connect(
  null,
  { deletePost }
)(PostListItem);

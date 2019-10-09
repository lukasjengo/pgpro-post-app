import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPostComments } from '../../redux/post/postActions';

import CommentListItem from '../commentListItem/CommentListItem';
import Spinner from '../spinner/Spinner';

import { ButtonWrapper } from './styles';

const CommentList = ({
  match,
  post: { comments, commentLoading },
  getPostComments
}) => {
  const [showComments, toggleCommentVisibility] = useState(false);

  const onBtnClick = () => {
    toggleCommentVisibility(!showComments);
    if (!showComments && comments.length < 1) {
      getPostComments(match.params.postId);
    }
  };

  return (
    <Fragment>
      <ButtonWrapper>
        <button onClick={onBtnClick}>
          {showComments ? 'Hide comments' : 'Show comments'}
        </button>
        <button>Add comment</button>
      </ButtonWrapper>
      {showComments && commentLoading && <Spinner />}
      {showComments && !commentLoading && (
        <ul style={{ listStyle: 'none' }}>
          {comments.map(comment => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

CommentList.propTypes = {
  match: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getPostComments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostComments }
)(CommentList);

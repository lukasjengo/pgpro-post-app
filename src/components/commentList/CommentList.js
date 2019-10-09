import React, { Fragment, useState } from 'react';
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

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostComments }
)(CommentList);

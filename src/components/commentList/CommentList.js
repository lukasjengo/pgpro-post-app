import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPostComments } from '../../redux/post/postActions';
import { showModal } from '../../redux/modal/modalActions';

import CommentListItem from '../commentListItem/CommentListItem';
import Spinner from '../spinner/Spinner';

import { ButtonWrapper } from './styles';

const CommentList = ({ comments, currentPost, getPostComments, showModal }) => {
  const [showComments, toggleCommentVisibility] = useState(false);

  const onToggleClick = () => {
    toggleCommentVisibility(!showComments);
    if (!showComments && comments.data.length < 1) {
      getPostComments(currentPost.data.id);
    } else if (
      !showComments &&
      comments.data[0].postId !== currentPost.data.id
    ) {
      getPostComments(currentPost.data.id);
    }
  };

  return (
    <Fragment>
      <ButtonWrapper>
        <button onClick={onToggleClick}>
          {showComments ? 'Hide comments' : 'Show comments'}
        </button>
        <button
          onClick={() => {
            showModal('addcomment');
            if (comments.data.length < 1) getPostComments(currentPost.data.id);
          }}
        >
          Add comment
        </button>
      </ButtonWrapper>
      {showComments && comments.loading && <Spinner />}
      {showComments && !comments.loading && (
        <ul style={{ listStyle: 'none' }}>
          {comments.data.map(comment => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

CommentList.propTypes = {
  comments: PropTypes.object.isRequired,
  currentPost: PropTypes.object.isRequired,
  getPostComments: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.post.comments,
  currentPost: state.post.currentPost
});

export default connect(
  mapStateToProps,
  { getPostComments, showModal }
)(CommentList);

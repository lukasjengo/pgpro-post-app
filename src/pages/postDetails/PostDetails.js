import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentPost } from '../../redux/post/postActions';

import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import CommentList from '../../components/commentList/CommentList';
import ModalForm from '../../components/modalForm/ModalForm';
import Spinner from '../../components/spinner/Spinner';

import { PostTitle, Paragraph } from './styles';

const PostDetails = ({ match, history, currentPost, getCurrentPost }) => {
  useEffect(() => {
    if (currentPost.data === null) {
      getCurrentPost(match.params.postId, match.params.userId);
    } else if (currentPost.data.id !== match.params.postId * 1) {
      getCurrentPost(match.params.postId, match.params.userId);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <DetailsHeader history={history} match={match} isAddBtn={false} />
      {currentPost.loading || currentPost.data === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <PostTitle>{currentPost.data.title}</PostTitle>
          <Paragraph>{currentPost.data.body}</Paragraph>
        </Fragment>
      )}
      <CommentList />
      <ModalForm match={match} />
    </Fragment>
  );
};

PostDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentPost: PropTypes.object.isRequired,
  getCurrentPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPost: state.post.currentPost
});

export default connect(
  mapStateToProps,
  { getCurrentPost }
)(PostDetails);

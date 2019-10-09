import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentPost } from '../../redux/post/postActions';

import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import CommentList from '../../components/commentList/CommentList';
import Spinner from '../../components/spinner/Spinner';

import { PostTitle, Paragraph } from './styles';

const PostDetails = ({
  match,
  history,
  post: { currentPost, loading },
  getCurrentPost
}) => {
  useEffect(() => {
    getCurrentPost(match.params.postId, match.params.userId);
  }, []);
  return (
    <Fragment>
      <DetailsHeader history={history} match={match} isAddBtn={false} />
      {loading || currentPost === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <PostTitle>{currentPost.title}</PostTitle>
          <Paragraph>{currentPost.body}</Paragraph>
        </Fragment>
      )}
      <CommentList match={match} />
    </Fragment>
  );
};

PostDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getCurrentPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getCurrentPost }
)(PostDetails);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPosts } from '../../redux/post/postActions';

import PostListItem from '../postListItem/PostListItem';
import Spinner from '../spinner/Spinner';

const PostList = ({
  match,
  history,
  post: { posts, loading },
  getUserPosts
}) => {
  useEffect(() => {
    getUserPosts(match.params.userId);
    //eslint-disable-next-line
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <ul style={{ listStyle: 'none' }}>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} history={history} />
      ))}
    </ul>
  );
};

PostList.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getUserPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(PostList);

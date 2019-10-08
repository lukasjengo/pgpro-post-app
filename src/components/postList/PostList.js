import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPosts } from '../../redux/post/postActions';

import PostListItem from '../postListItem/PostListItem';
import Spinner from '../spinner/Spinner';

const PostList = ({ match, history, posts, getUserPosts }) => {
  useEffect(() => {
    getUserPosts(match.params.id);
  }, []);
  return posts.loading ? (
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
  posts: PropTypes.array.isRequired,
  getUserPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(PostList);

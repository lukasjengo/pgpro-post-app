import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPosts } from '../../redux/post/postActions';

import PostListItem from '../postListItem/PostListItem';
import Spinner from '../spinner/Spinner';

const PostList = ({
  match,
  history,
  posts,
  postsLoading,
  postsUpdating,
  getUserPosts
}) => {
  useEffect(() => {
    if (posts.length < 1) {
      getUserPosts(match.params.userId);
    } else if (posts[0].userId !== match.params.userId * 1) {
      getUserPosts(match.params.userId);
    }
    //eslint-disable-next-line
  }, []);
  return postsLoading || posts.length < 1 ? (
    <Spinner />
  ) : (
    <ul style={{ listStyle: 'none' }}>
      {posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
          history={history}
          postsUpdating={postsUpdating}
        />
      ))}
    </ul>
  );
};

PostList.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  postsLoading: PropTypes.bool,
  postsUpdating: PropTypes.bool,
  getUserPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.post.posts.data,
  postsLoading: state.post.posts.loading,
  postsUpdating: state.post.posts.isUpdating
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(PostList);

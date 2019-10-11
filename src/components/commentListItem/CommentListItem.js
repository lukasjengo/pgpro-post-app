import React from 'react';
import PropTypes from 'prop-types';

import { CommentBox, CommentHeader } from './styles';

const CommentListItem = ({ comment }) => {
  return (
    <CommentBox>
      <CommentHeader>
        <span>{comment.name}</span>
        <a href={`mailto:${comment.email}`}>{comment.email}</a>
      </CommentHeader>
      <p>{comment.body}</p>
    </CommentBox>
  );
};

CommentListItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentListItem;

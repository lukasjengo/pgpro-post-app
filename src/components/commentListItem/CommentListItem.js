import React from 'react';

import { CommentBox } from './styles';

const CommentListItem = ({ comment }) => {
  return (
    <CommentBox>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{comment.name}</span>
        <a href={`mailto:${comment.email}`}>{comment.email}</a>
      </div>
      <p>{comment.body}</p>
    </CommentBox>
  );
};

export default CommentListItem;

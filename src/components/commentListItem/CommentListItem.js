import React from 'react';
import PropTypes from 'prop-types';

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

CommentListItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentListItem;

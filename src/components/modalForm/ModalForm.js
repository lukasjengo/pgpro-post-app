import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../redux/modal/modalActions';
import { addPost, addComment } from '../../redux/post/postActions';

import CustomButton from '../customButton/CustomButton';
import Spinner from '../spinner/Spinner';

import {
  ModalWrapper,
  StyledForm,
  InputWrapper,
  ButtonWrapper
} from './styles';

const ModalForm = ({
  modal: { isVisible, type },
  postUpdating,
  commentUpdating,
  hideModal,
  addPost,
  addComment,
  match
}) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    body: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCancel = () => {
    setFormData({ name: '', title: '', email: '', body: '' });
  };

  const onPostSubmit = e => {
    e.preventDefault();
    addPost({
      title: formData.title,
      body: formData.body,
      userId: match.params.userId * 1
    });
    setFormData({ name: '', title: '', email: '', body: '' });
  };

  const onCommentSubmit = e => {
    e.preventDefault();
    addComment({
      name: formData.name,
      email: formData.email,
      body: formData.body,
      postId: match.params.postId * 1
    });
    setFormData({ name: '', title: '', email: '', body: '' });
  };

  const commentModalFields = (
    <Fragment>
      <h4>Add comment</h4>
      <InputWrapper>
        <label htmlFor='name'>Name</label>
        <input
          onChange={onChange}
          type='text'
          name='name'
          value={formData.name}
          id='name'
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='email'>Email</label>
        <input
          onChange={onChange}
          type='email'
          name='email'
          value={formData.email}
          id='email'
          required
        />
      </InputWrapper>
    </Fragment>
  );

  const postModalFields = (
    <Fragment>
      <h4>Add post</h4>
      <InputWrapper>
        <label htmlFor='title'>Title</label>
        <input
          onChange={onChange}
          type='text'
          name='title'
          value={formData.title}
          id='title'
          required
        />
      </InputWrapper>
    </Fragment>
  );

  return isVisible ? (
    <ModalWrapper>
      <StyledForm
        onSubmit={e => {
          (type === 'addpost' && onPostSubmit(e)) ||
            (type === 'addcomment' && onCommentSubmit(e));
        }}
      >
        {type === 'addcomment' && commentModalFields}
        {type === 'addpost' && postModalFields}
        <InputWrapper>
          <label htmlFor='body'>Body</label>
          <textarea
            onChange={onChange}
            name='body'
            value={formData.body}
            rows='10'
            cols='35'
            id='body'
            required
          />
        </InputWrapper>
        <ButtonWrapper>
          <CustomButton
            onClick={e => {
              e.preventDefault();
              onCancel();
              hideModal();
            }}
            type='secondary'
          >
            Cancel
          </CustomButton>
          <CustomButton type='primary' disabled={!postUpdating}>
            {postUpdating || commentUpdating ? (
              <Spinner size='small' />
            ) : (
              'Save'
            )}
          </CustomButton>
        </ButtonWrapper>
      </StyledForm>
    </ModalWrapper>
  ) : null;
};

ModalForm.propTypes = {
  modal: PropTypes.object.isRequired,
  postUpdating: PropTypes.bool,
  commentUpdating: PropTypes.bool,
  match: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  modal: state.modal,
  postUpdating: state.post.posts.isUpdating,
  commentUpdating: state.post.comments.isUpdating
});

export default connect(
  mapStateToProps,
  { hideModal, addPost, addComment }
)(ModalForm);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentUser } from '../../redux/user/userActions';
import { showModal } from '../../redux/modal/modalActions';

import CustomIcon from '../customIcon/CustomIcon';
import Spinner from '../spinner/Spinner';

import { HeaderWrapper, StyledButton, StyledSpan } from './styles';

const DetailsHeader = ({
  history,
  match,
  currentUser,
  userLoading,
  getCurrentUser,
  showModal,
  showAddBtn
}) => {
  useEffect(() => {
    if (currentUser === null || currentUser.id !== match.params.userId * 1) {
      getCurrentUser(match.params.userId);
    }
    //eslint-disable-next-line
  }, []);
  const onBackClick = () => {
    if (match.path === '/user/:userId/:postId') {
      history.push(`/user/${match.params.userId}`);
    } else if (match.path === '/user/:userId') {
      history.push('/');
    }
  };
  return userLoading || currentUser === null ? (
    <Spinner />
  ) : (
    <HeaderWrapper showAddBtn={showAddBtn}>
      <StyledButton onClick={onBackClick}>
        <CustomIcon name='icon-arrow-left' withBorder />
        <StyledSpan>Back</StyledSpan>
      </StyledButton>
      <h2>{currentUser.name}</h2>
      {showAddBtn && (
        <StyledButton onClick={() => showModal('addpost')}>
          <CustomIcon name='icon-plus' withBorder />
          <StyledSpan>Add post</StyledSpan>
        </StyledButton>
      )}
    </HeaderWrapper>
  );
};

DetailsHeader.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  userLoading: PropTypes.bool,
  getCurrentUser: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  showAddBtn: PropTypes.bool
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser.data,
  userLoading: state.user.currentUser.loading
});

export default connect(
  mapStateToProps,
  { getCurrentUser, showModal }
)(DetailsHeader);

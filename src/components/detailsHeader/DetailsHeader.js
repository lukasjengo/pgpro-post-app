import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentUser } from '../../redux/user/userActions';

import CustomIcon from '../customIcon/CustomIcon';
import Spinner from '../spinner/Spinner';

import { HeaderWrapper, Button, Span } from './styles';

const DetailsHeader = ({
  history,
  match,
  user: { currentUser, loading },
  getCurrentUser,
  isAddBtn
}) => {
  useEffect(() => {
    if (currentUser === null || currentUser.id !== match.params.userId * 1) {
      getCurrentUser(match.params.userId);
    }
    //eslint-disable-next-line
  }, []);
  return loading || currentUser === null ? (
    <Spinner />
  ) : (
    <HeaderWrapper isAddBtn={isAddBtn}>
      <Button onClick={() => history.goBack()}>
        <CustomIcon name='icon-arrow-left' withBorder={true} />
        <Span>Back</Span>
      </Button>
      <h2>{currentUser.name}</h2>
      {isAddBtn && (
        <Button>
          <CustomIcon name='icon-plus' withBorder={true} />
          <Span>Add post</Span>
        </Button>
      )}
    </HeaderWrapper>
  );
};

DetailsHeader.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  isAddBtn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(DetailsHeader);

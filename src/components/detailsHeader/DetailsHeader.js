import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUsers } from '../../redux/user/userActions';
import { getCurrentUser } from '../../utils/userUtils';

import CustomIcon from '../customIcon/CustomIcon';
import Spinner from '../spinner/Spinner';

import { HeaderWrapper, Button, Span } from './styles';

const DetailsHeader = ({
  history,
  match,
  user: { users, loading },
  getUsers
}) => {
  useEffect(() => {
    if (users.length < 1) {
      getUsers();
    }
    //eslint-disable-next-line
  }, [users]);
  return loading ? (
    <Spinner />
  ) : (
    <HeaderWrapper>
      <Button onClick={() => history.goBack()}>
        <CustomIcon name='icon-arrow-left' withBorder={true} />
        <Span>Back</Span>
      </Button>
      <h1>{getCurrentUser(users, match.params.id)}</h1>
      <Button>
        <CustomIcon name='icon-plus' withBorder={true} />
        <Span>Add post</Span>
      </Button>
    </HeaderWrapper>
  );
};

DetailsHeader.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(DetailsHeader);

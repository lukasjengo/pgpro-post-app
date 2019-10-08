import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUsers } from '../../redux/user/userActions';

import Spinner from '../spinner/Spinner';
import UserListItem from '../userListItem/UserListItem';

import { UserCardList } from './styles';

const UserList = ({ users, loading, getUsers }) => {
  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <UserCardList>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </UserCardList>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users,
  loading: state.user.loading
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);

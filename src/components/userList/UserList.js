import React from 'react';

import UserListItem from '../userListItem/UserListItem';

import { UserCardList } from './styles';

const UserList = () => {
  return (
    <UserCardList>
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
    </UserCardList>
  );
};

export default UserList;

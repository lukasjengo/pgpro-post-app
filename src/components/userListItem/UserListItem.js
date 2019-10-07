import React from 'react';

import { UserCard, LinkWrapper, DetailsLink } from './styles';

const UserListItem = () => (
  <UserCard>
    <h3>Leanner Graham</h3>
    <LinkWrapper>
      <a href='mailto:some@email.com'>some@email.com</a>
      <a href='tel:+3705845236'>+3705845236</a>
      <a href='https://website.com' target='_blank' rel='noopener noreferrer'>
        website.com
      </a>
    </LinkWrapper>
    <h4>Romag crona</h4>
    <p>Multi layered company with ....</p>
    <DetailsLink to='/user/1'>Details</DetailsLink>
  </UserCard>
);

UserListItem.propTypes = {};

export default UserListItem;

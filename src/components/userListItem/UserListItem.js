import React from 'react';
import PropTypes from 'prop-types';

import { UserCard, LinkWrapper, DetailsLink } from './styles';

const UserListItem = ({
  user: { id, name, email, phone, website, company }
}) => (
  <UserCard>
    <h3>{name}</h3>
    <LinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
      <a href={`https://${website}`} target='_blank' rel='noopener noreferrer'>
        {website}
      </a>
    </LinkWrapper>
    <h4>{company.name}</h4>
    <p>
      {company.catchPhrase}
      <br />
      {company.bs}
    </p>
    <DetailsLink to={`/user/${id}`}>Details</DetailsLink>
  </UserCard>
);

UserListItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListItem;

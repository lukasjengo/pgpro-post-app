import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import PostList from '../../components/postList/PostList';

const UserDetails = ({ match, history }) => {
  return (
    <Fragment>
      <DetailsHeader history={history} match={match} />
      <PostList history={history} match={match} />
    </Fragment>
  );
};

UserDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default UserDetails;

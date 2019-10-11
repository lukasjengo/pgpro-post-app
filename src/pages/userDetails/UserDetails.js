import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from '../../components/detailsHeader/DetailsHeader';
import PostList from '../../components/postList/PostList';
import ModalForm from '../../components/modalForm/ModalForm';

const UserDetails = ({ match, history }) => {
  return (
    <Fragment>
      <DetailsHeader history={history} match={match} showAddBtn />
      <PostList history={history} match={match} />
      <ModalForm match={match} />
    </Fragment>
  );
};

UserDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default UserDetails;

import React, { Fragment } from 'react';

import DetailsHeader from '../../components/detailsHeader/DetailsHeader';

const UserDetails = ({ match, history }) => {
  return (
    <Fragment>
      <DetailsHeader history={history} match={match} />
    </Fragment>
  );
};

export default UserDetails;

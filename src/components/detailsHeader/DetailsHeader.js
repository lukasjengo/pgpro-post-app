import React from 'react';
import { connect } from 'react-redux';

import { getCurrentUser } from '../../utils/userUtils';

import CustomIcon from '../customIcon/CustomIcon';
import Spinner from '../spinner/Spinner';

import { HeaderWrapper, Button, Span } from './styles';

const DetailsHeader = ({ history, match, user: { users, loading } }) => {
  return loading ? (
    <Spinner />
  ) : (
    <HeaderWrapper>
      <Button onClick={() => history.goBack()}>
        <CustomIcon name='icon-arrow-left' />
        <Span>Back</Span>
      </Button>
      <h1>{getCurrentUser(users, match.params.id)}</h1>
      <Button>
        <CustomIcon name='icon-plus' />
        <Span>Add post</Span>
      </Button>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(DetailsHeader);

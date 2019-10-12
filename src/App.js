import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Alert from './components/alert/Alert';

// Pages
import Homepage from './pages/homepage/Homepage';
import UserDetails from './pages/userDetails/UserDetails';
import PostDetails from './pages/postDetails/PostDetails';

// Styles
import GlobalStyles from './styles/GlobalStyles';
import { MainWrapper } from './styles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <MainWrapper>
        <Alert />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/user/:userId' component={UserDetails} />
          <Route exact path='/user/:userId/:postId' component={PostDetails} />
        </Switch>
      </MainWrapper>
    </Fragment>
  );
};

export default App;

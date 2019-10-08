import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components

// Pages
import Homepage from './pages/homepage/Homepage';
import UserDetails from './pages/userDetails/UserDetails';

// Styles
import GlobalStyles from './styles/GlobalStyles';
import { MainWrapper } from './styles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <MainWrapper>
        <Switch>
          <Route exact path='/' render={Homepage} />
          <Route exact path='/user/:id' render={UserDetails} />
        </Switch>
      </MainWrapper>
    </Fragment>
  );
};

export default App;

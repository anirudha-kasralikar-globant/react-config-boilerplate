// @flow
'use strict';
import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../SignUp';
import PasswordForget from '../PasswordForget';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

class App extends Component<*> {
  render() {
    return (
      <Container fluid>
        <Router>
          <Header role="navigation">
            <Navigation />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          </Header>
          <main
            role="main"
            style={{
              flexGrow: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </main>
          <footer role="contentinfo">
            <Menu
              inverted
              borderless
              style={{
                flexShrink: 0, //don't allow flexbox to shrink it
                borderRadius: 0, //clear semantic-ui style
                margin: 0, //clear semantic-ui style
              }}
            >
              <Menu.Item header>© 2019 Footer</Menu.Item>
            </Menu>
          </footer>
        </Router>
      </Container>
    );
  }
}

export default App;

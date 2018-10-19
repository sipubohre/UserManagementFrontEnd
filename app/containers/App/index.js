/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Loadable';
import Footer from '../Footer/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TemplateFeature from '../TemplateFeature/Loadable'
import ContactUs from '../ContactUs/Loadable'
import Login from '../Login/Loadable'

export default function App() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/templateFeature" component={TemplateFeature} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}
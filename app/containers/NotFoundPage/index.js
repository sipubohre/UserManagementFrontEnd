/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="content">
        <div className="container">
            <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="error-block">
                        <h1 className="error-title"> 404 </h1>
                        <p className="error-text">Ooopssssssss!! Lost? </p>
                        <p className="lead">Sorry the page not found, Its seems we cant find what you are looking for. Double check the URL or Head to back the homepage.</p>
                        <a href="/" className="btn btn-primary btn-lg">Go To Homepage</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

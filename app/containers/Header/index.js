/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
import headerImage from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12">
                        <ul>
                            <li>+ 180-123-4567 / 8910</li>
                            <li>|</li>
                            <li>info@demo.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                        <ul>
                            <li><a href="#">Help Center</a> </li>
                            <li>|</li>
                            <li><a href="#">Job Listing</a> </li>
                            <li>|</li>
                            <li><a href="#">Clients</a></li>
                            <li>|</li>
                            <li><a href="#">Client Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-toggel">
            <a href="#" id="dots" className="dots-icon"><i className="fa fa-ellipsis-v visible-xs"></i></a>
        </div>
        <div className="header-wrapper">
          <div className="container">
              <div className="row">
                  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                      <div className="logo">
                          <Link to="/"><img src={headerImage} alt="" /></Link>
                      </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                    <div className="navigation">
                        <div id="navigation">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li className="has-sub"><a href="#">Services</a>
                                    <ul>
                                        <li><Link to="/serviceList">Service List</Link></li>
                                        <li><Link to="/serviceSingle">Service Single</Link></li>
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-default.html">Blog Default</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="client-list.html">Client List</a></li>
                                        <li><a href="job-list.html">Job List</a> </li>
                                        <li><a href="job-single.html">Job Single</a> </li>
                                        <li><a href="client-review.html">Client Reviews</a> </li>
                                        <li><a href="consultation-form.html">Consultation Form</a> </li>
                                        <li><a href="404-page.html">404-page</a> </li>
                                        <li><a href="styleguide.html">styleguide</a> </li>
                                    </ul>
                                </li>
                                <li><Link to="/contactUs">Contact Us</Link>
                                </li>
                                <li><Link to="/templateFeature">Template Feature</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 hidden-md col-sm-6 hidden-xs pull-right">
                    <a href="#" className="btn btn-outline head-btn">Request A Consultation</a>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);

/**
 *
 * Footer
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
import makeSelectFooter from './selectors';
import reducer from './reducer';
import saga from './saga';
import footerImage from '../../assets/images/ft_logo.png'
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-widget">
                            <h3 className="footer-title">Contact Info </h3>
                            <div className="contact-info">
                                <span className="contact-icon"><i className="fa fa-map-marker"></i></span>
                                <span className="contact-text">1847 Goldleaf Lane River <br /> Edge, USA 07649 </span>
                            </div>
                            <div className="contact-info">
                                <span className="contact-icon"><i className="fa fa-phone"></i></span>
                                <span className="contact-text">+180-123-4567 / 89</span>
                            </div>
                            <div className="contact-info">
                                <span className="contact-icon"><i className="fa fa-envelope"></i></span>
                                <span className="contact-text">info@demo.com</span>
                            </div>
                            <div className="ft-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="footer-widget">
                            <h3 className="footer-title">Company</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <ul className="arrow">
                                        <li><a href="#">Home </a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Job List</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <ul className="arrow">
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Client reviews</a></li>
                                        <li><a href="#">Partner</a></li>
                                        <li><a href="#">Consultation</a></li>
                                        <li><a href="#">Help Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="ft-logo"><img src={footerImage} alt="" /></div>
                    </div>
                </div>
            </div>
            {/* <div className="tiny-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p>Copyright © All Rights Reserved 2020 Template Design by
                                <a href="https://easetemplate.com/" target="_blank" className="copyrightlink">EaseTemplate</a></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  footer: makeSelectFooter(),
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

const withReducer = injectReducer({ key: 'footer', reducer });
const withSaga = injectSaga({ key: 'footer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Footer);

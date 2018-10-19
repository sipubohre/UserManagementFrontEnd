/**
 *
 * ContactUs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactUs from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Map, Marker, Popup } from 'react-leaflet'

/* eslint-disable react/prefer-stateless-function */
export class ContactUs extends React.Component {
  state = {
    lat: 28.459497,
    lng: 77.026634,
    zoom: 5
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <Helmet>
          <title>ContactUs</title>
          <meta name="description" content="Description of ContactUs" />
        </Helmet>
        <div id="contact-map">
          <Map center={position} zoom={this.state.zoom}>
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-offset-1 col-lg-10  col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
                      <div className="contact-form">
                          <h1 className="contact-info-title mb40 ">How Can We Help You?</h1>
                          <div className="row">
                              <form>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="form-group">
                                          <label className="control-label sr-only " htmlFor="Name"></label>
                                          <input id="name" type="text" placeholder="Name" className="form-control" required />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="form-group">
                                          <label className="control-label sr-only " htmlFor="email"></label>
                                          <input id="email" type="text" placeholder="Email" className="form-control" required />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="form-group">
                                          <label className="control-label sr-only " htmlFor="Phone"></label>
                                          <input id="phone" type="text" placeholder="Phone" className="form-control" required />
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                      <div className="form-group">
                                          <label className="control-label sr-only " htmlFor="Subject"></label>
                                          <input id="subject" type="text" placeholder="Subject" className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20     ">
                                      <div className="form-group">
                                          <label className="control-label sr-only" htmlFor="textarea"></label>
                                          <textarea className="form-control pdt20" id="textarea" name="textarea" rows="4" placeholder="Message"></textarea>
                                      </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                      <button className="btn btn-primary btn-lg ">Send us message</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="section-title">
                                  <h2>Our Contact Info</h2>
                                  <p className="lead">Thank you for your interest in HR services. You can easily contact us by using the below tool and
                                    will be able to track your enquiry is at.</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div className="contact-section">
                                  <div className="contact-icon"><i className="fa fa-map-marker"></i></div>
                                  <div className="contact-info">
                                      <p>1847 Goldleaf Lane River Edge, USA 07649 </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div className="contact-section">
                                  <div className="contact-icon"><i className="fa fa-phone"></i></div>
                                  <div className="contact-info">
                                      <p>+ 180-123-4567
                                          <br /> + 180-123-8910</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div className="contact-section">
                                  <div className="contact-icon"><i className="fa fa-envelope"></i></div>
                                  <div className="contact-info">
                                      <p>info@demo.com
                                          <br />info@support.com
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div className="contact-section">
                                  <div className="contact-icon"><i className="fa fa-mail-forward"></i></div>
                                  <div className="contact-info">
                                      <div className="contact-social">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-medium bg-light">
              <div className="container">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="section-title">
                          <h2>Our Locations</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                          <div className="location-block">
                              <div className="location-content">
                                  <h3>HRMS, Delhi</h3>
                                  <p>2829 Woodland Drive Cherokee, Delhi 51012</p>
                                  <ul>
                                      <li><span className="location-icon"><i className="fa fa-phone"></i></span><span>+ 180-123-4567</span></li>
                                      <li><span className="location-icon"><i className="fa fa-envelope"></i></span><span>+ info@support.com</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                          <div className="location-block">
                              <div className="location-content">
                                  <h3>HRMS, Mumbai</h3>
                                  <p>2780 Radio Park DriveAthens, Mumbai 30601</p>
                                  <ul>
                                      <li><span className="location-icon"><i className="fa fa-phone"></i></span><span>+ 180-123-4567</span></li>
                                      <li><span className="location-icon"><i className="fa fa-envelope"></i></span><span>+ info@support.com</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                          <div className="location-block">
                              <div className="location-content">
                                  <h3>HRMS, Ahmedabad</h3>
                                  <p>3506 Alfred DriveBrooklyn, Ahmedabad 11226</p>
                                  <ul>
                                      <li><span className="location-icon"><i className="fa fa-phone"></i></span><span>+ 180-123-4567</span></li>
                                      <li><span className="location-icon"><i className="fa fa-envelope"></i></span><span>+ info@support.com</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    );
  }
}

ContactUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactus: makeSelectContactUs(),
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

const withReducer = injectReducer({ key: 'contactUs', reducer });
const withSaga = injectSaga({ key: 'contactUs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactUs);

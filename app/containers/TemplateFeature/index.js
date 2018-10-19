/**
 *
 * TemplateFeature
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
import makeSelectTemplateFeature from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class TemplateFeature extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>TemplateFeature</title>
          <meta name="description" content="Description of TemplateFeature" />
        </Helmet>
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h2> HRMS Human Resources Service Template feature</h2>
                        </div>
                        <p className="lead">HRMS – Human Resource Management Responsive Template. It is very clean & professional corporate mobile responsive web design developed with bootstrap front end framework and perfect suit to human resource management company.</p>
                        <p className="mb60">It is built with bootstrap, HTML and CSS front end  framework. You can try this responsive template and make a great impression with your customers.</p>
                        <div className="device-img mb60">
                            <img src={require("../../assets/images/device_img.png")} alt="" /> </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt30">
                        <h3 className="mb40">Key Features:</h3>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="key-features">
                                    <h6 className="key-features-title">Bootstrap V3+</h6>
                                    <p> It is world’s best and famous front-end component library. It is a open source toolkit .
                                    </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">HTML5 &amp; CSS3</h6>
                                    <p>Template built with HTML5 and CSS3 technology. It is very easy to understand.
                                    </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">W3C Valid Markup</h6>
                                    <p>All web pages are checked by W3C Markup Validation Service. </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Owl Carousel (for slider)</h6>
                                    <p>Using this jQuery create a homepage slider very beautiful and responsive.
                                    </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Developer Friendly Coded</h6>
                                    <p> Styleguide page template have a style of designed elements and typography for layout, So it is very useful for developer, who need ready made template for developing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt30">
                        <h3 className="mb40">Template Pages</h3>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="key-features">
                                    <h6 className="key-features-title">Service Page</h6>
                                    <p> You can check services name with image and image overlay hover effect in this service page.
                                    </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Service Single Page</h6>
                                    <p> Service single page is always most important page for describe your service, with side navigation feature. </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Job Listing / Single Page</h6>
                                    <p>Job Listing page will help you to create your current job opening, and give brief details with Job single page which is most beautiful design with Job Title, Company logo, Benefit points, About Company description with apply buttons. </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Client Page</h6>
                                    <p>Client page template is showcase your client logo &amp; name with short paragraph descriptions. </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Consultaions Form Page</h6>
                                    <p> Create your consultation form with client consultation form templates, will help you to scheduling consultation with customers. </p>
                                </div>
                                <div className="key-features">
                                    <h6 className="key-features-title">Style Guide Page</h6>
                                    <p>Style Guide Page developed for speical for developer and designer who can easily edit the template design style as they want. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-sm-12 col-xs-12 text-center mt30">
                        <a href="https://easetemplate.com/" target="_blank" className="btn btn-primary">Get Free HRMS Template</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

TemplateFeature.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  templatefeature: makeSelectTemplateFeature(),
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

const withReducer = injectReducer({ key: 'templateFeature', reducer });
const withSaga = injectSaga({ key: 'templateFeature', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TemplateFeature);

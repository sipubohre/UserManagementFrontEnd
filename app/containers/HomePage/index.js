/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Slider1 from '../../components/Slider1/Loadable'
import Slider2 from '../../components/Slider2/Loadable'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Slider1 />
        <div className="space-medium bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h2>HR Consultation Services</h2>
                            <a href="#" className="btn-link">View Services</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="service-block">
                            <div className="service-img"><a href="#" className="imghover"><img src={require('../../assets/images/service_img_1.jpg')} alt="" className="img-responsive" /></a></div>
                            <div className="service-content">
                                <h3 className="service-title"><a href="#" className="title">HR Audit &amp; Assessment</a></h3>
                                <p>Cras vittepus dolor uspedisse spien sapie facilisi ementums malsuadaet maurisunce.</p>
                                <a href="#" className="btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="service-block">
                            <div className="service-img"><a href="#" className="imghover"><img src={require('../../assets/images/service_img_2.jpg')} alt=""  className="img-responsive" /></a></div>
                            <div className="service-content">
                                <h3 className="service-title"><a href="#" className="title">Legal &amp; HR Compliance</a></h3>
                                <p>Donec ac malesuada liberos phasellus euismod odio aser odio pellentesque quis. </p>
                                <a href="#" className="btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="service-block">
                            <div className="service-img"><a href="#" className="imghover"><img src={require('../../assets/images/service_img_3.jpg')} alt=""  className="img-responsive"/></a></div>
                            <div className="service-content">
                                <h3 className="service-title"><a href="#" className="title">Employment Practices</a></h3>
                                <p>Nullam turpis magna ierdum egetf ringillaeget hendrerits eget auguullam interdu.</p>
                                <a href="#" className="btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="service-block">
                            <div className="service-img"><a href="#" className="imghover"><img src={require('../../assets/images/service_img_4.jpg')} alt="" className="img-responsive" /></a></div>
                            <div className="service-content">
                                <h3 className="service-title"><a href="#" className="title">Employee Leave</a></h3>
                                <p>Morbi tempus tristiquenisl at elementum nisl cimentum ins fusce et consequat purus. </p>
                                <a href="#" className="btn-link">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-medium">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="feature-center line">
                            <div className="feature-icon">
                                <i className="icon-network"></i>
                            </div>
                            <div className="feature-content">
                                <h3>How We Work</h3>
                                <p>Maecenas in suscipit veliulerisque mauris oneepurus sedelit spit vennibh.</p>
                                <a href="#" className="btn-link">learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="feature-center line">
                            <div className="feature-icon">
                                <i className="icon-like"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Why Choose Us</h3>
                                <p>Nulla sit amet ultricies lisis eronunc in diam imperdiet frins quis pretium massa. </p>
                                <a href="#" className="btn-link">Reasons to experience</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="feature-center">
                            <div className="feature-icon">
                                <i className="icon-users"></i>
                            </div>
                            <div className="feature-content">
                                <h3>Meet The Team</h3>
                                <p>Aliquam eget vestisitet lacus sitamet elitf ringilla alieurna eli dignissim.</p>
                                <a href="#" className="btn-link">Meet leaders</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="space-medium bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h2 className="text-white">Happy Clients Reviews</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider2 />
                </div>
            </div>
        </div>
        <div className="space-medium">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h2>We Succeed Because Our Clients Succeed</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="client-block">
                            <div className="client-head">
                                <a href="#" className="client-img"><img src={require('../../assets/images/client_logo_1.png')} alt="" /></a>
                            </div>
                            <div className="client-content">
                                <h4><a href="#">Your Company</a></h4>
                                <p>Becenas in suscipit veliuleres ue mauris oneepurus sedelitsei spit vennibh sulimauris. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="client-block">
                            <div className="client-head">
                                <a href="#" className="client-img"><img src={require('../../assets/images/client_logo_2.png')} alt="" /></a>
                            </div>
                            <div className="client-content">
                                <h4><a href="#">Sample Text</a></h4>
                                <p>Ecenas in suscipit veliuleres ue mauris oneepurus sedelitseitt spit vennibh suscipieliu. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="client-block">
                            <div className="client-head">
                                <a href="#" className="client-img"><img src={require('../../assets/images/client_logo_3.png')} alt="" /></a>
                            </div>
                            <div className="client-content">
                                <h4><a href="#">Dummy Company</a></h4>
                                <p>Aecenas in suscipit veliuleres ue mauris oneepurus sedelitsei spit vennh suliulerue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="client-block">
                            <div className="client-head">
                                <a href="#" className="client-img"><img src={require('../../assets/images/client_logo_4.png')} alt="" /></a>
                            </div>
                            <div className="client-content">
                                <h4><a href="#">Your Company</a></h4>
                                <p>Maecenas in suscipit veliuleres ue mauris oneepurus sedelitsei spit vennibh suscipis. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-sm-12 col-xs-12">
                        <h2 className="text-center mb40">Learn more about HR Consulting Services from HRMS</h2>
                        <div className="consultantion-form">
                            <h3 className="mb30 text-center">Request A Consultation </h3>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="name"> First Name</label>
                                            <input type="text" placeholder="First Name" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="name"> Last Name</label>
                                            <input type="text" placeholder="Last Name" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="name">Phone</label>
                                            <input type="text" placeholder="Phone" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="company">Company</label>
                                            <input type="text" placeholder="company" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="select"></label>
                                            <select name="select" className="form-control">
                                                <option value="">I am interested in</option>
                                                <option value="">HR Audit &amp; Assessment</option>
                                                <option value="">Legal &amp; HR Compliance</option>
                                                <option value="">Employment Practices</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                        <div className="form-group">
                                            <label className="control-label sr-only" htmlFor="textarea"></label>
                                            <textarea className="form-control  pdt20" id="textarea" name="textarea" rows="4" placeholder="Please describe your HR needs:"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                        <button type="submit" name="singlebutton" className="btn btn-primary  btn-lg ">submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                        <div className="cta-content">
                            <h1 className="cta-wrapper-text">Is Your Business Staying Compliant?</h1>
                            <p className="lead"><strong>Nunc euismod ante viverra tempus</strong>nisi gravida luctus elitstibulum elementum neque nec justo suscipiteu dapibus felis dapibus. </p>
                            <a href="#" className="btn btn-primary mb20">How to work with us</a>&nbsp; &nbsp;
                            <a href="#" className="btn btn-outline mb20">Request a consultation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

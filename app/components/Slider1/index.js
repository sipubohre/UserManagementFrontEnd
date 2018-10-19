/**
 *
 * Slider1
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Slider1() {
  console.log("you are in slider");
  return (
    <div className="slider">
        <div id="owlSlider1" className="owl-carousel owl-one owl-theme">
            <div className="item">
                <div className="slider-img"> <img src={require('../../assets/images/slider_1.jpg')} alt="" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-captions">
                                <h1 className="slider-title">Human Resources Service Website Template</h1>
                                <p className="hidden-xs">Sed ac lectus <strong>convallis variugnissim enihasellus </strong>vulputate felis.</p>
                                <a href="#" className="btn btn-primary  hidden-xs">Get Free Template</a>&nbsp; &nbsp;
                                <a href="#" className="btn btn-outline  hidden-xs">Need help?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="slider-img"><img src={require('../../assets/images/slider_2.jpg')} alt="" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-captions">
                                <h1 className="slider-title">Business Service Free Website Templates</h1>
                                <p className="hidden-xs">Fusce suscipit <strong>porttitor felisut eleifat</strong> sem a purus elementum.</p>
                                <a href="#" className="btn btn-primary  hidden-xs">Download Template</a>&nbsp; &nbsp;
                                <a href="#" className="btn btn-outline  hidden-xs">Need help?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="slider-img"><img src={require('../../assets/images/slider_3.jpg')} alt="" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="slider-captions">
                                <h1 className="slider-title">Human Resource Management Service Template </h1>
                                <p className="hidden-xs">Mauris vitae <strong>condimentum toisque viverra</strong> massanec tincidunt mollis.</p>
                                <a href="#" className="btn btn-primary  hidden-xs">View all Services</a>&nbsp; &nbsp;
                                <a href="#" className="btn btn-outline  hidden-xs">Free Template</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

Slider1.propTypes = {};

export default Slider1;

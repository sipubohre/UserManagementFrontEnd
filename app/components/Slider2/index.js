/**
 *
 * Slider2
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Slider2() {
  return (
    <div className="testimonial-carousel">
        <div className="owl-carousel owl-theme owl-two">
            <div className="item">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="testimonial-block">
                        <div className="testimonial-content">
                            <p className="testimonial-text">“Sed aclectus convallis variusserit etdignim enim sellus vulnec convallis fentum serons nequevitae seron sollicitace deronse redd roin dictum auctor doloid”</p>
                        </div>
                        <div className="testi-user">
                            <div className="testi-img"><img src={require('../../assets/images/testi_user_1.jpg')} alt="" className="img-circle" /></div>
                            <div className="testi-meta">
                                <h4 className="text-white">Nathan Scala</h4>
                                <span className="text-white">Co-Founder, Dummy Company</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="testimonial-block">
                        <div className="testimonial-content">
                            <p className="testimonial-text">“Proin justo augue efficitur semper purus aporta commodo tortorbi tempus nibh etst ultricies interduisque venenatis liberonunc lobortendra vivque commodo”</p>
                        </div>
                        <div className="testi-user">
                            <div className="testi-img"><img src={require('../../assets/images/testi_user_2.jpg')} alt="" className="img-circle" /></div>
                            <div className="testi-meta">
                                <h4 className="text-white">Albert Hensley</h4>
                                <span className="text-white">CEO, Dummy Company</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div className="testimonial-block">
                        <div className="testimonial-content">
                            <p className="testimonial-text">“Curabitur sitamet odio quanteger viverra quiselit id viverraesent mollis tempor maxiraesent vitae magna miroin risus nissuscipit non elementum ultrices lonulla”</p>
                        </div>
                        <div className="testi-user">
                            <div className="testi-img"><img src={require('../../assets/images/testi_user_3.jpg')} alt="" className="img-circle" /></div>
                            <div className="testi-meta">
                                <h4 className="text-white">Brian Richardson</h4>
                                <span className="text-white">Manager, Dummy Company</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

Slider2.propTypes = {};

export default Slider2;

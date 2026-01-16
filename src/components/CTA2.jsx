import React from 'react';
import ctaShape1 from '../assets/img/bg/cta-bg-1.svg';
import ctaShape2 from '../assets/img/bg/cta-bg-2.svg';
import { Link } from 'react-router';

const CTA2 = () => {
    return (
        <section className="ep-cta-section-two position-relative mt-120 z-1 bg-primary py-5 overflow-hidden">
            <div className="shape">
                <img 
                    src={ctaShape1} 
                    className="cta-shape1 position-absolute top-0 start-0 z-n1"
                    alt="cta-bg-left" 
                />
                <img 
                    src={ctaShape2} 
                    className="cta-shape2 position-absolute bottom-0 end-0 z-n1"
                    alt="cta-bg-right" 
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-11 mx-auto">
                        <div className="cta-text text-center py-5">
                            <div className="section-title-block mb-40 text-center">
                                <h2 className="section-title split-text right text-white mb-3 font-bold text-4xl">
                                    Next-Level IT for Next-Level Businesses
                                </h2>
                                <p className="text-white opacity-75 max-w-2xl mx-auto">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            
                            <div className="button-groups d-flex flex-wrap justify-content-center align-items-center gap-3">
                                <Link 
                                    to="/signup"
                                    className="theme-btn signup position-relative d-inline-flex align-items-center btn btn-light px-4 py-2 rounded-pill fw-bold"
                                >
                                    Sign Up Today
                                </Link>
                                <Link
                                    to="/services"
                                    className="theme-btn btn-tertiary position-relative d-inline-flex align-items-center btn btn-outline-light px-4 py-2 rounded-pill"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA2;
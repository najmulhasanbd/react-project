import React from 'react';
// ইমেজগুলো উপরে ইমপোর্ট করা হলো
import headphoneIcon from '../assets/img/icons/icon-headphone.svg';
import whoWeAreImg from '../assets/img/images/who-we-are.png';
import OdometerCounter from "./OdometerCounter "
import SectionTitle from './SectionTitle';


const WhoWeAre = () => {
    return (
        <section className="ep-who-we-area-section pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="short-info text-center text-md-start">
                            <SectionTitle title="Who We Are" subtitle="Craft Tomorrow Digital World" />

                            <p className="mb-3 text-muted">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, yhe a nostra
                                mattis hendrerit proin mollis pretium.
                            </p>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, yhe a nostra
                                mattis hendrerit proin mollis pretium Lorem ipsum dolor sit amet consectetur 
                                adipiscing elit platea pharetra.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-7 mt-5 mt-xl-0">
                        <div className="image d-sm-flex justify-content-end align-items-stretch">
                            <div className="counter flex-shrink-0 text-center flex-grow-1 d-flex flex-column justify-content-center bg-primary text-white p-4 rounded-start-20">
                                <div className="icon-box rounded-pill d-flex justify-content-center align-items-center bg-white mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                                    <img src={headphoneIcon} alt="icon-headphone" width="30" />
                                </div>
                                <div className="count d-flex align-items-center justify-content-center h2 font-bold mb-1">
                                    <OdometerCounter value={25} />
                                    <span>+</span>
                                </div>
                                <h5 className="title small text-uppercase mb-0">Services We Provide</h5>
                            </div>

                            <div className="img overflow-hidden rounded-end-20">
                                <img 
                                    src={whoWeAreImg} 
                                    alt="who-we-are" 
                                    className="img-fluid w-100 h-100 object-fit-cover" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoWeAre;
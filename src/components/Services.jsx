import React from 'react'
import SectionTitle from './SectionTitle'
import { services } from '../data/service'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const Services = () => {
    return (
        <section className="ep-services-section py-120" >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <SectionTitle sectionTitleClass="mb-0" title="Smart Solutions for a Digital World" subtitle="Our Services" />
                    </div>
                    <div className="col-xl-6 align-self-center">
                        <div className="service-arrow d-flex gap-4 align-items-center justify-content-end">
                            <div className="arrow arrow-prev">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="arrow arrow-next">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-50">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.arrow-prev',
                            nextEl: '.arrow-next',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service-item rounded-20">
                                    <a href="service-details.html" className="d-block w-100">
                                        <div className={`icon-box rounded-20 d-flex justify-content-center align-items-center ${service.className}`}>
                                            <img src={service.icon} alt="service-icon" />
                                        </div>
                                        <div className="text">
                                            <h4 className="service-title">{service.title}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Services
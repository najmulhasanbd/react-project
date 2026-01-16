import React from 'react'
import SectionTitle from './SectionTitle'
import { servicesTwo } from '../data/service'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const ServicesTwo = () => {
    return (
        <section className="ep-services-section-two mt-120">
            <div className="service-main py-120 rounded-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <SectionTitle title="Our Services" sectionTitleClass="text-center" subtitle="Advancing Technology for A Better Tomorrow" />
                        </div>
                    </div>



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
                        {servicesTwo.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service-item-two rounded-20 h-100" key={service.id}>
                                    <div className="image position-relative">
                                        <div className="img overflow-hidden">
                                            <Link to="service-details" className="d-block w-100">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="img-fluid w-100 transition-transform duration-500 hover:scale-110"
                                                />
                                            </Link>
                                        </div>
                                        <div className="icon-box section-bg rounded-20 d-flex justify-content-center align-items-center position-absolute start-50 translate-middle-x">
                                            <img src={service.icon} alt="icon" />
                                        </div>
                                    </div>
                                    <div className="text text-center p-4 pt-5">
                                        <h4 className="title mb-3">
                                            <Link to="service-details" className="text-decoration-none text-dark hover:text-primary transition-all">
                                                {service.title}
                                            </Link>
                                        </h4>
                                        <Link to="service-details"
                                            className="theme-btn theme-btn-border position-relative d-inline-flex align-items-center gap-2">
                                            Read More
                                            <span className="arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ServicesTwo
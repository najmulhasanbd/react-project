import React from 'react'
import CounterImage from '../assets/img/bg/counter-two-bg.svg'
import OdometerCounter from "./OdometerCounter"
import TestimonialImg from "../assets/img/testimonial/testimonial-img-2.png"
import { testimonials } from '../data/counter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper CSS ইমপোর্ট নিশ্চিত করুন
import 'swiper/css';
import 'swiper/css/navigation';

const Counter2 = () => {
    return (
        <div className="ep-counter-section-two pt-120">
            {/* Counter Section */}
            <div className="counter-main rounded-30 position-relative mx-auto" style={{ maxWidth: '1200px' }}>
                <div className="bg-img position-absolute top-0 start-50 translate-middle-x z-n1">
                    <img src={CounterImage} alt="counter-two-bg" />
                </div>
                <div className="container">
                    <div className="row g-4">
                        {[
                            { val: 500, label: "Winning Award" },
                            { val: 500, label: "Satisfied Client" },
                            { val: 180, label: "Active Members" },
                            { val: 250, label: "Clients Comment" }
                        ].map((item, index) => (
                            <div className="col-lg-3 col-sm-6 col-6" key={index}>
                                <div className="counter-item-two text-center rounded-20">
                                    <div className="number h2 font-bold">
                                        <OdometerCounter value={item.val} />+
                                    </div>
                                    <span className="short-info text-uppercase small">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <section className="ep-testimonial-section ep-testimonial-section-two position-relative z-1 mt-5">
                <div className="container">
                    <div className="testimonial-main rounded-30 bg-white shadow-sm p-4">
                        <div className="row align-items-center">
                            {/* Left Image */}
                            <div className="col-lg-4 col-md-5">
                                <div className="image flex-shrink-0 rounded-30 overflow-hidden">
                                    <img src={TestimonialImg} alt="testimonial-img" className="img-fluid w-100" />
                                </div>
                            </div>

                            {/* Swiper Slider */}
                            <div className="col-lg-8 col-md-7">
                                <div className="testimonial-two-slider">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={1} // সাধারণত টেস্টিমোনিয়াল ইমেজ সহ থাকলে ১টি স্লাইড ভালো দেখায়
                                        loop={true}
                                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                                        navigation={{
                                            prevEl: '.arrow-prev',
                                            nextEl: '.arrow-next',
                                        }}
                                    >
                                        {testimonials.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="slider-item">
                                                    <div className="user-info mb-3">
                                                        <div className="user d-flex align-items-center">
                                                            <div className="img overflow-hidden rounded-pill flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                                                <img src={testimonial.image} alt={testimonial.name} className="w-100 h-100 object-fit-cover" />
                                                            </div>
                                                            <div className="text ms-3 text-start">
                                                                <h4 className="name mb-0 h5">{testimonial.name}</h4>
                                                                <span className="designation small text-muted">{testimonial.designation}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="info mt-3 text-start">
                                                        <p className="fst-italic">"{testimonial.content}"</p>
                                                    </div>
                                                    <div className="rating text-start">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className={`fa-solid fa-star ${i < 4 ? 'text-warning' : 'text-secondary opacity-25'}`}></i>
                                                        ))}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    
                                    {/* Navigation Buttons (Optional) */}
                                    <div className="slider-nav mt-3 d-flex gap-2">
                                        <button className="arrow-prev btn btn-sm btn-outline-primary rounded-circle"><i className="fas fa-chevron-left"></i></button>
                                        <button className="arrow-next btn btn-sm btn-outline-primary rounded-circle"><i className="fas fa-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter2;
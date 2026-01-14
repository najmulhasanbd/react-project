import React from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialData } from '../data/testimonial'; // ডাটা পাথ ঠিক করুন

const Testimonial = () => {
    return (
        <section className="ep-testimonial-section pt-120 pb-120">
            <div className="container">
                <div className="row g-4 align-items-center">
                    {/* Left Info */}
                    <div className="col-lg-6">
                        <div className="testimonial-info">
                            <div className="section-title-block mb-20 text-start">
                                <SectionTitle title="clients testimonials" subtitle="Elevating Business with IT Excellence" />
                            </div>
                            <div className="short-info">
                                <p>Maintenance, ensuring that systems run smoothly and efficiently. Information Technology is a field that encompasses the development and use of modern systems.</p>
                            </div>
                            <div className="call-us mt-4">
                                <a href="tel:(704)555-0127" className="call-us-btn style2 d-flex align-items-center gap-3 text-decoration-none">
                                    <span className="icon d-flex justify-content-center align-items-center bg-primary text-white rounded-circle" style={{width: '50px', height: '50px'}}>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <div className="info">
                                        <span className="title text-uppercase text-muted small">CALL US ANYTIME</span>
                                        <h4 className="number text-dark mb-0">(704) 555-0127</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Slider */}
                    <div className="col-lg-6">
                        <div className="testimonial-area bg-light p-4 p-md-5 rounded-30">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                            >
                                {testimonialData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonial-item d-flex flex-column">
                                            <div className="rating text-warning mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fas fa-star ${i >= item.rating ? 'text-secondary opacity-25' : ''}`}></i>
                                                ))}
                                            </div>
                                            <div className="details mb-4">
                                                <p className="fs-5 italic">"{item.quote}"</p>
                                            </div>
                                            <div className="user-info d-flex align-items-center justify-content-between gap-4">
                                                <div className="user d-flex align-items-center gap-3">
                                                    <div className="img overflow-hidden rounded-pill flex-shrink-0" style={{width: '60px', height: '60px'}}>
                                                        <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                                                    </div>
                                                    <div className="text">
                                                        <h4 className="name mb-0 h5 font-bold">{item.name}</h4>
                                                        <p className="designation mb-0 small text-muted">{item.designation}</p>
                                                    </div>
                                                </div>
                                                <div className="quote">
                                                    <img src={item.icon} alt="quote" width="40" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
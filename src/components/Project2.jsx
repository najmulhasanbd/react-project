import React from 'react'
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় CSS ইমপোর্ট করতে ভুলবেন না (যদি মেইন ফাইলে না থাকে)
import 'swiper/css';
import 'swiper/css/navigation';

const Project2 = () => {
    return (
        <section className="ep-project-section-two pt-120 pb-120">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-title-block text-center">
                            <SectionTitle 
                                subtitle="latest projects" 
                                title="Simplifying IT Complexity Amplifying Business Success" 
                            />
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}
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
                    className="project-slider"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="project-item-two">
                                <div className="img overflow-hidden rounded-20 position-relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid w-100"
                                    />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100">
                                        <div className="text text-center rounded-20 w-100 h-100 d-flex justify-content-center align-items-center flex-column p-3">
                                            <h4 className="title">
                                                <a href="project-details.html" className="text-white text-decoration-none">{project.title}</a>
                                            </h4>
                                            <p className="text-white opacity-75">{project.company}</p>
                                            <a
                                                href="project-details.html"
                                                className="read-more icon-box rounded-pill icon-box-tertiary d-flex justify-content-center align-items-center mt-3"
                                            >
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* যদি আপনি নেভিগেশন বাটন ব্যবহার করতে চান তবে নিচে এগুলো বসাতে পারেন */}
                <div className="slider-navigation d-flex justify-content-center gap-3 mt-5">
                    <button className="arrow-prev btn btn-outline-primary rounded-circle"><i className="fas fa-arrow-left"></i></button>
                    <button className="arrow-next btn btn-outline-primary rounded-circle"><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </section >
    )
}

export default Project2
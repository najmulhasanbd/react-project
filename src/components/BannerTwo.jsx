import shape2 from '../assets/img/banner/banner-shape-4.svg'
import Shape2btn from '../assets/img/banner/banner-2-btn-img.svg'
import bannerimg2 from '../assets/img/banner/banner-img-2.png'
import bannershape2 from '../assets/img/banner/banner-shape-2.svg'
import bannershape3 from '../assets/img/banner/banner-shape-3.svg'
import { useState } from 'react'

const BannerTwo = () => {
    const [videoActive, setVideoActive] = useState(false);
    return (

        <section className="ep-banner-section-two">
            <div className="banner-main position-relative z-1">
                <img className="banner-shape-4 position-absolute z-n1" src={shape2}
                    alt="banner-shape-4" />
                <div className="container">
                    <div className="row banner-row">
                        <div className="col-lg-5 align-self-center">
                            <div className="banner-text">
                                <h1 className="banner-title title-anim">Make a <span className="d-lg-block">big
                                    impact</span> with IT
                                </h1>
                                <p l>lorem ipsum dolor sit amet consectetur. Facilisi cursus vulputate vestibulum etiam
                                    rhoncus </p>
                                {/* ভিডিও প্লে বাটন অংশ */}
                                <div className="rotate-img custom-wrapper-hover custom-inner-hover d-flex justify-content-center align-items-center text-center">
                                    <img src={Shape2btn} alt="about-video-text-white" />
                                    <a
                                        className="video-rotate-btn vidplay position-absolute top-50 start-50 translate-middle"
                                        href="https://www.youtube.com/watch?v=PkkV1vLHUvQ"
                                        onClick={(e) => {
                                            e.preventDefault(); // লিঙ্ক ওপেন হওয়া বন্ধ করবে
                                            setVideoActive(true); // ভিডিও পপআপ অন করবে
                                        }}
                                    >
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>

                                {/* ভিডিও পপআপ/মোডাল অংশ */}
                                <div
                                    className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
                                    onClick={() => setVideoActive(false)}>
                                    <div className="video-inner">
                                        <div
                                            className="video-container"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {videoActive &&
                                                <iframe
                                                    className='video'
                                                    src="https://www.youtube.com/embed/E3M63jxnS-k?autoplay=1"
                                                    title="খামেনির হুং/কা/রের শ/ক্তি এখান থেকেই আসে"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen>
                                                </iframe>
                                            }
                                            <button
                                                aria-label="close video popup"
                                                className="close-video-popup"
                                                onClick={() => setVideoActive(false)}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="banner-image custom-inner-hover ps-lg-5 position-relative">
                                <img src={bannerimg2} alt="banner-img-2"
                                    className="img-fluid w-100" />
                                <img className="banner-shape-2 position-absolute z-n1"
                                    src={bannershape2} alt="banner-shape-2" />
                                <img className="banner-shape-3 position-absolute z-n1"
                                    src={bannershape3} alt="banner-shape-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerTwo
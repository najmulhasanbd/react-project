import PageHeader from '../components/PageHeader'
import bannerImage from '../assets/img/projects/project-details-banner.png'
import iconarrow from '../assets/img/icons/icon-right-arrow.svg'
import projectInnerImg1 from '../assets/img/projects/project-detail-inner-img-1.png'
import projectInnerImg2 from '../assets/img/projects/project-detail-inner-img-2.png'
import { Link } from 'react-router'

const ProjectDetails = () => {
    return (
        <>
            <PageHeader title="Project" subtitle="Project Details Page" />

            <section class="ep-project-details-section pt-120">
                <div class="container">
                    <div class="project-banner-image position-relative">
                        <div class="reveal zoom-out overflow-hidden rounded-20">
                            <img src={bannerImage} alt="project-details-banner"
                                class="img-fluid w-100" />
                        </div>
                        <div class="project-information position-absolute rounded-20">
                            <h4 class="title rounded-20 text-center mb-30">Project Information</h4>
                            <ul class="list-unstyled options">
                                <li class="d-flex align-items-center rounded-20 gap-4 section-bg">
                                    <h5 class="flex-shrink-0 label">Category:</h5>
                                    <p>Roof Service</p>
                                </li>
                                <li class="d-flex align-items-center rounded-20 gap-4 section-bg">
                                    <h5 class="flex-shrink-0 label">Customer:</h5>
                                    <p>David Bravis</p>
                                </li>
                                <li class="d-flex align-items-center rounded-20 gap-4 section-bg">
                                    <h5 class="flex-shrink-0 label">Start date:</h5>
                                    <p>21 April 2024</p>
                                </li>
                                <li class="d-flex align-items-center rounded-20 gap-4 section-bg">
                                    <h5 class="flex-shrink-0 label">End date:</h5>
                                    <p>28 September 2024</p>
                                </li>
                                <li class="d-flex align-items-center rounded-20 gap-4 section-bg">
                                    <h5 class="flex-shrink-0 label">Rating:</h5>
                                    <div class="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </li>
                            </ul>
                            <div class="social-icon-box mt-30 d-flex justify-content-center">
                                <ul class="list-unstyled">
                                    <li>
                                        <Link to="#" class="d-inline-flex justify-content-center align-items-center">
                                            <i class="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="d-inline-flex justify-content-center align-items-center">
                                            <i class="fab fa-pinterest-p"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="d-inline-flex justify-content-center align-items-center">
                                            <i class="fab fa-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="d-inline-flex justify-content-center align-items-center">
                                            <i class="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="project-description">
                        <h3 class="title split-text right">Redefining the Digital Landscape</h3>
                        <p>Cybersecurity is a crucial aspect of IT, protecting sensitive information threats and breaches. IT services
                            also include technical support and maintenance, ensuring that systems run smoothly and efficiently. IT
                            industry offers diverse career opportunities, from network administration to software development As
                            technology continues to evolve, the importance of IT in shaping the future of businesses and society</p>
                        <p>Cloud computing, artificial intelligence, an cybersecurity are among the critical areas within IT that have
                            transformed how businesses operate. IT solutions streamline processes, enhance communication, and improve
                            decision-making by providing real-time data and analytics. Cybersecurity</p>

                        <div class="inner-options">
                            <ul class="list-unstyled">
                                <li><img src={iconarrow} alt="icon-right-arrow" /> Inno Secure Technologies</li>
                                <li><img src={iconarrow} alt="icon-right-arrow" /> Empowering Your Digital
                                    Future</li>
                                <li><img src={iconarrow} alt="icon-right-arrow" /> Unlocking the Power of
                                    Technology</li>
                                <li><img src={iconarrow} alt="icon-right-arrow" /> Technology that Moves You
                                    Forward</li>
                            </ul>
                        </div>
                        <div class="inner-image mb-30">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="image rounded-20 overflow-hidden reveal right">
                                        <img src={projectInnerImg1} alt="project-detail-inner-img"
                                            class="img-fluid w-100" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image rounded-20 overflow-hidden reveal right">
                                        <img src={projectInnerImg2} alt="project-detail-inner-img"
                                            class="img-fluid w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <h3 class="title split-text right">Building Tomorrow’s Tech Today</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and
                                    scrambled it to make a type specimen book</p>
                            </div>
                        </div>
                        <div class="list-info mt-30">
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                    <div class="info-item">
                                        <h4 class="info-title d-flex align-items-center">
                                            <i class="fa-solid fa-check"></i>
                                            Your Gateway to Innovation
                                        </h4>
                                        <p>The rapid advancement of technology continuously</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="info-item">
                                        <h4 class="info-title d-flex align-items-center">
                                            <i class="fa-solid fa-check"></i>
                                            Engineering the Future of IT
                                        </h4>
                                        <p>The rapid advancement of technology continuously</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <div class="info-item">
                                        <h4 class="info-title d-flex align-items-center">
                                            <i class="fa-solid fa-check"></i>
                                            Innovate with Confidence
                                        </h4>
                                        <p>The rapid advancement of technology continuously</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProjectDetails
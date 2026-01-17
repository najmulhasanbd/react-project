import PageHeader from '../components/PageHeader'
import { servicesData } from '../data/service2'
import ctabg from '../assets/img/images/cta-bg.svg'
import OdometerCounter from '../components/OdometerCounter'
import faqimg1 from '../assets/img/faq/faq-img-1.png'
import faqimg2 from '../assets/img/faq/faq-img-2.png'
import faquser from '../assets/img/icons/group-person-icon-2.svg'

const ServicesPage = () => {
    return (
        <>
            <PageHeader title="Our Services" subtitle="Services" />

            <section className="ep-services-section style2 py-120">
                <div className="container">
                    <div className="row">
                        {
                            servicesData.map((service => (
                                <div className="col-lg-4 col-md-6" key={service.id}>
                                    <div className="service-item rounded-20">
                                        <a href="service-details.html" className="d-block w-100">
                                            <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                                                <img src={service.icon} alt="service-icon" />
                                            </div>
                                            <div className="text">
                                                <h4 className="service-title">{service.title}</h4>
                                                <p>{service.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </section>

            <section className="ep-cta-section" data-background={`url(${ctabg})`}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 align-self-center">
                            <div className="cta-text d-flex align-items-center gap-4">
                                <div className="icon">
                                    <img src="assets/img/icons/mail-icon.svg" alt="mail-icon" />
                                </div>
                                <h3 className="info">Subscribe Our Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="cta-form">
                                <form action="#">
                                    <div className="d-sm-flex gap-3 align-items-center">
                                        <div className="input-group position-relative">
                                            <input type="text" className="form-control form-field shadow-none" placeholder="Enter Your Email" />
                                            <span className="mail-icon position-absolute top-50 translate-middle-y"><i
                                                className="fas fa-envelope"></i></span>
                                        </div>
                                        <button className="theme-btn mt-3 mt-sm-0 theme-btn-primary position-relative flex-shrink-0">Subscribe
                                            Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ep-faq-section style2 pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title-block mb-30 text-start">
                                <h6 className="section-sub-title position-relative d-inline-block text-uppercase">Ask Question
                                </h6>
                                <h2 className="section-title split-text right">Empowering Progress Through Technology</h2>
                            </div>
                            <div className="faq-body">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                1. What IT services do you offer?
                                            </button>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>We offer a range of IT ser including network setup and management, cybersecurity
                                                        solutions, clo computing, data backup and recovery, software development, and technical
                                                        support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2. How can you help improve our cybersecurity?
                                            </button>
                                        </div>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We offer a range of IT ser including network setup and management, cybersecurity solutions,
                                                    clo computing, data backup and recovery, software development, and technical support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                3. How do you handle data backup and recovery?
                                            </button>
                                        </div>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We offer a range of IT ser including network setup and management, cybersecurity solutions,
                                                    clo computing, data backup and recovery, software development, and technical support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-images">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="single-img reveal left rounded-20 overflow-hidden">
                                            <img src={faqimg1} alt="faq-img" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-img reveal right rounded-20 overflow-hidden">
                                            <img src={faqimg2} alt="faq-img" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div
                                            className="clients rounded-20 text-center d-flex align-items-center justify-content-center flex-column">
                                            <img src={faquser} alt="group-person-icon" />
                                            <div className="client-number d-flex align-items-center justify-content-center">
                                                <OdometerCounter value={4567} />+
                                            </div>
                                            <h5 className="trust">Trusted Clients</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ep-messages-section ep-messages-section-two style2 pt-120 position-relative">
                <div className="container">
                    <div className="message-main rounded-20">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-title-block mb-40 text-center text-md-start">
                                    <h6 className="section-sub-title position-relative d-inline-block text-uppercase">Talk to us</h6>
                                    <h2 className="section-title split-text right">Empowering Progress Through Technology</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-xl-7 order-2 order-xl-1">
                                <div className="message-text">
                                    <form action="#" className="message-form">
                                        <div className="row g-3">
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <label className="form-label">Your Name</label>
                                                    <input type="text" className="form-control form-field shadow-none" placeholder="Adnan Walker" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <label className="form-label">Your Email</label>
                                                    <input type="text" className="form-control form-field shadow-none"
                                                        placeholder="info.example@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <label className="form-label">Your Number</label>
                                                    <input type="text" className="form-control form-field shadow-none" placeholder="+088123456789" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <label className="form-label">Your Area</label>
                                                    <select className="form-select form-field shadow-none" aria-label="Default select example">
                                                        <option>New York City</option>
                                                        <option>Los Angeles</option>
                                                        <option>Chicago</option>
                                                        <option>Houston</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <label className="form-label">Your Area</label>
                                                    <textarea className="form-field textarea-control" placeholder="Message here.."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit"
                                                    className="theme-btn w-100 text-center theme-btn-tertiary position-relative">Send Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5 order-1 order-xl-2">
                                <div className="message-contact-info rounded-20">
                                    <h4 className="title text-white mb-40">Contact</h4>
                                    <ul className="list-unstyled contact-info">
                                        <li className="d-flex align-items-center">
                                            <div className="icon flex-shrink-0"><i className="fa-solid fa-paper-plane"></i></div>
                                            <div className="text">
                                                <p className="cn-title">Address </p>
                                                <h5 className="cn-info">4517 Washington Ave. Manchester</h5>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="icon flex-shrink-0"><i className="fa-solid fa-envelope"></i></div>
                                            <div className="text">
                                                <p className="cn-title">Email</p>
                                                <h5 className="cn-info">
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="icon flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                                            <div className="text">
                                                <p className="cn-title">Phone</p>
                                                <h5 className="cn-info">
                                                    <a href="tel:(239)555-0108">(239) 555-0108</a>
                                                </h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServicesPage
import React from 'react';
import faq1 from '../assets/img/faq/faq-img-1.png';
import faq2 from "../assets/img/faq/faq-img-2.png";
import faq3 from '../assets/img/icons/group-person-icon.svg';
import SectionTitle from './SectionTitle';
import OdometerCounter from "./OdometerCounter";

const faqData = [
    {
        id: "One",
        question: "What IT services do you offer?",
        answer: "We offer a range of IT services including network setup and management, cybersecurity solutions, cloud computing, data backup and recovery, software development, and technical support."
    },
    {
        id: "Two",
        question: "How can you help improve our cybersecurity?",
        answer: "We implement multi-layered security protocols, including firewalls, encryption, and regular security audits to protect your sensitive business data from threats."
    },
    {
        id: "Three",
        question: "How do you handle data backup and recovery?",
        answer: "Our automated backup systems ensure your data is stored securely in the cloud and on-site, allowing for rapid recovery in case of any data loss."
    }
];

const Faq = () => {
    return (
        <section className="ep-faq-section pt-120 pb-120">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Left Side: Accordion */}
                    <div className="col-lg-6">
                        <SectionTitle title="Empowering Progress Through Technology" subtitle="Ask Question" />
                        <div className="faq-body mt-4">
                            <div className="accordion" id="faqAccordion">
                                {faqData.map((item, index) => (
                                    <div className="accordion-item mb-3 border-0 shadow-sm rounded-10 overflow-hidden" key={index}>
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button 
                                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''} fw-bold`} 
                                                type="button" 
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`} 
                                                aria-expanded={index === 0 ? "true" : "false"} 
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {index + 1}. {item.question}
                                            </button>
                                        </h2>
                                        <div 
                                            id={`collapse${item.id}`} 
                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                                            aria-labelledby={`heading${item.id}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body text-muted">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Images and Odometer */}
                    <div className="col-lg-6">
                        <div className="faq-images">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="single-img rounded-20 overflow-hidden shadow-lg">
                                        <img src={faq1} alt="faq-img" className="img-fluid w-100 transition-transform duration-500 hover:scale-105" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-img rounded-20 overflow-hidden shadow">
                                        <img src={faq2} alt="faq-img" className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="clients rounded-20 text-center d-flex align-items-center justify-content-center flex-column bg-primary text-white p-4 shadow h-100">
                                        <div className="icon-box mb-3">
                                            <img src={faq3} alt="group-person-icon" width="50" />
                                        </div>
                                        <div className="client-number d-flex align-items-center justify-content-center h2 mb-0 font-bold">
                                            <OdometerCounter value={4567} />
                                            <span>+</span>
                                        </div>
                                        <h5 className="trust mt-2 opacity-75">Trusted Clients</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
import React from 'react'
import SectionTitle from './SectionTitle'

const Message2 = () => {
    return (
        <section class="ep-messages-section ep-messages-section-two pt-120 position-relative">
            <div class="container">
                <div class="message-main rounded-20">
                    <div class="row">
                        <div class="col-lg-7">
                            <SectionTitle title="Empowering Progress Through Technology" subtitle="Talk to us" />
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-xl-7 order-2 order-xl-1">
                            <div class="message-text">
                                <form action="#" class="message-form">
                                    <div class="row g-3">
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <label class="form-label">Your Name</label>
                                                <input type="text" class="form-control form-field shadow-none"
                                                    placeholder="Adnan Walker" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <label class="form-label">Your Email</label>
                                                <input type="text" class="form-control form-field shadow-none"
                                                    placeholder="info.example@gmail.com" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <label class="form-label">Your Number</label>
                                                <input type="text" class="form-control form-field shadow-none"
                                                    placeholder="+088123456789" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <label class="form-label">Your Area</label>
                                                <select class="form-select form-field shadow-none"
                                                    aria-label="Default select example">
                                                    <option>New York City</option>
                                                    <option>Los Angeles</option>
                                                    <option>Chicago</option>
                                                    <option>Houston</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-group">
                                                <label class="form-label">Your Area</label>
                                                <textarea class="form-field textarea-control" placeholder="Message here.."></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit"
                                                class="theme-btn w-100 text-center theme-btn-tertiary position-relative">Send
                                                Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-xl-5 order-1 order-xl-2">
                            <div class="message-contact-info rounded-20">
                                <h4 class="title text-white mb-40">Contact</h4>
                                <ul class="list-unstyled contact-info">
                                    <li class="d-flex align-items-center">
                                        <div class="icon flex-shrink-0"><i class="fa-solid fa-paper-plane"></i></div>
                                        <div class="text">
                                            <p class="cn-title">Address </p>
                                            <h5 class="cn-info">4517 Washington Ave. Manchester</h5>
                                        </div>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <div class="icon flex-shrink-0"><i class="fa-solid fa-envelope"></i></div>
                                        <div class="text">
                                            <p class="cn-title">Email</p>
                                            <h5 class="cn-info">
                                                <a href="mailto:info@example.com">info@example.com</a>
                                            </h5>
                                        </div>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <div class="icon flex-shrink-0"><i class="fa-solid fa-phone"></i></div>
                                        <div class="text">
                                            <p class="cn-title">Phone</p>
                                            <h5 class="cn-info">
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
    )
}

export default Message2
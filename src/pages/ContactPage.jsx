import PageHeader from '../components/PageHeader'


const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Contact" />

      <section className="ep-contact-section pt-120">
        <div className="container">
          <div className="contact-information">
            <div className="row">
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div
                    className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Phone</h4>
                    <ul className="list-unstyled">
                      <li><a href="tel:(480)555-0103">(480) 555-0103</a></li>
                      <li><a href="tel:(505)555-0125">(505) 555-0125</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div
                    className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Email</h4>
                    <ul className="list-unstyled">
                      <li><a href="mailto:info@gmail.com">info@gmail.com</a></li>
                      <li><a href="mailto:example@example.com">example@example.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div
                    className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Location</h4>
                    <ul className="list-unstyled">
                      <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form position-relative section-bg">
            <h2 className="title text-center title-anim">Get In Touch</h2>
            <form action="assets/mail.php" method="POST" id="contact-form">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" name="name" required className="form-control form-field shadow-none"
                      placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" name="email" required className="form-control form-field shadow-none"
                      placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" name="number" required className="form-control form-field shadow-none"
                      placeholder="Your Number" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" name="subject" required className="form-control form-field shadow-none"
                      placeholder="Subject" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-group">
                    <textarea name="message" className="form-field textarea-control" required
                      placeholder="Message here.."></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    <button type="submit" className="theme-btn position-relative">Submit Now</button>
                  </div>
                </div>
              </div>
            </form>
            <p className="ajax-response mb-0"></p>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1727346263569!5m2!1sen!2sbd"
            width="600" height="450" className='border-0' allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
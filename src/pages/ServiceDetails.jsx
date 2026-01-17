import React from 'react'
import PageHeader from '../components/PageHeader'
import servicedetailsimg from '../assets/img/services/service-details-img1.png'
import servicedetailsimg2 from '../assets/img/services/service-details-img2.png'
import Category from '../components/Category'

const ServiceDetails = () => {
  return (
    <>
      <PageHeader title="Service Details" subtitle="Service Details" />

      <section class="ep-service-details-section mt-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 service-content">
              <div class="service-details">
                <div class="service-banner rounded-20 overflow-hidden">
                  <img src={servicedetailsimg} alt="service-details-img"
                    class="img-fluid w-100" />
                </div>
                <div class="service-text mt-30">
                  <h3 class="title">Tech solutions for a smarter future</h3>
                  <p>The rapid advancement of technology continuously drives innovation within the IT sector, making
                    it a dynamic and evolving field. Cloud computing, artificial intelligence, and cybersecurity are
                    among the critical areas within IT that have transformed businesses operate</p>
                  <h4 class="sub-title">Innovative IT for business growth</h4>
                  <p>IT solutions streamline processes, enhance communication, an improve decision-making by providing
                    real-time data protecting sensitive information from t and breaches. IT services also include
                    technical support and maintenance, ensuring that systems run smoothly and efficiently</p>
                  <ul class="list-unstyled options">
                    <li><i class="fa-solid fa-circle-check"></i> Tech Solutions for a Connected World</li>
                    <li><i class="fa-solid fa-circle-check"></i> Your Vision, Our Innovation</li>
                    <li><i class="fa-solid fa-circle-check"></i> Technology That Drives Success</li>
                    <li><i class="fa-solid fa-circle-check"></i> Connecting the Dots of Digital Innovation</li>
                  </ul>
                  <div class="inner-details">
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="innner-img overflow-hidden rounded-20">
                          <img src={servicedetailsimg2} alt="service-details-img"
                            class="img-fluid w-100" />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="inner-text">
                          <h4 class="sub-title mt-0">Secure your future with IT</h4>
                          <p>It encompasses the use of computers, net, and other digl technologies to store, retrieve,
                            transmit, and manipulate data. IT professionals develop maintain the infrastructure that
                            support</p>
                          <ul class="list-unstyled m-0 inner-options">
                            <li><i class="fa-solid fa-angles-right"></i> angles-right
                              Your IT Success Partner</li>
                            <li><i class="fa-solid fa-angles-right"></i> Technology That Powers the Future</li>
                            <li><i class="fa-solid fa-angles-right"></i> Accelerate with Cutting-Edge Tech</li>
                            <li><i class="fa-solid fa-angles-right"></i> Revolutionizing Digital Experiences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="sub-title">Crafting Tomorrow’s Digital World</h4>
                  <p>It encompasses the use of computers, net, and other digital technologies to store, retrieve,
                    transmit, and manipulate data. IT professionals develop maintain the infrastructure that supports
                    a company's operations, including hardware, software, and security systems. The rapid advancement
                  </p>
                  <p>Ttechnology continuously drives innovation within the IT sector, making it a dynamic and evolving
                    field. Cloud computing, artificial intelligence</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <aside class="service-sidebar rounded-20">
                <h4 class="sidebar-title mb-30 position-relative d-inline-block">Category</h4>
                <Category />
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetails
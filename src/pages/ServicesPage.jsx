import PageHeader from '../components/PageHeader'
import { servicesData } from '../data/service2'

const ServicesPage = () => {
    return (
        <>
            <PageHeader title="Our Services" subtitle="Services" />

            <section class="ep-services-section style2 py-120">
                <div class="container">
                    <div class="row">
                        {
                            servicesData.map((service => (
                                <div class="col-lg-4 col-md-6">
                                    <div class="service-item rounded-20">
                                        <a href="service-details.html" class="d-block w-100">
                                            <div class="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                                                <img src={service.icon} alt="service-icon" />
                                            </div>
                                            <div class="text">
                                                <h4 class="service-title">{service.title}</h4>
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
        </>
    )
}

export default ServicesPage
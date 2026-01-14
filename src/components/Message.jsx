import messageImage from '../assets/img/images/message-img.png'
import SectionTitle from './SectionTitle'

const Message = () => {
    return (
        <section class="ep-messages-section pt-120 position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="message-text">
                            <SectionTitle  title="Talk to us" subtitle="Shaping the Future with Technology" />
                            <form action="#" class="message-form">
                                <div class="row g-3">
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <label class="form-label">Your Name</label>
                                            <input type="text" class="form-control form-field shadow-none" placeholder="Adnan Walker" />
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
                                            <input type="text" class="form-control form-field shadow-none" placeholder="+088123456789" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="input-group">
                                            <label class="form-label">Your Area</label>
                                            <select class="form-select form-field shadow-none" aria-label="Default select example">
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
                                        <button type="submit" class="theme-btn position-relative">Send Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="message-image overflow-hidden position-absolute bottom-0 end-0">
                            <img src={messageImage} alt="message-image" class="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Message
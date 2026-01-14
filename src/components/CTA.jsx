import React from 'react';
// ইমেজ ইমপোর্ট করা হয়েছে
import ctaimage from "../assets/img/images/cta-bg.svg";

const CTA = () => {
  return (
    <section 
      className="ep-cta-section py-5" 
      style={{ 
        backgroundImage: `url(${ctaimage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* বাম পাশ: টেক্সট এবং আইকন */}
          <div className="col-lg-6">
            <div className="cta-text d-flex align-items-center gap-4">
              <div className="icon bg-white p-3 rounded-circle shadow-sm">
                {/* রিয়্যাক্ট-এ লোকাল ইমেজ ব্যবহারের জন্য সঠিক পাথ নিশ্চিত করুন */}
                <img src="assets/img/icons/mail-icon.svg" alt="mail-icon" width="40" />
              </div>
              <h3 className="info text-white mb-0 font-bold text-2xl">Subscribe Our Newsletter</h3>
            </div>
          </div>

          {/* ডান পাশ: ফর্ম */}
          <div className="col-lg-6">
            <div className="cta-form">
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="d-sm-flex gap-3 align-items-center">
                  <div className="input-group position-relative flex-grow-1">
                    <input 
                      type="email" 
                      className="form-control form-field shadow-none py-3 ps-5 rounded-pill" 
                      placeholder="Enter Your Email" 
                      required 
                    />
                    <span 
                      className="mail-icon position-absolute top-50 translate-middle-y ms-3 text-muted"
                      style={{ zIndex: 5, left: '10px' }}
                    >
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <button 
                    type="submit" 
                    className="theme-btn mt-3 mt-sm-0 theme-btn-primary position-relative flex-shrink-0 px-4 py-3 rounded-pill btn btn-light"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
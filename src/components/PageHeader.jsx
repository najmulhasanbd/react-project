import React from 'react';
import pageHeader from '../assets/img/images/page-header-img.svg';

const PageHeader = ({ title, subtitle }) => {
  return (
      <section class="ep-page-header-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="header-img">
              <img src={pageHeader} alt="page-header-img" />
            </div>
          </div>
          <div class="col-sm-6 ms-auto">
            <div class="bread-crumb text-end">
              <h1 class="page-title">{title || "Page Title"}</h1>
              <ul class="list-unstyled d-flex flex-wrap align-items-center justify-content-end mt-30">
                <li>
                  <a href="index.html">Home</a>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
                <li>{subtitle || "About Us"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
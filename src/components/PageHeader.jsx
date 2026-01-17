import React from 'react';
import pageHeader from '../assets/img/images/page-header-img.svg';
import { Link } from 'react-router';

const PageHeader = ({ title, subtitle }) => {
  return (
      <section className="ep-page-header-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="header-img">
              <img src={pageHeader} alt="page-header-img" />
            </div>
          </div>
          <div className="col-sm-6 ms-auto">
            <div className="bread-crumb text-end">
              <h1 className="page-title">{title || "Page Title"}</h1>
              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-end mt-30">
                <li>
                  <Link to="/">Home</Link>
                  <i className="fa-solid fa-chevron-right"></i>
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
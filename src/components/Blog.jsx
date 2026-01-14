import React from 'react';
import { blogs } from '../data/blog'; // ডাটা ইমপোর্ট করুন

const Blog = () => {
    return (
        <section className="ep-blog-section pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="section-title-block text-center mb-60">
                            <h6 className="section-sub-title position-relative d-inline-block text-uppercase text-primary">blog & News</h6>
                            <h2 className="section-title split-text right mt-2">Transforming Challenges into Opportunities</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row g-4">
                    {blogs.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div className="blog-item rounded-20 shadow-sm bg-white overflow-hidden h-100">
                                <div className="img overflow-hidden">
                                    <a href={`/blog/${item.id}`} className="d-block w-100">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="img-fluid w-100 transition-transform duration-500 hover:scale-110" 
                                        />
                                    </a>
                                </div>
                                <div className="text p-4">
                                    <div className="blog-meta d-flex align-items-center justify-content-between gap-2 mb-3 small text-muted">
                                        <span className="d-flex align-items-center gap-2">
                                            <i className="fas fa-user text-primary"></i>
                                            {item.author}
                                        </span>
                                        <span className="d-flex align-items-center gap-2">
                                            <i className="fas fa-calendar-alt text-primary"></i>
                                            {item.date}
                                        </span>
                                    </div>
                                    <h4 className="blog-title mb-3 h5 font-bold">
                                        <a href={`/blog/${item.id}`} className="text-dark text-decoration-none hover:text-green-500">
                                            {item.title}
                                        </a>
                                    </h4>
                                    <p className="text-muted small mb-4">{item.description}</p>
                                    
                                    <a href={`/blog/${item.id}`} className="theme-btn theme-btn-border position-relative d-inline-flex align-items-center gap-2 text-decoration-none font-bold">
                                        Read More
                                        <span className="arrow">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
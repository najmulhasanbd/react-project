import Category from '../components/Category'
import PageHeader from '../components/PageHeader'
import blogImg1 from "../assets/img/blog/blog-single-img-1.png";
import blogImg2 from "../assets/img/blog/blog-single-img-2.png";
import blogImg3 from "../assets/img/blog/blog-single-img-3.png";
import { Link } from 'react-router';

const blogData = [
    {
        id: 1,
        title: "Drive success with cutting-edge technology",
        image: blogImg1,
        date: "09",
        month: "Mar",
        author: "admin",
        description: "IT services also include technical support and maintenance, ensuring that systems run smoothly and efficiently."
    },
    {
        id: 2,
        title: "Empowering Progress Through Technology",
        image: blogImg2,
        date: "09",
        month: "Mar",
        author: "admin",
        description: "IT services also include technical support and maintenance, ensuring that systems run smoothly and efficiently."
    },
    {
        id: 3,
        title: "Connecting the Dots of Digital Innovation",
        image: blogImg3,
        date: "09",
        month: "Mar",
        author: "admin",
        description: "IT services also include technical support and maintenance, ensuring that systems run smoothly and efficiently."
    }
];

const BlogDetails = () => {
    return (
        <>
            <PageHeader title="Blog Details" subtitle="Blog Details" />
            <section className="ep-blog-section ep-blog-single-section pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 mx-auto">
                            <div className="row g-4">
                                {blogData.map((blog) => (
                                    <div className="col-lg-12" key={blog.id}> 
                                        <div className="blog-item rounded-30 shadow-sm transition-all hover-up mb-4">
                                            <div className="img overflow-hidden position-relative">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="img-fluid w-100 transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="blog-meta style2 section-bg position-absolute start-50 translate-middle-x d-inline-flex align-items-center justify-content-between px-3 py-2 rounded-pill shadow">
                                                    <span className="date fw-bold me-3">
                                                        {blog.date} <span className="small text-uppercase">{blog.month}</span>
                                                    </span>
                                                    <span className="admin small">
                                                        By {blog.author}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text p-4 mt-3">
                                                <h3 className="blog-title h4 font-bold mb-3">
                                                    {blog.title}
                                                </h3>
                                                <p className="text-muted">{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pagination">
                                <ul className="list-unstyled d-flex justify-content-center w-100 align-items-center">
                                    <li>
                                        <Link to="#" className="paginate rounded-pill d-flex justify-content-center align-items-center"><i
                                            className="fa-solid fa-angle-left"></i></Link>
                                    </li>
                                    <li><Link to="#" className="paginate active rounded-pill d-flex justify-content-center align-items-center">1</Link>
                                    </li>
                                    <li><Link to="#" className="paginate rounded-pill d-flex justify-content-center align-items-center">2</Link>
                                    </li>
                                    <li><Link to="#" className="paginate rounded-pill d-flex justify-content-center align-items-center">3</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="paginate rounded-pill d-flex justify-content-center align-items-center"><i
                                            className="fa-solid fa-angle-right"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-10 mx-auto">
                            <aside className="blog-sidebar">
                                <div className="blog-widget">
                                    <div className="section-title-block mb-20">
                                        <h6 className="section-sub-title position-relative d-inline-block mb-0">Search</h6>
                                    </div>
                                    <form action="#">
                                        <div className="input-group position-relative">
                                            <input type="email" className="form-control shadow-none" placeholder="Type here..." />
                                            <button className="position-absolute top-0 end-0 z-3" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="blog-widget">
                                    <div className="section-title-block mb-20">
                                        <h6 className="section-sub-title position-relative d-inline-block mb-0">Category</h6>
                                    </div>
                                    <Category />
                                </div>
                                <div className="blog-widget">
                                    <div className="section-title-block mb-20">
                                        <h6 className="section-sub-title position-relative d-inline-block mb-0">Recent Post</h6>
                                    </div>
                                    <div className="recent-blog">
                                        <div className="blog-sm-item d-flex align-items-center">
                                            <div className="image flex-shrink-0 overflow-hidden">
                                                <Link to="blog-details" className="d-block w-100">
                                                    <img src="assets/img/blog/blog-sm-img-1.png" alt="blog-sm-img" className="img-fluid w-100" />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <ul className="blog-meta list-unstyled d-flex flex-wrap">
                                                    <li><Link to="blog-details">Category</Link></li>
                                                    <li><Link to="blog-details">Comments (2)</Link></li>
                                                </ul>
                                                <h5 className="blog-title">
                                                    <Link to="blog-details">Transform Challenges into Opportunities</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="blog-sm-item d-flex align-items-center">
                                            <div className="image flex-shrink-0 overflow-hidden">
                                                <Link to="blog-details" className="d-block w-100">
                                                    <img src="assets/img/blog/blog-sm-img-2.png" alt="blog-sm-img" className="img-fluid w-100" />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <ul className="blog-meta list-unstyled d-flex flex-wrap">
                                                    <li><Link to="blog-details">Category</Link></li>
                                                    <li><Link to="blog-details">Comments (2)</Link></li>
                                                </ul>
                                                <h5 className="blog-title">
                                                    <Link to="blog-details">Accelerate with Cutting-Edge Tech</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="blog-sm-item d-flex align-items-center">
                                            <div className="image flex-shrink-0 overflow-hidden">
                                                <Link to="blog-details" className="d-block w-100">
                                                    <img src="assets/img/blog/blog-sm-img-3.png" alt="blog-sm-img" className="img-fluid w-100" />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <ul className="blog-meta list-unstyled d-flex flex-wrap">
                                                    <li><Link to="blog-details">Category</Link></li>
                                                    <li><Link to="blog-details">Comments (2)</Link></li>
                                                </ul>
                                                <h5 className="blog-title">
                                                    <Link to="blog-details">Technology That Powers the Future</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-widget">
                                    <div className="section-title-block mb-20">
                                        <h6 className="section-sub-title position-relative d-inline-block mb-0">Tags</h6>
                                    </div>
                                    <ul className="list-unstyled tags d-flex align-items-center flex-wrap gap-3">
                                        <li><Link to="#">InfoSec</Link></li>
                                        <li><Link to="#">NexTech</Link></li>
                                        <li><Link to="#">SmartNet</Link></li>
                                        <li><Link to="#">Byte</Link></li>
                                        <li><Link to="#">TechVista</Link></li>
                                        <li><Link to="#">TechCraft</Link></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails
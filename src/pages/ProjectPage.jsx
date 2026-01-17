import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { projectsData } from '../data/projects'

const ProjectPage = () => {
    return (
        <>
            <PageHeader title="Project" subtitle="Project Page" />

            <section class="ep-project-section pt-120">
                <div class="container">
                    <div class="row g-4">
                        {projectsData.map((project) => (
                            <div className="col-lg-6" key={project.id}>
                                <div className="project-item position-relative overflow-hidden rounded-20 group">
                                    <div className="img reveal zoom-out">
                                        <img src={project.image} alt={project.title} className="img-fluid w-100" />
                                    </div>
                                    <div className="overlay position-absolute bottom-0 start-0 w-100 p-4">
                                        <p className="small mb-1">{project.category}</p>
                                        <h4 className="title">
                                            <Link to="#" className="text-decoration-none">
                                                {project.title}
                                            </Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage
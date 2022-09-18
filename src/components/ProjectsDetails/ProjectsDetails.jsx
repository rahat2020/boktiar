import React from 'react';
import './ProjectsDetails.css';
// import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
// import 'node_modules/react-modal-video/scss/modal-video.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle, faPlayCircle, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectDetailModal from '../ProjectDetailModal/ProjectDetailModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProjectsDetails({ item }) {
    const pic = " https://boktiar.herokuapp.com/images/";

    console.log(item)
    const { name, modalId, link, technologies, details, type, _id, gitHubServer, gitHubClient, photo } = item;

    // const [isOpen, setOpen] = useState(false)
    const notify = () => toast("Video will arrive soon, thanks for clicking😍");


    return (
        <>
            <div className="pd-container">
                <div className="row pt-3 project">
                    <div className="col-md-6 project-img-col">
                        <h2 className=" mb-2 font-secondary color-primary">Project <h5 className="fs-6 color-primary">[{type}]</h5></h2>
                        {/* <div className={`project-img ${projectBgClass}`}></div> */}
                        <div className="project-img">
                            <img className="img" src={pic + photo} alt="" />
                        </div>
                        <div className="mt-3 d-flex justify-content-center align-items-center">
                            <a href={link} target="_blank" className="p-2 me-4 d-inline-block btn-custom-secondary" rel="noreferrer"> <FontAwesomeIcon className="font-icon" icon={faGlobe} /> Live Site</a>

                            <a href={gitHubClient} target="_blank" className="p-2 me-4 d-inline-block btn-custom-secondary" rel="noreferrer"> <FontAwesomeIcon className="font-icon" icon={faGithub} /> Code</a>

                            <a href={gitHubServer} target="_blank" className="p-2 me-4 d-inline-block btn-custom-secondary" rel="noreferrer"> <FontAwesomeIcon className="font-icon" icon={faServer} /> Server</a>

                        </div>
                    </div>

                    <div className="col-md-6 pb-5 pt-5 project-description">
                        <h1 className="color-primary p-0 m-0">{name} </h1>
                        <h3 className="color-primary p-0 m-0"> ( {type} )</h3>
                        <p className="pt-3 text-white">
                            {/* {details.slice(0,10)}..... 
                        <span className="text-danger btn-see-more" data-bs-toggle="modal" data-bs-target={`#${modalId}`}> See More</span> */}
                            <span className="text-white btn-see-more">{details}</span>
                        </p>

                        <div className="technologies w-100">
                            {
                                technologies.map(technologie => <span className="p-2 me-2" key={technologies}>{technologie}</span>)
                            }
                        </div>

                        <button className="mt-4 btn-custom-secondary py-2 px-5" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                            <FontAwesomeIcon className="font-icon" icon={faInfoCircle} /> View Details
                        </button>

                        <button onClick={notify} className="p-2 ms-4 btn-custom-secondary"> <FontAwesomeIcon className="font-icon" icon={faPlayCircle} />
                            Video Preview
                        </button>
                        <ToastContainer />
                    </div>

                    {/* Modal */}
                    <ProjectDetailModal item={item} key={_id}></ProjectDetailModal>
                </div>
            </div>
        </>
    )
}

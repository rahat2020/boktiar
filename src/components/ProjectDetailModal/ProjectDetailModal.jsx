import React from 'react';
import './ProjectDetailModal.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";


const ProjectDetailModal = ({ item }) => {

    const { modalId, name, type, details } = item;

    // const [isOpen, setOpen] = useState(false)


    return (
        <div className="modal fade" id={`${modalId}`} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content modal-custom">
                    <div className="modal-header">
                        <h3 className="modal-title" id={`${modalId}Label`}><h3 className="color-secondary">{name}</h3>
                            <h5 className="color-secondary"> ( {type} )</h5></h3>

                        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Ke90Tje7VS0" onClose={() => setOpen(false)} /> */}

                        {/* <button onClick={() => setOpen(true)} className="p-2 ms-4 btn-preview" title="Show Video Demo">
                            <FontAwesomeIcon icon={faPlayCircle} />
                        </button> */}


                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="font-discription">{details}</p>
                        <hr />
                        <ul>
                            {/* {
                                details.map(detail => <li className="mt-3 font-discription">{detail}</li>)
                            } */}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-custom-secondary py-2 px-4" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
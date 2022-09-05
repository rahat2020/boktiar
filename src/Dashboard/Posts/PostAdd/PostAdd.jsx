import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './PostAdd.module.css';

const StudentAdd = () => {

    // ADDING FORM DATA  TO THE DASHBOARD
    const [file, setFile] = useState(null);
    const config = {
        headers: {token: `Bearer ${JSON.parse(localStorage.getItem('token'))}`}
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            name: e.target.name.value,
            modalId: e.target.modalId.value,
            type: e.target.type.value,
            link: e.target.link.value,
            gitHubClient: e.target.gitHubClient.value,
            gitHubServer: e.target.gitHubServer.value,
            youtube: e.target.youtube.value,
            technologies: e.target.technologies.value,
            details: e.target.details.value,
        }
        console.log(newPost)
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/post/upload", data);
            } catch (err) {
                console.log(err, 'file img submit failed');
            }
        }

        try {
            const res = await axios.post("http://localhost:5000/post/newPost", newPost, config);
            console.log(res)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Post Added Successfully',
                text: 'To see go home page',
            })
        } catch (err) {
            console.log(err, 'form submit failed');
        }
    }

    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className="colLeft">
                        <h2 className={classes.title}>Post Add</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>add post</span></strong>
                    </div>
                </div>

                {/* Teacher add forms */}
                <div className="mt-3">
                    <div className={classes.Tadd}>
                        {/* basic details */}
                        <>
                            <div className={classes.bdtails}>
                                <h3>Post Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputEmail4" name="name" placeholder="name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Modal ID</label>
                                    <input type="text" className="form-control" id="inputPassword4" name="modalId" placeholder="modalid"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="inputPassword4" name="type" placeholder="type"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Live Link</label>
                                    <input type="text" className="form-control" id="inputCity" name="link"  placeholder="live link" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Client Github</label>
                                    <input type="text" className="form-control" id="inputCity" name="gitHubClient"  placeholder="client github" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Server Github</label>
                                    <input type="text" className="form-control" id="inputCity" name="gitHubServer"  placeholder="server github" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">Youtube video</label>
                                    <input type="text" className="form-control" id="inputCity" name="youtube"  placeholder="youtube video" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputState" className="form-label">Technologies</label>
                                    <input type="text" className="form-control" id="inputCity" name="technologies"  placeholder="technologies" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputState" className="form-label">Details</label>
                                    <input type="text" className="form-control" id="inputCity" name="details"  placeholder="details" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Post Image</label>
                                    {/* <input type="file" className="form-control" id="inputZip" /> */}
                                    <div className="d-flex justify-content-start align-items-start">
                                        {file && (
                                            <img className={classes.regImg} src={URL.createObjectURL(file)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                                </div>
                            </form>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentAdd
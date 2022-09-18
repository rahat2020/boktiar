import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../Sidebar/Sidebar';
import classes from './AddReview.module.css';

const AddReview = () => {
    // ADDING FORM DATA  TO THE DASHBOARD
    const [name, setName] = useState("");
    const [rank, setRank] = useState("");
    const [facebook, setFacebook] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [instagram, setInstagram] = useState("");
    const [descriptions, setDiscrptions] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = {
            name,
            rank,
            facebook,
            linkedin,
            instagram,
            descriptions

        }
        console.log(newReview)
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newReview.photo = filename;
            try {
                await axios.post(" https://boktiar.herokuapp.com/review/reviewimg", data);
            } catch (err) {
                console.log(err, 'review img submit failed');
            }
        }

        try {
            const res = await axios.post(" https://boktiar.herokuapp.com/review/addreview", newReview);
            console.log(res)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Review Added Successfully',
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
                    <div className={classes.colLeft}>
                        <h2 className={classes.title}>Add Review</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>add review</span></strong>
                    </div>
                </div>

                {/* Teacher add forms */}
                <div className="mt-3">
                    <div className={classes.Tadd}>
                        {/* basic details */}
                        <>
                            <div className={classes.bdtails}>
                                <h3>Course Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">

                                <div className="col-md-4">
                                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="name"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputPassword4" className="form-label">Rank</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="your rank" name="rank"
                                        onChange={(e) => setRank(e.target.value)} />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="inputZip" className="form-label">Your Image</label>
                                    {/* <input type="file" className="form-control" id="inputZip" /> */}
                                    <div className="d-flex justify-content-start align-items-start">
                                        {file && (
                                            <img className={classes.regImg} src={URL.createObjectURL(file)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputPassword4" className="form-label">Facebook link</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="facebook link" name="facebook"
                                        onChange={(e) => setFacebook(e.target.value)} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputPassword4" className="form-label">Linkedin Link</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="linkedin link" name="linkedin"
                                        onChange={(e) => setLinkedIn(e.target.value)} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputPassword4" className="form-label">Instagram Link</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="instagram link" name="instragram"
                                        onChange={(e) => setInstagram(e.target.value)} />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label">Descriptions</label>
                                    <textarea type="text" className="form-control" id="inputPassword4" placeholder="Descriptions" name="descriptions"
                                        onChange={(e) => setDiscrptions(e.target.value)} />
                                </div>

                                <div className="col-12 mb-4">
                                    <button type="submit" className="btn btn-warning text-white fw-bold" onClick={handleSubmit}>Submit</button>
                                </div>
                            </form>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddReview
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import classes from './SubjectAdd.module.css';
import Sidebar from '../../Sidebar/Sidebar';

const SubjectAdd = () => {
    const [file, setFile] = useState(null);
    const [poster, setPoster] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [videoOne, setVideoOne] = useState(null);
    const [videoTwo, setVideoTwo] = useState(null);
    const [videoThree, setVideoThree] = useState(null);
    const [videoFour, setVideoFour] = useState(null);
    const [videoFive, setVideoFive] = useState(null);
    const [videoSix, setVideoSix] = useState(null);
    const [videoSeven, setVideoSeven] = useState(null);
    const [videoEight, setVideoEight] = useState(null);
    const [videoNine, setVideoNine] = useState(null);
    const [videoTen, setVideoTen] = useState(null);
    const [videoEleven, setVideoEleven] = useState(null);
    const [videoTweleve, setVideoTweleve] = useState(null);

    // IMAGE UPLOADING TO THE IMGBB
    const [imageUrl, setImageUrl] = useState()
    console.log(imageUrl)
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '3c281115f0127b95e549a3bb92d65831');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourse = {
            level: e.target.level.value,
            courseName: e.target.courseName.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
            duration: e.target.duration.value,
            language: e.target.language.value,
            tutor: e.target.tutor.value,
            tutorSkills: e.target.tutorSkills.value,
            totalLecture: e.target.totalLecture.value,
            students: e.target.students.value,
            certificate: e.target.certificate.value,
            desc: e.target.desc.value,
        }
        if (file && poster && videoOne && videoTwo && videoThree && videoFour) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            const postername = Date.now() + poster.name;
            const trailervid = Date.now() + trailer.name;

            // COURSE VIDEO
            const videoone = Date.now() + videoOne.name;
            const videotwo = Date.now() + videoTwo.name;
            const videothree = Date.now() + videoThree.name;
            const videofour = Date.now() + videoFour.name;
            const videofive = Date.now() + videoFive.name;
            const videosix = Date.now() + videoSix.name;
            const videoseven = Date.now() + videoSeven.name;
            const videoeight = Date.now() + videoEight.name;
            const videonine = Date.now() + videoNine.name;
            const videoten = Date.now() + videoTen.name;
            const videoeleven = Date.now() + videoEleven.name;
            const videotweleve = Date.now() + videoTweleve.name;


            data.append("name", filename);
            data.append("file", file);
            
            data.append("name", postername);
            data.append("poster", poster);

            data.append("name", trailervid);
            data.append("file", trailer);
            // video one
            data.append("name", videoone);
            data.append("file", videoOne);
            // video two
            data.append("name", videotwo);
            data.append("file", videoTwo);
            // video three
            data.append("name", videothree);
            data.append("file", videoThree);
            // video four
            data.append("name", videofour);
            data.append("file", videoFour);
            // video five
            data.append("name", videofive);
            data.append("file", videoFive);
            // // video six
            data.append("name", videosix);
            data.append("file", videoSix);
            // video seven
            data.append("name", videoseven);
            data.append("file", videoSeven);
            // video eight
            data.append("name", videoeight);
            data.append("file", videoEight);
            // video nine
            data.append("name", videonine);
            data.append("file", videoNine);
            // video ten
            data.append("name", videoten);
            data.append("file", videoTen);
            // video eleven
            data.append("name", videoeleven);
            data.append("file", videoEleven);
            // video tweleve
            data.append("name", videotweleve);
            data.append("file", videoTweleve);

            newCourse.tutorImg = filename;
            newCourse.poster = postername;
            newCourse.trailervid = trailervid;
            newCourse.videoone = videoone;
            newCourse.videotwo = videotwo;
            newCourse.videofour = videofour;
            newCourse.videofive = videofive;
            newCourse.videosix = videosix;
            newCourse.videoseven = videoseven;
            newCourse.videoeight = videoeight;
            newCourse.videonine = videonine;
            newCourse.videoten = videoten;
            newCourse.videoeleven = videoeleven;
            newCourse.videotweleve = videotweleve;

            try {
                await axios.post(("http://localhost:7000/uploadimg", data))

            } catch (err) {
                console.log(err, 'file submit failed');
            }
        }

        try {
            const res = await axios.post("http://localhost:7000/addCourse", newCourse);
            res.data && Swal.fire({
                icon: 'success',
                title: 'Subject Added Successfully',
                text: 'To see go subject view',
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
                        <h2 className={classes.title}>Add Subject</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Add Subject</span></strong>
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
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-3">
                                    <label htmlFor="inputEmail4" className="form-label">Trailer Video</label>
                                    {/* <input type="file" className="form-control" id="inputEmail4" name="trailer" multiple/> */}
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {trailer && (
                                            <img className={classes.regImg} src={URL.createObjectURL(trailer)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setTrailer(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Poster</label>
                                    {/* <input type="file" className="form-control" id="inputPassword4" placeholder="Enter your name" /> */}
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {imageUrl && (
                                            <img className={classes.regImg} src={URL.createObjectURL(imageUrl)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => handleImageUpload(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Tutor Image</label>
                                    {/* <input type="file" className="form-control" id="inputPassword4" placeholder="Enter your name" /> */}
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {imageUrl && (
                                            <img className={classes.regImg} src={URL.createObjectURL(imageUrl)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => handleImageUpload(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Level</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="course lavel" name="level" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="course name" name="courseName" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Tutors Skills</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="tutor skills" name="tutorSkills" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="inputPassword4" placeholder="price" name="price" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Rating</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Course rating" name="rating" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Durations</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Durations" name="duration" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Language</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="language" name="language" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Tutor</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="tutor name" name="tutor" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Total Students</label>
                                    <input type="number" className="form-control" id="inputPassword4" placeholder="Total students" name="students" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Certificates</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="certificate" name="certificate" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Course Category" name="Category" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Total Lectures</label>
                                    <input type="number" className="form-control" id="inputPassword4" placeholder="total Lectures" name="totalLecture" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label">Descriptions</label>
                                    <textarea type="text" className="form-control" id="inputPassword4" placeholder="Course Discrpitions" name="desc" />
                                </div>


                                {/*//////////////////////////////////  COURSE VIDEO SERIALLY  ///////////////////////////////////////////////////*/}

                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - One</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoOne && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoOne)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoOne(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video two */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Two</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoTwo && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoTwo)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoTwo(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video three */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Three</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoThree && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoThree)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoThree(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video four */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Four</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoFour && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoFour)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoFour(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video five */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Five</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoFive && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoFive)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoFive(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>


                                {/* video six */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Six</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoSix && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoSix)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoSix(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video seven */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Seven</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoSeven && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoSeven)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoSeven(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video eight */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Eight</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoEight && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoEight)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoEight(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video nine */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Nine</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoNine && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoNine)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoNine(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video ten */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Ten</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoTen && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoTen)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoTen(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video eleven */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Eleven</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoEleven && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoEleven)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoEleven(e.target.files[0])} data-show-upload="true" />
                                    </div>
                                </div>

                                {/* video tweleve */}
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Tweleve</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        {videoTweleve && (
                                            <img className={classes.regImg} src={URL.createObjectURL(videoTweleve)} alt="" />
                                        )}
                                        <input type="file" onChange={(e) => setVideoTweleve(e.target.files[0])} data-show-upload="true" />
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

export default SubjectAdd
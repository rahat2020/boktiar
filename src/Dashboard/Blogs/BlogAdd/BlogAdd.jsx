
import classes from './BlogAdd.module.css';
import Sidebar from '../../Sidebar/Sidebar';

const SubjectAdd = () => {


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
                            <form className="row g-3">
                                <div className="col-md-3">
                                    <label htmlFor="inputEmail4" className="form-label">Trailer Video</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  name="trailer"/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Poster</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file" name="poster" />
                                        {/* <input type="file" onChange={(e) => setPoster(e.target.files[0])} name="poster"/> */}
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Tutor Image</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file" name="tutorImg"/>
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
                                        <input type="file"data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Two</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Three</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Four</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Five</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Six</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Seven</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Eight</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Nine</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Ten</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file"  data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Eleven</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file" data-show-upload="true" multiple/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputPassword4" className="form-label">Course Video - Tweleve</label>
                                    <div className="d-flex justify-content-start align-items-start border p-1">
                                        <input type="file" data-show-upload="true" multiple/>
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
import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './PostEdit.module.css';

const StudentEdit = () => {
    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className={classes.colLeft}>
                        <h2 className={classes.title}> Post Edit</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>post edit</span></strong>
                    </div>
                </div>

                {/* Teacher add forms */}
                <div className="mt-3">
                    <div className={classes.Tadd}>
                        {/* basic details */}
                        <>
                            <div className={classes.bdtails}>
                                <h3>Basic Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Teacher ID</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter your name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Gender</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="type your gender" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Date</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="dd/mm/yyyy" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputState" className="form-label">Joining Date</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Qualification</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">Experience</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </form>
                        </>
                        {/* Login details */}
                        <>
                            <div className={classes.lgntails}>
                                <h3>Login Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Email ID</label>
                                    <input type="text" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Reapt Password</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                                </div>
                            </form>
                        </>
                        {/* address */}
                        <>
                            <div className={classes.adrstails}>
                                <h3>Address Details</h3>
                                <div className={classes.line} />
                            </div>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">State</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Zip Code</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
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

export default StudentEdit;
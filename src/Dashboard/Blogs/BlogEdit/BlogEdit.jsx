import React from 'react';
import classes from './BlogEdit.module.css';
import Sidebar from '../../Sidebar/Sidebar';

const SubjectAdd = () => {
    return (
        <>
            <Sidebar />
            <div className={classes.TeacherAdd}>
                <div className={classes.teacherTitle}>
                    <div className={classes.colLeft}>
                        <h2 className={classes.title}>Edit Subject</h2>
                        <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Edit Subject</span></strong>
                    </div>
                </div>

                {/* Subject add forms */}
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
                                    <label htmlFor="inputEmail4" className="form-label">Subject ID</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="HHHDDDFGA"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Mathmatics" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Class</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="10" />
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
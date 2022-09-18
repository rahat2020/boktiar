import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './ReviewManage.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const ReviewManage = () => {
    const [course, setCourse] = useState([])
    // console.log(course)
    const PP = ' https://boktiar.herokuapp.com/images/';

    useEffect(() => {
        const url = ` https://boktiar.herokuapp.com/review/getallreview`
        fetch(url)
            .then(data => data.json())
            .then(data => setCourse(data))
    }, [])

    ///////////////////////////// DELETE  ADMIN /////////////////////////////////////////////////////
    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    console.log(config)
    const handleDeleteAdmin = async (id) => {
        try {
            const res = await axios.delete(` https://boktiar.herokuapp.com/review/delete/${id}`, config)
            res && Swal.fire({
                icon: 'success',
                text: 'review deleted successfully'
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Sidebar />
            <div className={classes.adminDash}>
                <div className={classes.titleContainer}>
                    <h2 className={classes.title}>Welcome Admin!</h2>
                    <strong className={classes.firstTitle}>Dashboard / <span className="text-muted fw-bold">mange reviews</span></strong>

                    {/* numbers card */}
                    <div className={classes.adDash}>

                        {/* start students table */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className={classes.tableWrapprer}>
                                    <p className={classes.starTitle}>Users Review</p>
                                    <table className="table border">
                                        <thead>
                                            <tr className="text-center">
                                                <th className={classes.thead} scope="col">NAME</th>
                                                <th className={classes.thead} scope="col">POSITION</th>
                                                <th className={classes.thead} scope="col">PHOTO</th>
                                                <th className={classes.thead} scope="col">FACEBOOK</th>
                                                <th className={classes.thead} scope="col">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        {
                                            course.map(item => (
                                                <tbody className={classes.tbody} key={item._id}>
                                                    <tr className={classes.trow}>
                                                        <td data-title="NAME" className={classes.tdata}>{item.name}</td>
                                                        <td data-title="POSITION" className={classes.tdata}>
                                                            {item.rank}
                                                        </td>
                                                        <td data-title="PHOTO" className={classes.tdata}>
                                                            <img src={item.photo ? PP + item.photo : null} alt="user-img" className={classes.teacherImg} />
                                                        </td>
                                                        <td data-title="FACEBOOK" className={classes.tdata}>{item.facebook}</td>
                                                        <td data-title="ACTIONS" className={classes.tdata}>
                                                            <div className={classes.action}>
                                                                <button className={classes.btnDelete}
                                                                    onClick={() => handleDeleteAdmin(item._id)}>
                                                                    <i className="fa-solid fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewManage
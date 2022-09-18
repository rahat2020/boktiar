import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './AdminDash.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AdminDash = () => {
    const [course, setCourse] = useState([])
    const [file, setFile] = useState([])

    // const PP = 'http:localhost:5000/images';

    useEffect(() => {
        const url = ` https://boktiar.herokuapp.com/auth/admin`
        fetch(url)
            .then(data => data.json())
            .then(data => setCourse(data))
    }, [])

    // FORM SUBMIT
    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const adminobj = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            secretCode: e.target.secretCode.value,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            adminobj.photo = filename;

            try {
                await axios.post(" https://boktiar.herokuapp.com/auth/upload", data);
            } catch (err) {
                console.log(err, 'file img submit failed');
            }
        }

        try {
            const res = await axios.post(" https://boktiar.herokuapp.com/auth/register", adminobj, config)
            res.data && Swal.fire({
                icon: 'success',
                title: 'Admin Added Successfully',
                // text: 'To see go student view',
            })
        } catch (err) {
            console.log(err, 'admin upload failed')
        }
    }

    const imgportantmsg = () => {
        alert('remmeber this secret code for forgot password')
    }


    ///////////////////////////// DELETE  ADMIN /////////////////////////////////////////////////////
    const handleDeleteAdmin = async (id) => {
        try {
            const res = await axios.delete(` https://boktiar.herokuapp.com/auth/delete/${id}`, config)
            res && Swal.fire({
                icon: 'success',
                text: 'User deleted successfully'
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
                    <strong className={classes.firstTitle}>Dashboard / <span className="text-muted fw-bold">Admin dashboard</span></strong>

                    {/* numbers card */}
                    <div className={classes.adDash}>
                        <div className={classes.fCount}>
                            <div className={classes.fcontainer} id={classes.students}>
                                <div className={classes.fData}>
                                    <div className={classes.Stuiconwrapper}>
                                        <i className="fa-solid fa-user-graduate" id={classes.graduate}></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">5250</h2>
                                        <span className="text-dark ">Blogs</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.awards}>
                                <div className={classes.fData}>
                                    <div className={classes.Awrdsiconwrapper}>
                                        <i className="fa-solid fa-address-book"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">50+</h2>
                                        <span className="text-dark">Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.department}>
                                <div className={classes.fData}>
                                    <div className={classes.Depticonwrapper}>
                                        <i className="fa-solid fa-building"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold"> 30+</h2>
                                        <span className="text-dark">Client</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.fcontainer} id={classes.revenue}>
                                <div className={classes.fData}>
                                    <div className={classes.Revniconwrapper}>
                                        <i className="fa-solid fa-file"></i>
                                    </div>
                                    <div className={classes.textwrapper}>
                                        <h2 className="text-dark fw-bold">{course.length}</h2>
                                        <span className="text-dark">Total Admin</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* start students table */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className={classes.tableWrapprer}>
                                    <p className={classes.starTitle}>Users</p>
                                    <table className="table border">
                                        <thead>
                                            <tr className="text-center">
                                                <th className={classes.thead} scope="col">ID</th>
                                                <th className={classes.thead} scope="col">NAME</th>
                                                <th className={classes.thead} scope="col">EMAIL</th>
                                                <th className={classes.thead} scope="col">SECREET CODE</th>
                                                <th className={classes.thead} scope="col">PASS</th>
                                                <th className={classes.thead} scope="col">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        {
                                            course.map(item => (
                                                <tbody className={classes.tbody} key={item._id}>
                                                    <tr className={classes.trow}>
                                                        <td data-title="ID" className={classes.tdata}>{item._id}</td>
                                                        <td data-title="NAME" className={classes.tdata}>
                                                            {/* <img src={PP + item?.photo} alt="admin" className={classes.teacherImg} /> */}
                                                            {item.name}
                                                        </td>
                                                        <td data-title="EMAIL" className={classes.tdata}>{item.email}</td>
                                                        <td data-title="SECRET CODE" className={classes.tdata}>{item.secretCode}</td>
                                                        <td data-title="PASS" className={classes.tdata}>ignanna</td>
                                                        <td data-title="ACTIONS" className={classes.tdata}>
                                                            <div className={classes.action}>
                                                                <Link to={`/user/${item._id}`}>
                                                                    <button className={classes.btnEdit}><i className="fa-solid fa-pen"></i></button>
                                                                </Link>
                                                                <button className={classes.btnDelete} onClick={() => handleDeleteAdmin(item._id)}><i className="fa-solid fa-trash"></i></button>
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

                        {/* ADD ADMIN */}
                        <div className={classes.TeacherAdd}>

                            {/* Teacher add forms */}
                            <div className="mt-3">
                                <div className={classes.Tadd}>
                                    {/* basic details */}
                                    <>
                                        <div className={classes.bdtails}>
                                            <h3>User Details</h3>
                                            <div className={classes.line} />
                                        </div>
                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail4" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="inputEmail4" name="username" placeholder="name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword4" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="inputPassword4" name="email" placeholder="email" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                                <input type="text" className="form-control" id="inputPassword4" name="password" placeholder="password" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputCity" className="form-label">Secret Code</label>
                                                <input type="text" className="form-control" id="inputCity" name="secretCode" placeholder="secret code" onClick={imgportantmsg} />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="inputZip" className="form-label">Admin Image</label>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" />
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


                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './AdminDash.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AdminDash = () => {
    const [course, setCourse] = useState([])
    console.log('course', course)

    useEffect(() => {
        const url = ` https://boktiar-server.vercel.app/auth/admin`
        fetch(url)
            .then(data => data.json())
            .then(data => setCourse(data))
    }, [])

    // FORM SUBMIT
    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const adminobj = {
    //         username: e.target.username.value,
    //         email: e.target.email.value,
    //         password: e.target.password.value,
    //         secretCode: e.target.secretCode.value,
    //     }
    //     if (file) {
    //         const data = new FormData();
    //         const filename = Date.now() + file.name;
    //         data.append("name", filename);
    //         data.append("file", file);
    //         adminobj.photo = filename;

    //         try {
    //             await axios.post(" https://boktiar-server.vercel.app/auth/upload", data);
    //         } catch (err) {
    //             console.log(err, 'file img submit failed');
    //         }
    //     }

    //     try {
    //         const res = await axios.post(" https://boktiar-server.vercel.app/auth/register", adminobj, config)
    //         res.data && Swal.fire({
    //             icon: 'success',
    //             title: 'Admin Added Successfully',
    //         })
    //     } catch (err) {
    //         console.log(err, 'admin upload failed')
    //     }
    // }

    const imgportantmsg = () => {
        alert('remmeber this secret code for forgot password')
    }


    ///////////////////////////// DELETE  ADMIN /////////////////////////////////////////////////////
    const handleDeleteAdmin = async (id) => {
        try {
            const res = await axios.delete(` https://boktiar-server.vercel.app/auth/delete/${id}`, config)
            res && Swal.fire({
                icon: 'success',
                text: 'User deleted successfully'
            })
        } catch (err) {
            console.log(err)
        }
    }

    // ADD NEW USER
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState('')
    const [secretCode, setSecretCode] = useState('')
    const [photo, setPhotos] = useState('')
    const handleAddUser = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData()
            data.append('file', photo)
            data.append('upload_preset', 'upload')
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data
            const object = {
                name,
                email,
                pass,
                isAdmin,
                secretCode,
                photo: url
            }
            const res = await axios.post('https://boktiar-server.vercel.app/auth/register', object, config)
            res && Swal.fire({
                icon: 'success',
                text: 'User created'
            })
        } catch (err) {
            console.log(err)
            err && Swal.fire({
                icon: 'error',
                text: 'User creation failed'
            })
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
                                                <th className={classes.thead} scope="col">S/N</th>
                                                <th className={classes.thead} scope="col">ID</th>
                                                <th className={classes.thead} scope="col">NAME</th>
                                                <th className={classes.thead} scope="col">EMAIL</th>
                                                <th className={classes.thead} scope="col">IMAGE</th>
                                                <th className={classes.thead} scope="col">ROLE</th>
                                                <th className={classes.thead} scope="col">SECREET CODE</th>
                                                <th className={classes.thead} scope="col">PASS</th>
                                                <th className={classes.thead} scope="col">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        {
                                            course.map((item, index) => (
                                                <tbody className={classes.tbody} key={item._id}>
                                                    <tr className={classes.trow}>
                                                        <td data-title="ID" className={classes.tdata}>{index + 1}</td>
                                                        <td data-title="ID" className={classes.tdata}>{item._id}</td>
                                                        <td data-title="NAME" className={classes.tdata}>
                                                            {/* <img src={PP + item?.photo} alt="admin" className={classes.teacherImg} /> */}
                                                            {item.name}
                                                        </td>
                                                        <td data-title="EMAIL" className={classes.tdata}>{item?.email}</td>
                                                        <td data-title="EMAIL" className={classes.tdata}>
                                                            <img src={item?.photo} alt={item?.name}
                                                                style={{
                                                                    width: '3rem',
                                                                    height: '3rem',
                                                                    objectFit: 'contain',
                                                                    borderRadius: '50%'
                                                                }}
                                                            />
                                                        </td>
                                                        <td data-title="SECRET CODE" className={classes.tdata}>{item.secretCode}</td>
                                                        <td data-title="SECRET CODE" className={classes.tdata}>{item?.isAdmin === true ? 'admin' : 'user'}</td>
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
                                            <h3 className="text-center">Add User</h3>
                                            <div className={classes.line} />
                                        </div>
                                        <form className="row g-3">
                                            <div className="col-md-4">
                                                <label htmlFor="inputEmail4" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="inputEmail4" placeholder="name"
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputPassword4" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="inputPassword4" placeholder="email"
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                                <input type="text" className="form-control" id="inputPassword4" placeholder="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="inputState" className="form-label">Role</label>
                                                <select id="inputState" className="form-select form-control"
                                                    onChange={(e) => setIsAdmin(e.target.value)}>
                                                    <option selected>Choose user role</option>
                                                    <option value="true">Admin</option>
                                                    <option value="false">User</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputCity" className="form-label">Secret Code</label>
                                                <input type="text" className="form-control" id="inputCity" placeholder="secret code"
                                                    onClick={imgportantmsg} onChange={(e) => setSecretCode(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputZip" className="form-label">Admin Image</label>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <input type="file" onChange={(e) => setPhotos(e.target.files[0])} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <button type="submit" className="btn btn-warning text-white fw-bold" onClick={handleAddUser}>Add</button>
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
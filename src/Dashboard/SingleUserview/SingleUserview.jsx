import { useState, useEffect, useContext } from "react";
// import Sidebar from '../../Sidebar/Sidebar';
import classes from './SingleUserview.module.css';
// import user from '../../../img/user.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../Context/AuthContext";

const SingleUserview = () => {
    const [singlePost, setsinglePost] = useState([])
    // console.log('single post', singlePost)
    const { id } = useParams()
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(` https://boktiar-server.vercel.app/auth/user/${id}`)
            setsinglePost(res.data)
            // setPost(res)

        }
        getPost()
    }, [id])


    // UPDATE POST
    const { user } = useContext(AuthContext)
    const config = {
        headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
    }
    const [updated, setUpdated] = useState(false)
    const [name, setUserName] = useState(singlePost?.name || "")
    const [email, setEmail] = useState(singlePost?.email || "")
    const [pass, setPassword] = useState(singlePost?.pass || "")
    const [secretCode, setsecretCode] = useState(singlePost?.secretCode || "")
    const [photo, setPhoto] = useState(singlePost?.photo || "")
    // console.log(user._id)
    const navigate = useNavigate();
    const handleUpdate = async (_id) => {
        if (!photo) {
            const postObj = {
                userId: singlePost?._id,
                name: name || singlePost?.name || "",
                email: email || singlePost?.email || "",
                photo: singlePost?.photo || "",
                pass: pass || singlePost?.pass || "",
                secretCode: secretCode || singlePost?.secretCode || "",
            }
            console.log(postObj)
            try {
                const res = await axios.put(` https://boktiar-server.vercel.app/auth/update/${singlePost._id}`, postObj, config)
                res && Swal.fire({
                    icon: 'success',
                    title: 'User updated Successfully',
                })
                // console.log(res)

            } catch (err) {
                console.log(err)
                err && Swal.fire({
                    icon: 'error',
                    title: `${err?.response?.data}`,
                })
            }
        } else if (photo) {
            const data = new FormData()
            data.append('file', photo)
            data.append('upload_preset', 'upload')
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/rahatdev1020/image/upload", data)
            const { url } = uploadRes.data
            const postObj = {
                userId: singlePost?._id,
                name: name || singlePost?.name || "",
                email: email || singlePost?.email || "",
                photo: url || singlePost?.photo || "",
                pass: pass || singlePost?.pass || "",
                secretCode: secretCode || singlePost?.secretCode || "",
            }
            try {
                const res = await axios.put(` https://boktiar-server.vercel.app/auth/update/${singlePost._id}`, postObj, config)
                res && Swal.fire({
                    icon: 'success',
                    title: 'User updated Successfully',
                })

            } catch (err) {
                console.log(err)
            }
        }

    }

    const pathname = window.location.pathname

    return (
        <>
            <Sidebar />
            <div className={classes.teacherView}>
                <div className="colLeft">
                    <h2 className={classes.title}>User View`</h2>
                    <strong className={classes.firstTitle}>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to={pathname} >{pathname}</Link>
                    </strong>
                </div>

                {/* about student */}
                <div className={classes.tView}>
                    <div className={classes.posthead}>
                        <h3 className={classes.abtme}>User Details</h3>
                        {

                            updated ? <button className={classes.btnEdit} onClick={() => setUpdated(false)}>not edit</button>
                                :
                                <button className={classes.btnEdit} onClick={() => setUpdated(true)}><i className="fa-solid fa-pen"></i></button>


                        }
                    </div>
                    <div className={classes.biodata}>
                        {/* <div className={classes.imgConatiner}>
                            <img src={singlePost ? pic + singlePost.photo : "not found"} alt="img" className={classes.myImg} />
                        </div> */}
                        <div className={classes.mydata}>
                            <div className={updated ? `${classes.increasegap}` : `${classes.colLeft}`}>
                                <span>Name:</span>
                                <span>Email:</span>
                                <span>Password:</span>
                                <span>Secret Code</span>
                                <span>Image</span>
                            </div>
                            <div className={updated ? `${classes.reucegap}` : `${classes.colRight}`}>
                                {
                                    updated ?
                                        <input type="text" className={classes.name} autoFocus defaultValue={singlePost.name}
                                            onChange={(e) => setUserName(e.target.value)} />
                                        :
                                        <span>{singlePost.name}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.email} autoFocus
                                            defaultValue={singlePost.email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        :
                                        <span>{singlePost.email}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.pass} autoFocus
                                            defaultValue={singlePost.pass}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        :
                                        <span>{singlePost.pass}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.secretCode} autoFocus
                                            defaultValue={singlePost.secretCode}
                                            onChange={(e) => setsecretCode(e.target.value)} />
                                        :
                                        <span>{singlePost.secretCode}</span>
                                }
                                {
                                    updated ?
                                        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="form-control" />
                                        :
                                        <img src={singlePost?.photo} alt={singlePost?.name}
                                            style={{ width: '3rem', height: '3rem', objectFit: 'contain', borderRadius: '30px' }} />
                                }
                            </div>
                        </div>
                    </div>

                    <hr />
                    {
                        updated ? <button className={classes.btnEdit} onClick={handleUpdate}>Update</button> : ""
                    }

                </div>
            </div>
        </>
    )
}

export default SingleUserview;
import { useState, useEffect, useContext } from "react";
// import Sidebar from '../../Sidebar/Sidebar';
import classes from './SingleUserview.module.css';
// import user from '../../../img/user.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../Context/AuthContext";

const SingleUserview = () => {
    const [singlePost, setsinglePost] = useState([])
    // console.log('single post', singlePost._id)
    // const [post, setPost] = useState({})
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(` https://boktiar.herokuapp.com/auth/user/${id}`)
            setsinglePost(res.data)
            // setPost(res)

        }
        getPost()
    }, [id])


    // UPDATE POST
    const [updated, setUpdated] = useState(false)
    const [name, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPassword] = useState("")
    const [secretCode, setsecretCode] = useState("")
    const { user,dispatch } = useContext(AuthContext)
    // console.log(user._id)
    const navigate = useNavigate();
    const handleUpdate = async (_id) => {
        const postObj = {
            userId: user._id,
            name,
            email,
            pass,
            secretCode,
        }
        console.log(postObj)
        try {
            const res = await axios.put(` https://boktiar.herokuapp.com/auth/update/${singlePost._id}`, postObj)
            res && Swal.fire({
                icon: 'success',
                title: 'User updated Successfully',
            })
            console.log(res)
            dispatch({ type: "LOGOUT"})
            navigate('/login')
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Sidebar />
            <div className={classes.teacherView}>
                <div className="colLeft">
                    <h2 className={classes.title}>User View`</h2>
                    <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>single user</span></strong>
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
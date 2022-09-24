import { useState, useEffect } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import classes from './PostView.module.css';
// import user from '../../../img/user.png';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

const StudentView = () => {
    const pic = " https://boktiar.herokuapp.com/images/";
    const [singlePost, setsinglePost] = useState([])
    // console.log('single post', singlePost.photo)
    // const [post, setPost] = useState({})
    const { _id } = useParams()

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(` https://boktiar.herokuapp.com/post/singlePost/${_id}`)
            setsinglePost(res.data)
            // setPost(res)
           
        }
        getPost()
    }, [_id])

    // const postDetails = singlePost.find(item => item?._id === _id)
    // console.log(postDetails)


    // UPDATE POST
    const [updated, setUpdated] = useState(false)
    const [name, setName] = useState("")
    const [modalId, setModalId] = useState("")
    const [type, setType] = useState("")
    const [link, setLink] = useState("")
    const [gitHubClient, setGitHubClient] = useState("")
    const [gitHubServer, setGitHubServer] = useState("")
    const [technologies, setTechnologies] = useState("")
    const [details, setDetails] = useState("")

    const config = {
        headers: {token: `Bearer ${JSON.parse(localStorage.getItem('token'))}`}
    }
    console.log(config)
    const handleUpdate = async () => {
        const postObj = {
            name,
            modalId,
            photo:singlePost.photo,
            type,
            link,
            gitHubClient,
            gitHubServer,
            technologies,
            details,
        }
        console.log(postObj)
        try {
            const res = await axios.put(` https://boktiar.herokuapp.com/post/update/${singlePost._id}`,postObj, config)
            res && Swal.fire({
                icon: 'success',
                title: 'Post updated Successfully',
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Sidebar />
            <div className={classes.teacherView}>
                <div className="colLeft">
                    <h2 className={classes.title}>Single Post</h2>
                    <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>single post</span></strong>
                </div>

                {/* about student */}
                <div className={classes.tView}>
                    <div className={classes.posthead}>
                        <h3 className={classes.abtme}>About the post</h3>
                        {

                            updated ? <button className={classes.btnEdit} onClick={() => setUpdated(false)}>not edit</button>
                                :
                                <button className={classes.btnEdit} onClick={() => setUpdated(true)}><i className="fa-solid fa-pen"></i></button>


                        }
                    </div>
                    <div className={classes.biodata}>
                        <div className={classes.imgConatiner}>
                            <img src={singlePost ? singlePost.photo : "not found"} alt="img" className={classes.myImg} />
                        </div>
                        <div className={classes.mydata}>
                            <div className={classes.colLeft}>
                                <span>Name:</span>
                                <span>ModalID:</span>
                                <span>Type:</span>
                                <span>Link</span>
                                <span>Client</span>
                                <span>Server</span>
                                <span>Youtube</span>
                            </div>
                            <div className={classes.colRight}>
                                {
                                    updated ?
                                        <input type="text" className={classes.name} autoFocus defaultValue={singlePost.name}
                                            onChange={(e) => setName(e.target.value)} />
                                        :
                                        <span>{singlePost.name}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.name} autoFocus
                                            defaultValue={singlePost.modalId}
                                            onChange={(e) => setModalId(e.target.value)} />
                                        :
                                        <span>{singlePost.modalId}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.modalId} autoFocus
                                            defaultValue={singlePost.type}
                                            onChange={(e) => setType(e.target.value)} />
                                        :
                                        <span>{singlePost.type}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.modalId} autoFocus
                                            defaultValue={singlePost.link}
                                            onChange={(e) => setLink(e.target.value)} />
                                        :
                                        <span>{singlePost.link}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.modalId} autoFocus
                                            defaultValue={singlePost.gitHubClient}
                                            onChange={(e) => setGitHubClient(e.target.value)} />
                                        :
                                        <span>{singlePost.gitHubClient}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.modalId} autoFocus
                                            defaultValue={singlePost.gitHubServer}
                                            onChange={(e) => setGitHubServer(e.target.value)} />
                                        :
                                        <span>{singlePost.gitHubServer}</span>
                                }
                                {
                                    updated ?
                                        <input type="text" className={classes.modalId} autoFocus
                                            defaultValue={singlePost.gitHubServer}
                                            onChange={(e) => setGitHubServer(e.target.value)} />
                                        :
                                        <span>{singlePost.gitHubServer}</span>
                                }
                                <span>{singlePost.youtube}</span>
                                {/* <span>{postDetails?.name}</span>
                                <span>{postDetails?.modalId}</span>
                                <span>{postDetails?.type}</span>
                                <span>{postDetails?.link}</span> */}
                            </div>
                        </div>
                    </div>
                    <h4 className={classes.abtme}>Post Details</h4>
                    {
                        updated ? <textarea className={classes.details}
                            autoFocus
                            defaultValue={singlePost.details}
                            onChange={(e) => setDetails(e.target.value)}
                        />
                            :

                            <p className="mt-1 text-secondary fs-5">{singlePost.details}</p>
                    }
                    {
                        updated ? <textarea className={classes.technologies}
                            autoFocus
                            defaultValue={singlePost.technologies}
                            onChange={(e) => setTechnologies(e.target.value)}
                        />
                            :

                            <p className="mt-1 text-secondary fs-5"><span className="text-dark fw-bold">Technologies used are:</span> {singlePost.technologies}</p>
                    }


                    {/* social F count */}
                    <div className={classes.fCount}>
                        <div className={classes.fcontainer}>
                            <div className={classes.fData}>
                                <h1 className="text-white fw-bold">2850</h1>
                                <span className="text-white fw-bold fs-5">Visitors</span>
                            </div>
                        </div>
                        <div className={classes.fcontainer}>
                            <div className={classes.fData}>
                                <h1 className="text-white fw-bold">50</h1>
                                <span className="text-white fw-bold fs-5">Clicked</span>
                            </div>
                        </div>
                        <div className={classes.fcontainer}>
                            <div className={classes.fData}>
                                <h1 className="text-white fw-bold">452</h1>
                                <span className="text-white fw-bold fs-5">Watched Video</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {
                        updated ? <button className={classes.btnEdit} onClick={handleUpdate}>Submit form</button> : ""
                    }

                    <div className={classes.Tskill}>
                        {/* <h3>Skills</h3>
                        <h6 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi labore illo expedita temporibus ullam voluptatem nostrum dolore perspiciatis ut?</h6>

                        <div className="skills">
                            <span>Lorem Ipsum is simply</span>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span className="mb-2">Lorem Ipsum is simply</span>
                            <div className="progress mt-2 mb-3">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span>Lorem Ipsum is simply</span>
                            <div className="progress mt-2 mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                            <span>Lorem Ipsum is simply</span>
                            <div className="progress mt-2">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <hr className="mt-5" /> */}

                        {/* settings */}
                        {/* <div className="setting">
                            <h3 className="text-dark">Settings</h3>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Current Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputAddress" className="form-label">New Password</label>
                                    <input type="text" className="form-control" id="inputAddress" />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-warning text-white fw-bold">Sign in</button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentView;
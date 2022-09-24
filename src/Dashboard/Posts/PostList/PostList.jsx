import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './PostList.module.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const StudentList = () => {
  // FETCHING DATA FROM DATABASE
  const [fetchData, setFetchData] = useState([])
  // console.log('post data', fetchData)

  const pic = " https://boktiar.herokuapp.com/images/";

  useEffect(() => {
    const url = ` https://boktiar.herokuapp.com/post/getPost`
    fetch(url)
      .then(res => res.json())
      .then(data => setFetchData(data))
  }, [])

  ///////////////////////////////// DELETE SINGLE POST FROM POST LIST ///////////////////////////////////////
  const config = {
    headers: { token: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
  }
  const handleDeletePost = async (id) => {
    try {
      const res = await axios.delete(` https://boktiar.herokuapp.com/post/delete/${id}`, config)
      console.log(res)
      res && Swal.fire({
        icon: 'success',
        title: 'Post Deleted'
      })
      setTimeout(function () {
        window.location.reload()
      }, [1000])
      return clearTimeout(setTimeout())
    } catch (err) {
      console.log(err)
      err && Swal.fire({
        icon: 'error',
        title: 'post not deleted',
      })
    }
  }


  return (
    <>
      <Sidebar />
      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className={classes.colLeft}>
            <h2 className={classes.title}>Students</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>All Posts</span></strong>
          </div>
          <div className={classes.colRight}>
            <button className={classes.btnDwnld}><i className="fa-solid fa-download me-2"></i>Download</button>
            <Link to="/addpost">
              <button className={classes.plus}><i className="fa-solid fa-plus"></i></button>
            </Link>
          </div>
        </div>


        <div className={classes.Ttable}>
          <div className={classes.entriTitle}>
            <span className="me-2">Show</span>
            <>
              <div className="dropdown">
                <span className=" dropdown-toggle border p-1" type="span" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-2 text-dark">10</span>
                </span>
                <ul className="dropdown-menu border text-light" aria-labelledby="dropdownMenuButton1" id={classes.tblsubMenu}>
                  <li>10</li>
                  <li>25</li>
                  <li>50</li>
                </ul>
              </div>
            </>
            <span className="ms-2">Entries</span>
          </div>

          {/* teacher table */}

          <div className={classes.tableWrapper}>
            <table className=" mt-3 table border">
              <thead>
                <tr className="text-center">
                  <th className={classes.thead} scope="col">NAME</th>
                  <th className={classes.thead} scope="col">MODAL ID</th>
                  <th className={classes.thead} scope="col">TYPE</th>
                  <th className={classes.thead} scope="col">IMG</th>
                  <th className={classes.thead} scope="col">LIVE LINK</th>
                  <th className={classes.thead} scope="col">ALL DETAILS</th>
                  <th className={classes.thead} scope="col">ACTIONS</th>
                </tr>
              </thead>
              {
                fetchData.map((single) => (
                  <tbody className={classes.tbody} key={single._id}>
                    <tr className={classes.trow}>
                      <td data-title="NAME" className={classes.tdata}>
                        {single.name}
                      </td>
                      <td data-title="MODAL ID" className={classes.tdata}>{single.modalId}</td>
                      <td data-title="TYPE" className={classes.tdata}>{single.type}</td>
                      <td data-title="IMG" className={classes.tdata}>
                        <img src={single.photo} alt="post img" className={classes.teacherImg} />
                      </td>
                      <td data-title="LIVE LINK" className={classes.tdata}>{single.link}</td>
                      <td data-title="ALL DETAILS" className={classes.tdata}>
                        <Link to={`/singlepost/${single._id}`}><button className="btn btn-primary">See details</button></Link>
                      </td>
                      <td data-title="ACTIONS" className={classes.tdata}>
                        <div className={classes.action}>
                          <button className={classes.btnEdit}><i className="fa-solid fa-pen"></i></button>
                          <button className={classes.btnDelete} onClick={() => handleDeletePost(single._id)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>

          {/* paginations */}
          <div className="d-flex justify-content-center align-items-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><Link to="/prev" className="page-link text-secondary">Previous</Link></li>
                <li className="page-item"><Link to="/1" className="page-link">1</Link></li>
                <li className="page-item"><Link to="/2" className="page-link text-secondary">Next</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>



      {/* ///////////////////////////////////// SHOW COURSE ENROLLED STUDENTS LIST  ////////////////////////////////// */}

    </>
  )
}

export default StudentList;
import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import classes from './BlogList.module.css';
import { Link } from 'react-router-dom';

const StubjectList = () => {

  return (
    <>
      <Sidebar />
      <div className={classes.teacherList}>
        <div className={classes.teacherTitle}>
          <div className="colLeft">
            <h2 className={classes.title}>Subjects</h2>
            <strong className={classes.firstTitle}>Dashboard / <span className={classes.scndTitle}>Subjects</span></strong>
          </div>
          <div className={classes.colRight}>
            <button className={classes.btnDwnld}><i className="fa-solid fa-download me-2"></i>Download</button>
            <button className={classes.plus}><i className="fa-solid fa-plus"></i></button>
          </div>
        </div>


        <div className={classes.Ttable}>
          <div className={classes.entriTitle}>
            <span className="me-2">Show</span>
            <>
              <div className="dropdown">
                <span className=" dropdown-toggle border p-1" type="span" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="me-2">10</span>
                </span>
                <ul className="dropdown-menu border" aria-labelledby="dropdownMenuButton1" id={classes.tblsubMenu}>
                  <li>10</li>
                  <li>25</li>
                  <li>50</li>
                </ul>
              </div>
            </>
            <span className="ms-2">Entries</span>
          </div>

          {/* subject table */}
          <div className={classes.tableWrapper}>
            <table className=" mt-3 table border">
              <thead>
                <tr className="text-center">
                  <th className={classes.thead} scope="col">ID</th>
                  <th className={classes.thead} scope="col">NAME</th>
                  <th className={classes.thead} scope="col">CLASS</th>
                  <th className={classes.thead} scope="col">ACTION</th>
                </tr>
              </thead>

              <tbody className={classes.tbody}>
                <tr className={classes.trow}>
                  <td data-title="ID" className={classes.tdata}>HJKDH</td>
                  <td data-title="NAME" className={classes.tdata}>Botony</td>
                  <td data-title="CLASS" className={classes.tdata}>10</td>
                  <td data-title="ACTION" className={classes.tdata}>
                    <div className={classes.action}>
                      <button className={classes.btnEdit}><i className="fa-solid fa-pen"></i></button>
                      <button className={classes.btnDelete}><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
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
    </>
  )
}

export default StubjectList;
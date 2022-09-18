import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import './Forgotpass.css';

const Forgotpass = () => {
  const [secretCode, setSecretCode] = useState('')
  const [hide, setHide] = useState(false)
  const [password, setPass] = useState([])
  console.log(password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const forgotobj = {
      secretCode,
    }

    try {
      const result = await axios.post(" https://boktiar.herokuapp.com/auth/forgotpass", forgotobj)
      console.log(result)
      setHide(!hide)
      setPass(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Secret Code</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter code"
                  onChange={(event) => setSecretCode(event.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1">User details</label>
            {
              hide &&
              <>
                <p>{password}</p>
              </>
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Forgotpass
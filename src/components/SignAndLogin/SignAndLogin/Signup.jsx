import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import sign from '../../../img/login.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import Particles from 'react-tsparticles';

const Login = () => {
  const [name, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")
  const [secretCode, setsecretCode] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminobj = {
      name,
      email,
      pass,
      secretCode
    }
    console.log(adminobj)

    try {
      const res = await axios.post(" https://boktiar.herokuapp.com/auth/register", adminobj);
      console.log(res)
      res.data && Swal.fire({
        icon: 'success',
        title: 'User Added Successfully',
        text: 'Visit the site and do comment',
      })
      navigate("/login")
    } catch (err) {
      console.log(err, 'form submit failed');
    }
  }

  // react particles
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              //  value: "#fff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar />
      <div className="login">
        <div className="login-contianer container mt-5 pt-5">
          <div className="left">
            <h2 className="login-title">Sign up</h2>

            <form className="form" >
              <div className="form-group">
                <label htmlFor="username1">Name</label>
                <input type="text" className="form-control" id="username1" aria-describedby="emailHelp" placeholder="enter name"
                  onChange={(e) => setUserName(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="email"
                  onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input type="password" className="form-control" id="pass" name="password" placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="form-group">
                <label htmlFor="sec">Secret Code</label>
                <input type="text" className="form-control" id="sec" aria-describedby="emailHelp" name="secretCode" placeholder="enter secret code"
                  onChange={(e) => setsecretCode(e.target.value)} required/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn-login" onClick={handleSubmit}>Sign up</button>
              </div>
              <div className="d-flex justify-content-start align-items-start flex-column">
                <small>Already have an account? <Link to="/login">sign in</Link></small>
              </div>
            </form>
          </div>

          <div className="right">
            <div className="img-container">
              <img src={sign} alt="" className="sign-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
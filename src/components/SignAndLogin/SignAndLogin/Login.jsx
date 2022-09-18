import React, {useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import sign from '../../../img/sign.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext } from 'react';
// import { UserContext } from '../../../App';
import Particles from 'react-tsparticles';
import { AuthContext } from '../../../Context/AuthContext';



const Login = () => {
  const [name, setUserName] = useState("")
  const [pass, setPassword] = useState("")
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser)
  const { dispatch } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: "/dashboard" } };
  // console.log(from)


  // SUBMIT FORM DATA
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginobj = {
      name,
      pass,
    }
    // console.log(loginobj)
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post(" https://boktiar.herokuapp.com/auth/login", loginobj)
      // console.log(res)
      res.data && Swal.fire({
        icon: 'success',
        title: 'Logged in Successfully',
        text: 'Thank you for logged in',
      })
      // setLoggedInUser(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem("token", JSON.stringify(res.data.access_token))
      // navigate("/dash");
      navigate(from.pathname);
      res && window.location.reload();
    } catch (err) {
      err && Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Give valid details',
      })
      console.log(err)
    }
  }

  // react particles
  const particlesInit = (main) => {
    // console.log(main);

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
            <h2 className="login-title">Login</h2>
            <form className="form" >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter username"
                  onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn-login" onClick={handleSubmit}>Login</button>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <small>Didn't have an account? <Link to="/signup">sign up</Link></small>
                <small> <Link to="/forgotpass">forgot your password?</Link></small>
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
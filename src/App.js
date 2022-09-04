import { createContext, useContext, useState } from "react";
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import AllBlogs from "./components/Allblogs/AllBlogs";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Dashbaord from "./Dashboard/Dashbaord";
import PostAdd from './Dashboard/Posts/PostAdd/PostAdd.jsx';
import PostList from './Dashboard/Posts/PostList/PostList.jsx';
import PostView from './Dashboard/Posts/PostView/PostView.jsx';
import PostEdit from './Dashboard/Posts/PostEdit/PostEdit.jsx';
import AdminDash from "./Dashboard/AdminDash/AdminDash";
import Login from "./components/SignAndLogin/SignAndLogin/Login";
import Signup from "./components/SignAndLogin/SignAndLogin/Signup";
import PrivateRoute from "./components/SignAndLogin/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import AddReview from "./Dashboard/AddReview/AddReview";
import Forgotpass from "./components/SignAndLogin/Forgotpass/Forgotpass";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/ContactMe";
import jwt_decode from "jwt-decode";
import Gototop from "./components/Gototop/Gototop";
import { AuthContext } from "./Context/AuthContext";
import { ThemeContext } from "./Context/Context";

export const UserContext = createContext()

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [loggedInUser, setLoggedInUser] = useState({})
  const { user } = useContext(AuthContext)

  const authToken = JSON.parse(localStorage.getItem('token'))
  const decoded = jwt_decode(authToken)

  return (
    <div className="app" style={{ backgroundColor: darkMode ? "#222 !important" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <MessengerCustomerChat
          pageId="101340032265864"
          appId="453100279489200"
        /> 
        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/allProjects" element={<Projects />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contactme" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpass" element={<Forgotpass />} />

            {/* DASHBOARD */}

            <Route path="/dashboard" element=
              {
                user ?
                  <Dashbaord />
                  :
                  <PrivateRoute>
                    <Dashbaord />
                  </PrivateRoute>
              }
            />

            <Route path="/admin" element={
              decoded.isAdmin === true ?
                <AdminDash />
                :
                <PrivateRoute>
                  <Home />
                </PrivateRoute>}
            />
            <Route path="/allposts" element={
              decoded.isAdmin === true ?
                <PostList />
                :
                <PrivateRoute>
                  <Home />
                </PrivateRoute>}
            />
            <Route path="/addpost" element={
              decoded.isAdmin === true ?
                <PostAdd />
                :
                <PrivateRoute>
                  <Home />
                </PrivateRoute>}
            />
            <Route path="/singlepost/:_id" element={
              decoded.isAdmin === true ?
                <PostView />
                :
                <PrivateRoute>
                  <Home />
                </PrivateRoute>}
            />
            <Route path="/addreview" element={
              user ?
                <AddReview />
                :
                <PrivateRoute>
                  <AddReview />
                </PrivateRoute>}
            />
            <Route path="/postedit" element={
              decoded.isAdmin === true ?
                <PostEdit />
                :
                <PrivateRoute>
                  <Home />
                </PrivateRoute>}
            />
          </Routes>
          <Gototop />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

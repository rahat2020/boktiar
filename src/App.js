import { useContext, useState } from "react";
import './App.css';
import {
  Routes,
  Route,
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
// import PrivateRoute from "./components/SignAndLogin/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";
import AddReview from "./Dashboard/AddReview/AddReview";
import Forgotpass from "./components/SignAndLogin/Forgotpass/Forgotpass";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/ContactMe";

import Gototop from "./components/Gototop/Gototop";
import { AuthContext } from "./Context/AuthContext";
// import { ThemeContext } from "./Context/Context";

// export const UserContext = createContext()

function App() {

  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  // console.log(darkMode)
  // const [loggedInUser, setLoggedInUser] = useState({})
  const { user, decoded } = useContext(AuthContext)
  // console.log(decoded)


  return (
    <div className="app">
      <MessengerCustomerChat
        pageId="101340032265864"
        appId="453100279489200"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProjects" element={<Projects />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<Forgotpass />} />

        {/* <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/admin" element={<AdminDash />} />
            <Route path="/allposts" element={<Forgotpass />} />
            <Route path="/addpost" element={<PostAdd />} />
            <Route path="/singlepost/:_id" element={<PostView />} />
            <Route path="/addreview" element={<AddReview />} />
            <Route path="/postedit" element={<PostEdit />} /> */}

        {/* DASHBOARD */}

        <Route path="/dashboard" element=
          {
            user ?
              <Dashbaord />
              :
              <Login />
          }
        />

        <Route path="/admin" element={
          decoded.isAdmin === true ?
            <AdminDash />
            :
            <Home />
        }
        />
        <Route path="/allposts" element={
          decoded.isAdmin === true ?
            <PostList />
            :
            <Home />
        }
        />
        <Route path="/addpost" element={
          decoded.isAdmin === true ?
            <PostAdd />
            :
            <Home />
        }
        />
        <Route path="/singlepost/:_id" element={
          decoded.isAdmin === true ?
            <PostView />
            :
            <Home />
        }
        />
        <Route path="/addreview" element={
          user ?
            <AddReview />
            :
            <Login />
        }
        />
        <Route path="/postedit" element={
          decoded.isAdmin === true ?
            <PostEdit />
            :
            <Home />
        }
        />
      </Routes>
      <Gototop />
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;


// https://rahat-8dac0.web.app/
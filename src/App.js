import { useContext } from "react";
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
import ReviewManage from "./Dashboard/ReviewManage/ReviewManage";
import Forgotpass from "./components/SignAndLogin/Forgotpass/Forgotpass";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/ContactMe";
import Gototop from "./components/Gototop/Gototop";
import { AuthContext } from "./Context/AuthContext";
import SingleUserview from "./Dashboard/SingleUserview/SingleUserview";


function App() {

  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  // console.log(darkMode)
  // const [loggedInUser, setLoggedInUser] = useState({})

  const { user, decodedTkn } = useContext(AuthContext)
  // console.log('decodedTkn',decodedTkn)




  return (
    <div className="app">
      {/* <MessengerCustomerChat
        pageId="101340032265864"
        appId="453100279489200"
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProjects" element={<Projects />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<Forgotpass />} />

        <Route path="/dashboard" element=
          {
            user ?
              <Dashbaord />
              :
              <Login />
          }
        />
        <Route path="/addreview" element={
          user ?
            <AddReview />
            :
            <Login />
        }
        />
        <Route path="/user/:id" element={
          user ?
            <SingleUserview />
            :
            <Home />
        }
        />

        <Route path="/admin" element={
          decodedTkn?.isAdmin === true ?
            <AdminDash />
            :
            <Home />
        }
        />

        <Route path="/allposts" element={
          decodedTkn.isAdmin === true ?
            <PostList />
            :
            <Home />
        }
        />
        <Route path="/addpost" element={
          decodedTkn.isAdmin === true ?
            <PostAdd />
            :
            <Home />
        }
        />
        <Route path="/singlepost/:_id" element={
          decodedTkn.isAdmin === true ?
            <PostView />
            :
            <Home />
        }
        />

        <Route path="/postedit" element={
          decodedTkn.isAdmin === true ?
            <PostEdit />
            :
            <Home />
        }
        />
        <Route path="/mangeReview" element={
          decodedTkn.isAdmin === true ?
            <ReviewManage />
            :
            <Home />
        }
        />

      </Routes>
      <Gototop />
    </div >
  );
}

export default App;


// https://rahat-8dac0.web.app/
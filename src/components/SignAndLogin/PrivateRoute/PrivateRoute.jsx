import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';



const PrivateRoute = ({children}) => {

    const [loggedInUser] = useContext(UserContext);
    // console.log('logged in user data',loggedInUser)
    const location = useLocation();
    // console.log(location)
    
    return (
        // loggedInUser ? <Navigate to="/login" /> : children  
        loggedInUser ? <Navigate to="/login" state={{ from: location }} replace /> : children
            
    );
};

export default PrivateRoute;
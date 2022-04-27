import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../images/logos/Group 1329.png';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
      <div className="flex justify-between mx-10 items-center my-5">
        <div>
          <img className="h-[60px]" src={logo} alt="" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/donation">Donation</NavLink>
            </li> */}
            <li>
              <NavLink to="/event">Event</NavLink>
            </li>
            {/* <li>
              <NavLink to="/blog">Blog</NavLink>
            </li> */}
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              {user?.uid ? (
                <>
                  <button onClick={()=>signOut(auth)}>Logout</button>
                  <span className='ml-4'>{user.displayName}</span>
                </>
              ) : (
                <NavLink to="/login">login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;
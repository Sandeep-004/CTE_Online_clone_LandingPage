import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/CTEONLINE.png";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Navbar = () => {
    return (
        <>
            <div className="main-container">
          
            {/* <!-- Image and text --> */}
                <nav class="navbar">
                    <a class="navbar-brand" href="https://www.google.com">
                     <img className="img_logo" src={logo} alt="logoImg" /> 
                     <span><SearchIcon className="search_icon"/></span>
                     <span><NotificationsIcon className="bell_icon"/></span>
                     <span><KeyboardArrowDownIcon className="arrow_icon"/></span>

                     <div className="user">
                        <img className="user_Img"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny2" />              
                    </div>
                    
                    </a>
                </nav>
            
            </div>
        </>
    )
}

export default Navbar;

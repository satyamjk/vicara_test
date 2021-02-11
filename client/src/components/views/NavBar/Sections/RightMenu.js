/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
 <div>
<Link
to = "/login"
>
<button
    style = {{marginRight:'5px'}}
    className = "s-btn s-btn__filled">
    Log In 
</button>
</Link>

<Link
      to="/register"
      >
      <button
          style = {{marginRight:'100px'}}
          className = "s-btn s-btn__primary">
          Sign Up
      </button>
      </Link>

      </div>
    )
  } else {
    return (


      <Link
      onClick={logoutHandler}
      >
      <button
          className = "s-btn s-btn__filled">
          LogOut
      </button>
      </Link>
    )
  }
}

export default withRouter(RightMenu);


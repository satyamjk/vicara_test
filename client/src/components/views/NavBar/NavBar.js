import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/Logo.svg';
import './Sections/Header.scss';
import {ReactComponent as Search} from '../../../assets/Search.svg';
import './Sections/Header.scss'


function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className=" navbar fixed-top navbar-expand-lg navbar-light bs-md" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <Link className='navbar-brand' to='/' >
                <Logo style={{height:'50px', width:'180px' }}  />
      </Link>
      <div className="s-navigation">
            <Link to='/' className="s-navigation--item n-sel">About</Link>
            <Link to='/' className="s-navigation--item n-sel">Products</Link>
            <Link to='/' className="s-navigation--item n-sel">For Teams</Link>
      </div>


      <form id="search" 
      className="grid--cell fl-grow1 searchbar px12 js-searchbar">
      <div className="ps-relative search-frame">
        <input
            className="s-input s-input__search h200 search-box"
            style={{width:'700px'}}
            type="text"
            name='search'
            maxLength="75"
            placeholder='Search...'
        />
        <Search/>
      </div>
      </form>

      <div className="menu__container">

        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}>
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar
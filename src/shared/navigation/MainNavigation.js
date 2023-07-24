import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../components/ui-elements/Backdrop';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
    <>
        {/*This is classic JS, it means if drawerIsOpen [is true] then render <Backdrop/>*/}
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main_navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawerHandler}><span> </span><span> </span><span> </span></button>
            <h1 className="main-navigation__title">
                <Link to="/">Our Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>
    </>
    );
};

export default MainNavigation;
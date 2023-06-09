import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MainNavigation.css'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../components/ui-elements/Backdrop';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };

    return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main_navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}><span> </span><span> </span><span> </span></button>
            <h1 className="main-navigation__title">
                <Link to="/">Our Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>
    </React.Fragment>
    );
};

export default MainNavigation;
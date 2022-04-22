import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

//Navbar component using imported sytledcomponents from navbarelements.
const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/' activeStyle>
            Homepage
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/transactions' activeStyle>
              Transactions
            </NavLink>
            <NavLink to='/Swaps' activeStyle>
              Swaps
            </NavLink>
            <NavLink to='/NFT' activeStyle>
              NFT
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/'>Connect Wallet</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Navbar;
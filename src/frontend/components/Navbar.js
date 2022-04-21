import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


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
            <NavBtnLink to='/signin'>Connect Wallet</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Navbar;
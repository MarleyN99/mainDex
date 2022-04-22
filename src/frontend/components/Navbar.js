import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {  Button, Container } from 'react-bootstrap'

//Navbar component using imported sytledcomponents from navbarelements. Takes in web3 handler and account address for connect button interaction
const Navbar = ({web3Handler, account}) => {
    return (
      <>
        <Nav>
          <NavLink to='/' activestyle>
            Homepage
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/transactions' activestyle>Transactions </NavLink>
            <NavLink to='/Swaps' activestyle>Swaps </NavLink>
            <NavLink to='/NFT' activestyle> NFT </NavLink>
          </NavMenu>
            { account ? (
              
              <NavBtn activestyle>
                {account.slice(0, 5) + '...' + account.slice(38, 42)}
              </NavBtn>
              
          ) : (
            <NavBtn activestyle onClick={web3Handler}>Connect Wallet</NavBtn>
            
          )}
          </Nav>
        
      </>
    );
  };

export default Navbar;
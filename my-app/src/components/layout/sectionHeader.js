import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.jpg';
import styled from 'styled-components';
import { ButtonEcem } from '../parts/button';

export default class Navbar extends Component {
    render() {
        return(
            <NavbarWrapper className="navbar-wrapper">            
                <Link to='/'>
                    <img src={logo} alt='library' className='navbar-logo'/>
                </Link>
                <ul className='navbar-menu'>
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>
                            ecoş
                        </Link>
                    </li>
                    <li className='navbar-item'>
                      <ButtonEcem>
                        ecem
                      </ButtonEcem>
                    </li>
                </ul>
            </NavbarWrapper>
        )
 
    }

}

const NavbarWrapper = styled.nav`
        background-color: red;
            .nav-link{
                color: purple !important;
                font-size: 25px;                
            }
`
;
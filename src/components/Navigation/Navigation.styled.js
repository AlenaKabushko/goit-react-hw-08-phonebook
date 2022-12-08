import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
    padding: 10px;
    color: black;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
    
    &.active {
        color: darkgrey
    }
    &:hover:not(.active){
    color: darkgrey
    }
`
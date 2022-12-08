import Box from 'components/Box';
import { NavLinkStyle } from './AuthNav.styled';

function AuthNav() {
  return (
    <Box as={'div'} gridGap={16} fontSize={20}>
      <NavLinkStyle to="/register">Register</NavLinkStyle>
      <NavLinkStyle to="/login">Log In</NavLinkStyle>
    </Box>
  );
}

export default AuthNav;

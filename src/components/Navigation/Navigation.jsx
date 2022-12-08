import Box from 'components/Box';
import { NavLinkStyle } from './Navigation.styled';
import { useAuth } from '../../hooks/useAuth';

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Box as={'nav'} fontSize={20}>
      <NavLinkStyle to="/">Home</NavLinkStyle>
      {isLoggedIn && <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>}
    </Box>
  );
}

export default Navigation;

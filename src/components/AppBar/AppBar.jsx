import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import Box from 'components/Box';

function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as={'header'}
      m={20}
      justifyContent="space-between"
      borderBottom="2px solid rgb(128 128 128 / 45%)"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}

export default AppBar;

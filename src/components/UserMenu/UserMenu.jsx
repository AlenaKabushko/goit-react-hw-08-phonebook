import { useDispatch } from 'react-redux';
import { LogButtonStyle, LogBox, LogText } from './UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LogBox>
      <LogText>Hello, {user.name}!</LogText>
      <LogButtonStyle type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogButtonStyle>
    </LogBox>
  );
}

export default UserMenu;

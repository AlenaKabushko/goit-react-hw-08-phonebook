import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
} from '../RegistForm/RegistForm.styled';

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelStyle>
        Email
        <InputStyle type="email" name="email" />
      </LabelStyle>
      <LabelStyle>
        Password
        <InputStyle type="password" name="password" />
      </LabelStyle>
      <ButtonStyle type="submit">Log In</ButtonStyle>
    </FormStyle>
  );
}

export default LoginForm;

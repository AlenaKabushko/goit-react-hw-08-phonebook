import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
} from './RegistForm.styled';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(
      form.elements.name.value,
      form.elements.email.value,
      form.elements.password.value
    );
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit} autoComplete="off">
      <LabelStyle>
        Username
        <InputStyle type="text" name="name" placeholder="Avocado" />
      </LabelStyle>
      <LabelStyle>
        Email
        <InputStyle type="email" name="email" placeholder="Avocado.gmail.com" />
      </LabelStyle>
      <LabelStyle>
        Password
        <InputStyle type="password" name="password" placeholder="********" />
      </LabelStyle>
      <ButtonStyle type="submit">Register</ButtonStyle>
    </FormStyle>
  );
}

export default RegisterForm;

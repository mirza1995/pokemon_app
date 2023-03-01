import { useReducer, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { isValidEmail, isValidPassword } from '@utils/validation';
import { LoginSignupResponse } from '@models/LoginSignupResponse';
import { UserError } from '@models/UserError';
import { PrimaryButton } from '@components/PrimaryButton';
import { Input } from '@components/Input/Input';
import usersService from '@services/usersService';

import { ACTIONS } from '@reducers/actions';
import { userErrorReducer } from '@reducers/UserErrorReducer';

type LoginProps = {
  onSuccessfulLogin: (authToken: string) => void;
};

export const Login = ({ onSuccessfulLogin }: LoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, dispatchError] = useReducer(userErrorReducer, {});
  const [loginError, setLoginError] = useState<string>('');

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    dispatchError({ type: ACTIONS.REMOVE, data: {}, errorToRemove: name });
    setEmail(value);
  };

  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    dispatchError({ type: ACTIONS.REMOVE, data: {}, errorToRemove: name });
    setPassword(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setLoginError('');
    if (validate()) {
      const response: LoginSignupResponse = await usersService.loginUser(
        email,
        password
      );
      if (response.error) {
        setLoginError(response.error);
      } else {
        onSuccessfulLogin(response.auth_token);
      }
    }
  };

  const validate = () => {
    const errors: Partial<UserError> = {};

    if (!isValidEmail(email)) {
      errors.email = 'errors.email.invalid';
    }

    if (!isValidPassword(password)) {
      errors.password = 'errors.password.invalid';
    }

    dispatchError({ type: ACTIONS.INIT, data: errors });

    return !Object.keys(errors).length;
  };

  return (
    <div className='modal-default sm:w-[440px] '>
      <h4 className='text-center text-lg font-medium'>
        <FormattedMessage id='login.welcome' />
      </h4>

      <form onSubmit={onSubmit} className='mt-7'>
        <div>
          <Input
            name='email'
            value={email}
            type='text'
            labelId='login.email'
            errorId={errors.email}
            onValueChange={onEmailChange}
          />

          <Input
            name='password'
            value={password}
            type='password'
            labelId='login.password'
            errorId={errors.password}
            onValueChange={onPasswordChange}
          />
        </div>

        {loginError && (
          <div className='mt-5 text-md text-red-500'>{loginError}</div>
        )}

        <div className='mt-5'>
          <PrimaryButton type='submit' textId='login.button' />
        </div>
      </form>
    </div>
  );
};

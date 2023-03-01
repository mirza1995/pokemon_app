import { useReducer, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import usersService from '@services/usersService';
import { LoginSignupResponse } from '@models/LoginSignupResponse';
import { User } from '@models/User';
import { UserError } from '@models/UserError';
import { CreateUserDto } from '@models/CreateUserDto';
import { formatDate } from '@utils/date';
import { isValidEmail, isValidPassword } from '@utils/validation';
import { PrimaryButton } from '@components/PrimaryButton';
import { DatePicker } from '@components/DatePicker';
import { Input } from '@components/Input';

import { ACTIONS } from '@reducers/actions';
import { userErrorReducer } from '@reducers/UserErrorReducer';
import { userReducer } from '@reducers/UserReducer';

type SignupProps = {
  onSuccessfulSignup: () => void;
};

export const Signup = ({ onSuccessfulSignup }: SignupProps) => {
  const [user, dispatchUser] = useReducer(userReducer, {});
  const [errors, dispatchError] = useReducer(userErrorReducer, {});
  const [signupError, setSignupError] = useState<string>('');

  const onValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    dispatchError({ type: ACTIONS.REMOVE, data: {}, errorToRemove: name });
    dispatchUser({ type: ACTIONS.UPDATE, data: { [name]: value } });
  };

  const onBirthDateChange = (newBirthDate: Date) => {
    dispatchUser({ type: ACTIONS.UPDATE, data: { birthDate: newBirthDate } });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignup();
  };

  const handleSignup = async () => {
    setSignupError('');
    if (validate()) {
      const response: LoginSignupResponse = await usersService.createUser(
        getCreateUserDto(user as User)
      );
      if (response.error) {
        setSignupError(response.error);
      } else {
        onSuccessfulSignup();
      }
    }
  };

  const validate = () => {
    const errors: Partial<UserError> = {};

    if (!isValidEmail(user.email)) {
      errors.email = 'errors.email.invalid';
    }

    if (!isValidPassword(user.password)) {
      errors.password = 'errors.password.invalid';
    }

    if (!user.firstName?.length) {
      errors.firstName = 'errors.firstName.invalid';
    }

    if (!user.lastName?.length) {
      errors.lastName = 'errors.lastName.invalid';
    }

    dispatchError({ type: ACTIONS.INIT, data: errors });

    return !Object.keys(errors).length;
  };

  const getCreateUserDto = (user: User): CreateUserDto => {
    return {
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
      date_of_birth: formatDate(user.birthDate)
    };
  };

  return (
    <div className='modal-default md:w-[440px]'>
      <h4 className='text-center text-lg font-medium'>
        <FormattedMessage id='signup.create' />
      </h4>

      <form onSubmit={onSubmit} className='mt-5'>
        <div>
          <div className='flex gap-[10px]'>
            <Input
              name='firstName'
              value={user.firstName || ''}
              type='text'
              labelId='signup.firstName'
              errorId={errors.firstName}
              onValueChange={onValueChange}
            />
            <Input
              name='lastName'
              value={user.lastName || ''}
              type='text'
              labelId='signup.lastName'
              errorId={errors.lastName}
              onValueChange={onValueChange}
            />
          </div>

          <DatePicker
            name='birthDate'
            labelId='signup.birthDate'
            selectedDate={user.birthDate || new Date('12.31.2015')}
            onSelect={onBirthDateChange}
          />

          <Input
            name='email'
            value={user.email || ''}
            type='text'
            labelId='signup.email'
            errorId={errors.email}
            onValueChange={onValueChange}
          />

          <Input
            name='password'
            value={user.password || ''}
            type='password'
            labelId='signup.password'
            errorId={errors.password}
            onValueChange={onValueChange}
          />
        </div>

        {signupError && (
          <div className='mt-5 text-md text-red-500'>{signupError}</div>
        )}

        <div className='mt-5'>
          <PrimaryButton type='submit' textId='signup.button' />
        </div>
      </form>
    </div>
  );
};

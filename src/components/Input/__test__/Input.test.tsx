/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '@components/Input';
import { AppMock } from '@mocks/AppMock';
describe('Input component tests', () => {
  test('should be defined', async () => {
    render(
      <AppMock>
        <Input
          name='email'
          value='test@test.com'
          type='text'
          labelId='login.email'
          errorId=''
          onValueChange={() => {}}
        />
      </AppMock>
    );

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    expect(emailInput).toBeDefined();
    expect(emailInput.value).toBe('test@test.com');
  });

  test('should show error', async () => {
    render(
      <AppMock>
        <Input
          name='email'
          value=''
          type='text'
          labelId='login.email'
          errorId='errors.email.invalid'
          onValueChange={() => {}}
        />
      </AppMock>
    );

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    expect(emailInput).toHaveStyle('border-color: rgb(100 116 139)');

    const errorMessage: HTMLInputElement =
      screen.getByText('Email is not valid');
    expect(errorMessage).toBeDefined();
    expect(errorMessage).toHaveStyle('color: rgb(100 116 139)');
  });
});

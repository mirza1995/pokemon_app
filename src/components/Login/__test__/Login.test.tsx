/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AppMock } from '@mocks/AppMock';
import { Login } from '@components/Login';

const authResponse = { auth_token: 'authToken' };

describe('Login component tests', () => {
  beforeEach(() => {
    render(
      <AppMock>
        <Login onSuccessfulLogin={() => {}} />
      </AppMock>
    );
  });

  test('should be defined', async () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('email');

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  test('should have email value changed', async () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    expect(emailInput.value).toBe('test@test.com');
  });

  test('should have error message shown if email is empty', async () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(submitButton);

    const errorMessage: HTMLInputElement =
      screen.getByText('Email is not valid');

    expect(errorMessage).toBeDefined();
  });

  test('should send login request', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => authResponse
      })
    );

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    const submitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(global.fetch).toBeCalled;
  });
});

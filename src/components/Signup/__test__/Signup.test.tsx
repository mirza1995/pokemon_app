/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, screen } from '@testing-library/react';
import { Signup } from '@components/Signup';
import { AppMock } from '@mocks/AppMock';

jest.mock('@services/usersService', () => {
  return {
    createUser: jest.fn().mockResolvedValue({ error: '' })
  };
});

beforeEach(() => {
  render(
    <AppMock>
      <Signup onSuccessfulSignup={() => {}} />
    </AppMock>
  );
});

describe('Signup component tests', () => {
  test('should display email input', () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    expect(emailInput).toBeDefined();
  });

  test('should display error message if email is invalid', async () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'test' } });

    const submitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(submitButton);

    const errorMessage: HTMLSpanElement =
      screen.getByText('Email is not valid');
    expect(errorMessage).toBeDefined();
  });

  test('should display error message if password is invalid', async () => {
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: 'test' } });

    const submitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(submitButton);

    const errorMessage: HTMLSpanElement = screen.getByText(
      'Password must be six or more characters'
    );
    expect(errorMessage).toBeDefined();
  });

  test('should display error message if firstName and lastName are invalid', async () => {
    const submitButton: HTMLButtonElement = screen.getByRole('button');
    fireEvent.click(submitButton);

    const firstNameErrorMessage: HTMLSpanElement = screen.getByText(
      'First name is required'
    );
    expect(firstNameErrorMessage).toBeDefined();

    const lastNameErrorMessage: HTMLSpanElement = screen.getByText(
      'Last name is required'
    );
    expect(lastNameErrorMessage).toBeDefined();
  });
});

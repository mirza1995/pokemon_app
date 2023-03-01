/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppMock } from '@mocks/AppMock';
import { UserInfo } from '@components/UserInfo';
import store from '@store/store';
import { userActions } from '@store/user-slice';

describe('User info component tests', () => {
  beforeEach(async () => {
    await store.dispatch(
      userActions.init({
        user: {
          id: 1,
          firstName: 'Name',
          lastName: 'Surname'
        },
        authToken: 'authToken'
      })
    );

    render(
      <AppMock>
        <UserInfo closeModal={() => {}} />
      </AppMock>
    );
  });

  test('should have first and last name populated', async () => {
    const firstName: HTMLDivElement = screen.getByText('Name');
    expect(firstName).toBeDefined();

    const lastName: HTMLDivElement = screen.getByText('Surname');
    expect(lastName).toBeDefined();
  });

  test('should have logout button', async () => {
    const logoutButton: HTMLButtonElement = screen.getByRole('button');
    expect(logoutButton).toBeDefined();
    expect(logoutButton.textContent).toBe('Logout');
  });
});

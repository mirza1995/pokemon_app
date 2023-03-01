/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppMock } from '@mocks/AppMock';
import { UserInfoInline } from '@components/UserInfo';

describe('User info inline component tests', () => {
  test('should be defined and have name populated correctly', async () => {
    render(
      <AppMock>
        <UserInfoInline
          user={{
            id: 0,
            firstName: 'Name',
            lastName: 'Surname'
          }}
          onUserClick={() => {}}
        />
      </AppMock>
    );

    const userButton: HTMLButtonElement = screen.getByRole('button');
    expect(userButton).toBeDefined();
    expect(userButton.textContent).toBe('Name Surname');
  });
});

/* eslint-disable @typescript-eslint/no-empty-function */
import renderer from 'react-test-renderer';
import { AppMock } from '@mocks/AppMock';
import store from '@store/store';
import { userActions } from '@store/user-slice';
import { UserInfo } from '@components/UserInfo';

it('User Info component renders correctly', async () => {
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

  const tree = renderer
    .create(
      <AppMock>
        <UserInfo closeModal={() => {}} />
      </AppMock>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

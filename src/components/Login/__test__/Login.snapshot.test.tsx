/* eslint-disable @typescript-eslint/no-empty-function */
import renderer from 'react-test-renderer';
import { Login } from '@components/Login/Login';
import { AppMock } from '@mocks/AppMock';

it('Login component renders correctly', () => {
  const tree = renderer
    .create(
      <AppMock>
        <Login onSuccessfulLogin={() => {}} />
      </AppMock>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

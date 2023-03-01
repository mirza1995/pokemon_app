/* eslint-disable @typescript-eslint/no-empty-function */
import renderer from 'react-test-renderer';
import { AppMock } from '@mocks/AppMock';
import { Signup } from '@components/Signup';

it('Signup component renders correctly', () => {
  const tree = renderer
    .create(
      <AppMock>
        <Signup onSuccessfulSignup={() => {}} />
      </AppMock>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { FormattedMessage } from 'react-intl';

import { userSelector } from '@store/store';
import { userActions } from '@store/user-slice';

import { PrimaryButton } from '@components/PrimaryButton';
import userImage from '@images/user.jpg';
import { UserInfoDetail } from './UserInfoDetail';
import { AUTH_TOKEN } from '@utils/cookies';

type UserInfoProps = {
  closeModal: () => void;
};

export const UserInfo = ({ closeModal }: UserInfoProps) => {
  const { user } = useSelector(userSelector);
  const dispatch = useDispatch();
  const removeCookie = useCookies([AUTH_TOKEN])[2];

  const onLogoutClick = () => {
    removeCookie(AUTH_TOKEN);
    dispatch(userActions.reset());
    closeModal();
  };

  return (
    <div className='modal-default'>
      {user ? (
        <div className='px-[18px] pb-[30px] md:px-[100px] md:pt-[40px]'>
          <div className='flex items-center'>
            <img src={userImage} width='80' />

            <div className='ml-7'>
              <h2 className='text-xl font-light'>
                {`${user.firstName} ${user.lastName}`}
              </h2>
              <p className='mt-[6px] text-md font-normal text-gray'>
                {/* TODO - update with real sightings number */}
                <FormattedMessage
                  id='sightings.plural'
                  values={{ number: 0 }}
                />
              </p>
            </div>
          </div>

          <div className='pt-2.5'>
            <UserInfoDetail
              labelId='profile.firstName'
              value={user.firstName}
            />
            <UserInfoDetail labelId='profile.lastName' value={user.lastName} />
          </div>

          <div className='mx-auto w-[147px] pt-[80px] md:pt-[70px]'>
            <PrimaryButton onClick={onLogoutClick} textId='profile.logout' />
          </div>
        </div>
      ) : (
        <h2>
          <FormattedMessage id='profile.notLoggedIn' />
        </h2>
      )}
    </div>
  );
};

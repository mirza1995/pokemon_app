import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { FormattedMessage } from 'react-intl';
import logo from '@images/logo.jpg';
import { NavbarLink } from './NavbarLink';
import { userSelector } from '@store/store';
import { UserInfoInline } from '@components/UserInfo';
import { LoginModal } from '@components/LoginModal';
import { LoginSuccessfulModal } from '@components/LoginSuccessfulModal';
import { SignupModal } from '@components/SignupModal';
import { SignupSuccessfulModal } from '@components/SuccessfulSignupModal';
import { ProfileModal } from '@components/ProfileModal';
import { AUTH_TOKEN } from '@utils/cookies';
import { userActions } from '@store/user-slice';
import { CurrentUserResponse } from '@models/CurrentUserResponse';
import usersService from '@services/usersService';
import { useEffect } from 'react';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { user, authToken } = useSelector(userSelector);
  const [cookies, setCookie] = useCookies([AUTH_TOKEN]);

  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [hideLinks, setHideLinks] = useState<boolean>(true);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSuccessfulLoginModal, setShowSuccessfulLoginModal] =
    useState<boolean>(false);
  const [showSignupModal, setShowSignupModal] = useState<boolean>(false);
  const [showSuccessfulSignupModal, setShowSuccessfulSignupModal] =
    useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  useEffect(() => {
    if (cookies.authToken) {
      fetchUser();
    } else {
      setIsLoadingUser(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies]);

  useEffect(() => {
    //If authToken is set, it means user global state was changed
    if (authToken) {
      setIsLoadingUser(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchUser = async () => {
    const { user }: CurrentUserResponse = await usersService.getCurrentUser();

    dispatch(
      userActions.init({
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name
        },
        authToken: cookies.authToken
      })
    );
  };

  const handleMenuClick = () => {
    setHideLinks(!hideLinks);
  };

  const hideAllModalsAndMenu = () => {
    setHideLinks(true);
    setShowLoginModal(false);
    setShowProfileModal(false);
    setShowSignupModal(false);
  };

  const handleLoginClick = () => {
    hideAllModalsAndMenu();
    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const onSuccessfulLogin = (authToken: string) => {
    setCookie(AUTH_TOKEN, authToken, {
      path: '/',
      maxAge: 86400 //1 day
    });
    handleLoginModalClose();
    setShowSuccessfulLoginModal(true);
  };

  const handleSuccessfulLoginModalClose = () => {
    setShowSuccessfulLoginModal(false);
  };

  const onSignupClick = () => {
    hideAllModalsAndMenu();
    setShowSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  const onSuccessfulSignup = () => {
    handleSignupModalClose();
    setShowSuccessfulSignupModal(true);
  };

  const handleSuccessfulSignupModalClose = () => {
    setShowSuccessfulSignupModal(false);
  };

  const handleSuccessfulSignupModalOkClick = () => {
    handleSuccessfulSignupModalClose();
    setShowLoginModal(true);
  };

  const onUserClick = () => {
    hideAllModalsAndMenu();
    setShowProfileModal(true);
  };

  const onProfileClick = () => {
    hideAllModalsAndMenu();
    handleSuccessfulLoginModalClose();
    setShowProfileModal(true);
  };

  const handleProfileModalClose = () => {
    setShowProfileModal(false);
  };

  return (
    <>
      {showLoginModal && (
        <LoginModal
          handleCloseModal={handleLoginModalClose}
          onSuccessfulLogin={onSuccessfulLogin}
        />
      )}

      {showSuccessfulLoginModal && (
        <LoginSuccessfulModal
          handleCloseModal={handleSuccessfulLoginModalClose}
          onProfileClick={onProfileClick}
        />
      )}

      {showSignupModal && (
        <SignupModal
          handleCloseModal={handleSignupModalClose}
          onSuccessfulSignup={onSuccessfulSignup}
        />
      )}

      {showSuccessfulSignupModal && (
        <SignupSuccessfulModal
          handleCloseModal={handleSuccessfulSignupModalClose}
          okClick={handleSuccessfulSignupModalOkClick}
        />
      )}

      {showProfileModal && (
        <ProfileModal handleCloseModal={handleProfileModalClose} />
      )}

      <nav className='fixed top-0 z-[8] w-full bg-white px-5 py-6 shadow-xs'>
        <div className='ml-5px flex-1 items-center justify-between md:flex'>
          <div className='flex justify-between'>
            <Link to='/'>
              <img src={logo} />
            </Link>

            <button
              className='text-gray hover:text-primary md:hidden'
              onClick={handleMenuClick}
            >
              <VscMenu size={24} />
            </button>
          </div>

          <div
            className={`
              ${hideLinks ? 'max-md:hidden' : ''} 
              items-center justify-between md:flex 
              md:w-[606px]
            `}
          >
            <NavbarLink link='/' textId='navbar.flowers' />

            <NavbarLink link='/' textId='navbar.sightings' />

            <NavbarLink link='/' textId='navbar.favorites' />

            {!isLoadingUser && (
              <>
                {!user ? (
                  <div className='flex justify-start font-medium max-md:mt-4 max-md:flex-col'>
                    <button
                      onClick={handleLoginClick}
                      className='w-[42px] text-base text-primary md:mr-6'
                    >
                      <FormattedMessage id='navbar.login' />
                    </button>
                    <button
                      onClick={onSignupClick}
                      className='w-[140px] rounded-50 bg-primary-light px-[22px] py-3 text-base text-white shadow-3xl max-md:mt-3'
                    >
                      <FormattedMessage id='navbar.signup' />
                    </button>
                  </div>
                ) : (
                  <UserInfoInline user={user} onUserClick={onUserClick} />
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

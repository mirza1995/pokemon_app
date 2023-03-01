import { CurrentUser } from '@models/CurrentUser';
import userImage from '@images/user.jpg';

type UserInfoInlineProps = {
  user: CurrentUser;
  onUserClick: () => void;
};

export const UserInfoInline = ({ user, onUserClick }: UserInfoInlineProps) => {
  return (
    <div className='flex justify-start font-medium max-md:flex-col'>
      <button onClick={onUserClick} className='nav-link text-left md:mr-5'>
        {`${user.firstName} ${user.lastName}`}
      </button>

      <img className='max-md:mt-4' src={userImage} width='40' />
    </div>
  );
};

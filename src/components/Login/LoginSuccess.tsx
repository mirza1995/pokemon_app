import { FormattedMessage } from 'react-intl';
import { PrimaryButton } from '@components/PrimaryButton';

type LoginSuccessProps = {
  onOkClick: () => void;
  onProfileClick: () => void;
};

export const LoginSuccess = ({
  onOkClick,
  onProfileClick
}: LoginSuccessProps) => {
  return (
    <div className='modal-default'>
      <h4 className='text-center text-lg font-medium'>
        <FormattedMessage id='login.success' />
      </h4>

      <div className='mt-5 flex gap-3'>
        <PrimaryButton onClick={onOkClick} textId='ok' />
        <PrimaryButton onClick={onProfileClick} textId='profile' />
      </div>
    </div>
  );
};

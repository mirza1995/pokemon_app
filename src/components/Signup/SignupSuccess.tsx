import { FormattedMessage } from 'react-intl';
import { PrimaryButton } from '@components/PrimaryButton';

type SignupSuccessProps = {
  onOkClick: () => void;
};

export const SignupSuccess = ({ onOkClick }: SignupSuccessProps) => {
  return (
    <div className='modal-default'>
      <h4 className='text-center text-lg font-medium'>
        <FormattedMessage id='signup.success' />
      </h4>

      <div className='mx-auto mt-5 w-[150px]'>
        <PrimaryButton onClick={onOkClick} textId='ok' />
      </div>
    </div>
  );
};

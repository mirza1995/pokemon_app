import { FormattedMessage } from 'react-intl';

type PrimaryButtonProps = {
  textId: string;
  type?: 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export const PrimaryButton = ({
  textId,
  type,
  onClick
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className='w-full rounded-3 bg-primary-light py-4.5 text-base text-white shadow-3xl'
    >
      <FormattedMessage id={textId} />
    </button>
  );
};

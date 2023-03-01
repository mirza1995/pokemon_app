import { FormattedMessage } from 'react-intl';

type UserInfoDetailProps = {
  labelId: string;
  value: string;
};

export const UserInfoDetail = ({ labelId, value }: UserInfoDetailProps) => {
  return (
    <div className='mt-7'>
      <div className='text-xs font-normal text-gray'>
        <FormattedMessage id={labelId} />
      </div>
      <h5 className='mt-4 text-title font-normal'>{value}</h5>
    </div>
  );
};

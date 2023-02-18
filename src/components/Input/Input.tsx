import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

type InputProps = {
  name: string;
  value: string;
  labelId: string;
  type?: string;
  errorId?: string;
  onValueChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: () => void;
};

export const Input = ({
  name,
  value = '',
  labelId,
  type = 'text',
  errorId,
  onValueChange,
  onClick,
  onBlur
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onElementClick = () => {
    ref.current?.focus();
  };

  return (
    <div className='relative mt-2.5 flex-1' onClick={onElementClick}>
      <input
        ref={ref}
        name={name}
        type={type}
        value={value}
        data-testid={name}
        className={`
          block h-[50px] w-full rounded-3 border bg-gray-1 px-4
          pb-2.5 pt-6 text-md 
          font-normal text-primary-dark ${
            errorId ? 'border-red-500' : 'border-gray-2'
          } 
          peer appearance-none
          focus:border-primary focus:outline-none focus:ring-0`}
        placeholder=' '
        onChange={onValueChange}
        onClick={() => onClick && onClick()}
        onBlur={() => onBlur && onBlur()}
      />
      <label
        className='
        absolute top-6 left-4 z-10 origin-[0] -translate-y-4 scale-75 text-md font-normal
        text-gray duration-300 peer-placeholder-shown:translate-y-0 
        peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 
        peer-focus:scale-75'
      >
        <FormattedMessage id={labelId} />
      </label>
      {errorId && (
        <p className='mt-2 flex items-center px-1 text-sm text-red-500'>
          <BsFillExclamationTriangleFill />
          <span className='ml-2'>
            <FormattedMessage id={errorId} />
          </span>
        </p>
      )}
    </div>
  );
};

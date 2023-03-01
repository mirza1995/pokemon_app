import { FormattedMessage } from 'react-intl';
import { IoMdClose } from 'react-icons/io';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  closeButtonTextId?: string;
  bodyWidthClasses?: string;
  showCloseButton?: boolean;
  onModalClose: () => void;
};

export const Modal = ({
  children,
  closeButtonTextId,
  bodyWidthClasses,
  showCloseButton,
  onModalClose
}: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      className={`
        fixed left-0 z-[8] 
        flex h-full
        w-full items-center justify-center overflow-y-auto
        max-md:mt-[-28px] max-md:bg-white md:top-0 
        md:z-10
      `}
    >
      <div
        onClick={onModalClose}
        className='absolute h-full w-full bg-black opacity-50 max-md:hidden'
      ></div>

      <div
        className={`${
          bodyWidthClasses ?? 'md:w-[440px]'
        } z-50 justify-center max-md:w-full`}
      >
        {showCloseButton && (
          <div className='relative'>
            <button
              onClick={onModalClose}
              className='absolute right-[20px] text-lg text-gray hover:text-primary md:top-[20px]'
            >
              <IoMdClose />
            </button>
          </div>
        )}

        <div className='overflow-y-auto rounded bg-white md:shadow-lg'>
          {children}
        </div>

        {closeButtonTextId && (
          <div className='mt-5 text-center text-md'>
            <button
              onClick={onModalClose}
              className='font-ubuntu text-primary opacity-50 hover:text-primary md:text-white'
            >
              <FormattedMessage id={closeButtonTextId} />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

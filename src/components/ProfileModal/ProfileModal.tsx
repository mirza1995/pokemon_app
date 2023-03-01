import { Modal } from '@components/Modal';
import { UserInfo } from '@components/UserInfo';

type Props = {
  handleCloseModal: () => void;
};

export const ProfileModal = ({ handleCloseModal }: Props) => {
  return (
    <Modal
      bodyWidthClasses='md:w-[590px]'
      showCloseButton
      onModalClose={handleCloseModal}
    >
      <UserInfo closeModal={handleCloseModal} />
    </Modal>
  );
};

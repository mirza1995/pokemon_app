import { LoginSuccess } from '@components/Login';
import { Modal } from '@components/Modal';

type Props = {
  handleCloseModal: () => void;
  onProfileClick: () => void;
};

export const LoginSuccessfulModal = ({
  handleCloseModal,
  onProfileClick
}: Props) => {
  return (
    <Modal onModalClose={handleCloseModal}>
      <LoginSuccess
        onOkClick={handleCloseModal}
        onProfileClick={onProfileClick}
      />
    </Modal>
  );
};

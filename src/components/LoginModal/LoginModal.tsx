import { Login } from '@components/Login';
import { Modal } from '@components/Modal';

type Props = {
  handleCloseModal: () => void;
  onSuccessfulLogin: (authToken: string) => void;
};

export const LoginModal = ({ handleCloseModal, onSuccessfulLogin }: Props) => {
  return (
    <Modal
      closeButtonTextId='login.button.close'
      onModalClose={handleCloseModal}
    >
      <Login onSuccessfulLogin={onSuccessfulLogin} />
    </Modal>
  );
};

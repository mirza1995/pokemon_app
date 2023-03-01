import { Modal } from '@components/Modal';
import { SignupSuccess } from '@components/Signup';

type Props = {
  handleCloseModal: () => void;
  okClick: () => void;
};

export const SignupSuccessfulModal = ({ handleCloseModal, okClick }: Props) => {
  return (
    <Modal onModalClose={handleCloseModal}>
      <SignupSuccess onOkClick={okClick} />
    </Modal>
  );
};

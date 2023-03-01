import { Modal } from '@components/Modal';
import { Signup } from '@components/Signup';

type Props = {
  handleCloseModal: () => void;
  onSuccessfulSignup: () => void;
};

export const SignupModal = ({
  handleCloseModal,
  onSuccessfulSignup
}: Props) => {
  return (
    <Modal
      closeButtonTextId='signup.button.close'
      onModalClose={handleCloseModal}
    >
      <Signup onSuccessfulSignup={onSuccessfulSignup} />
    </Modal>
  );
};

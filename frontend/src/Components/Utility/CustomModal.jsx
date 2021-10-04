import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CustomModal = ({
  heading,
  description,
  onHandleToggle,
  modal,
  onSave,
  showSave,
  children,
}) => {
  const handleToggle = () => {
    onHandleToggle();
  };
  return (
    <Modal isOpen={modal} toggle={handleToggle} backdrop="static">
      <ModalHeader toggle={handleToggle}>{heading}</ModalHeader>
      {description && <ModalBody>{description}</ModalBody>}
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={handleToggle}
          data-testid="CloseModal"
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CustomModal;

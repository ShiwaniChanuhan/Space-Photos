import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TooltipModal({ show, handleClose, tooltip }) {
  return (
    <>
      <Modal 
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        dialogClassName="custom-modal"
      >
        <Modal.Header
          className="p-4"
          closeButton
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Body className="p-4 pt-0 ">
          <p className="mb-0" dangerouslySetInnerHTML={{ __html: tooltip }} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TooltipModal;

import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./styles";

interface ModalProps {
  children: ReactNode;
  onCloseModal: () => void;
}

function Modal({ children, onCloseModal }: ModalProps) {
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleCloseModal}>{children}</Backdrop>,
    document.getElementById("modal-root")!
  );
}

export default Modal;

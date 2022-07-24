import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./styles";

interface ModalProps {
  children: ReactNode;
  onCloseModal: () => void;
}

function Modal({ children, onCloseModal }: ModalProps) {
  return ReactDOM.createPortal(
    <Backdrop onClick={onCloseModal}>{children}</Backdrop>,
    document.getElementById("modal-root")!
  );
}

export default Modal;

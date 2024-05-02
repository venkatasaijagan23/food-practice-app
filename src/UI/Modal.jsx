import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, closeHandler, className = "" }) => {
  const dialog = useRef();
  useEffect(() => {
    console.log("state of the modal ===> ", open);
    if (open) {
      dialog.current.showModal();
    }

    return () => dialog.current.close();
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      onClose={closeHandler}
      className={`modal ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;

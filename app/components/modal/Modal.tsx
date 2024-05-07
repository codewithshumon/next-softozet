"use client";

import { useState, useEffect } from "react";

import useModal from "@/app/hooks/useModal";

const Modal = ({ disabled, modalBody }) => {
  const { isOpen, onClose } = useModal();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-40">
      <div className=" w-full h-screen bg-red-300 flex items-center justify-center">
        This is the Modal
      </div>
    </div>
  );
};

export default Modal;

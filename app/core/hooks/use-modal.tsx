'use client';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Modal, Drawer } from 'antd';
import useIsMobile from './use-is-mobile'; // فرض بر وجود این هوک

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const isMobile = useIsMobile(768); // بررسی موبایل بودن با breakpoint 768px

  const openModal = useCallback((content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isMobile ? (
        <Drawer
          open={isOpen}
          onClose={closeModal}
          title="Modal Title"
          placement="right"
          destroyOnClose
        >
          {modalContent}
        </Drawer>
      ) : (
        <Modal
          open={isOpen}
          onCancel={closeModal}
          title="Modal Title"
          footer={null}
          destroyOnClose
        >
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
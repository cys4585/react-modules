import { ModalOverlay, ModalWrapper } from './Modal.style';
import React, { useEffect, useRef } from 'react';

import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader';
import { ModalZIndex } from './constants';

export type ModalPositionType = 'center' | 'bottom';
export type ModalSizeType = 'small' | 'medium' | 'large';
type ModalConfig =
  | { position: ModalPositionType }
  | { size: ModalSizeType }
  | { position: 'center'; size: ModalSizeType };

export interface ModalProps {
  isOpen: boolean;
  config?: ModalConfig;
  zIndex?: ModalZIndex | number;
  children: React.ReactNode;
  onClose: () => void;
}

const getDefaultModalConfig = (
  config?: ModalConfig,
): { position: ModalPositionType; size: ModalSizeType } => {
  if (!config) {
    return { position: 'center', size: 'medium' };
  }
  if ('position' in config && !('size' in config)) {
    return { position: config.position, size: 'medium' };
  }
  if (!('position' in config) && 'size' in config) {
    return { position: 'center', size: config.size };
  }
  return config;
};

function Modal({ isOpen, config, zIndex = ModalZIndex.High, children, onClose }: ModalProps) {
  const { position, size } = getDefaultModalConfig(config);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  if (!isOpen) {
    return;
  }

  return (
    <ModalOverlay
      onClick={onClose}
      $zIndex={zIndex - 1}
    >
      <ModalWrapper
        $zIndex={zIndex}
        ref={modalRef}
        $position={position}
        $size={size}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
        tabIndex={-1}
      >
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

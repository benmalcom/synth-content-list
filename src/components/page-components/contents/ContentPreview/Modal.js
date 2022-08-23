import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

function ContentPreviewModal({ isOpen, onClose, previewUrl, aspectRatio }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      blockScrollOnMount={true}
    >
      <ModalOverlay />
      <ModalContent p="40px" h="100vh" w="full">
        <ModalCloseButton outline="none" boxShadow="none" border="none" />
        <ModalBody display="flex" justifyContent="center" h="100%">
          <Image
            css={css`
              aspect-ratio: ${aspectRatio};
            `}
            src={previewUrl}
            alt="content"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

ContentPreviewModal.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  aspectRatio: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
};

export default ContentPreviewModal;

import React, { useState } from 'react';
import { Img, Item } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

export const ImageItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prevModal => !prevModal);
  };
  return (
    <Item>
      <Img src={image.webformatURL} alt={image.tags} onClick={toggleModal} />
      {isModalOpen && (
        <Modal
          largeImageURL={image.largeImageURL}
          tags={image.tags}
          onClose={toggleModal}
        />
      )}
    </Item>
  );
};

export default ImageItem;

import React, { useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
  cursor: pointer;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: ${zoomIn} 0.3s ease-out;
  cursor: default;
`;

const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: rgba(30, 30, 46, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10000;

  &:hover {
    background: rgba(124, 58, 237, 0.9);
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.5);
  }
`;

const NavigationButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 55px;
  height: 55px;
  background: rgba(30, 30, 46, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10000;

  ${props => props.$direction === 'prev' ? 'left: 20px;' : 'right: 20px;'}

  &:hover {
    background: rgba(124, 58, 237, 0.9);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.5);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    &:hover {
      background: rgba(30, 30, 46, 0.9);
      transform: translateY(-50%);
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
    ${props => props.$direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const ImageCounter = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30, 30, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 20px;
  color: #e4e4e7;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10000;
`;

const ImageHint = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  z-index: 10000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageLightbox = ({ images, currentIndex, onClose, onNavigate, projectTitle }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    } else if (e.key === 'ArrowRight') {
      onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    }
  }, [currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <LightboxOverlay onClick={handleOverlayClick}>
      <CloseButton onClick={onClose} title="Close (Esc)">
        ✕
      </CloseButton>
      
      {images.length > 1 && (
        <>
          <NavigationButton 
            $direction="prev" 
            onClick={handlePrevious}
            title="Previous (←)"
          >
            ‹
          </NavigationButton>
          <NavigationButton 
            $direction="next" 
            onClick={handleNext}
            title="Next (→)"
          >
            ›
          </NavigationButton>
        </>
      )}
      
      <LightboxContent onClick={(e) => e.stopPropagation()}>
        <LightboxImage 
          src={images[currentIndex]} 
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
        />
      </LightboxContent>
      
      {images.length > 1 && (
        <>
          <ImageCounter>
            {currentIndex + 1} / {images.length}
          </ImageCounter>
          <ImageHint>
            Use arrow keys to navigate • Press Esc to close
          </ImageHint>
        </>
      )}
    </LightboxOverlay>
  );
};

export default ImageLightbox;

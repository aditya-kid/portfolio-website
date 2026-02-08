import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageLightbox from './ImageLightbox';

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ProjectCardContainer = styled.div`
  display: flex;
  background: rgba(30, 30, 46, 0.8);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${props => props.$isEven ? slideInFromLeft : slideInFromRight} 0.8s ease-out;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), rgba(236, 72, 153, 0.5), transparent);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 4px solid rgba(124, 58, 237, 0.2);
  border-top: 4px solid #7c3aed;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  z-index: 10;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  img {
    opacity: ${props => props.$loaded ? 1 : 0};
    transition: opacity 0.3s ease;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: ${props => props.$isMobile ? '280px' : '500px'};
  overflow: hidden;
  border-radius: 20px 0 0 20px;

  padding: 25px 0 25px 25px;
  display: flex;
  align-items: center;
  
  .carousel-root {
    width: 100%;
    aspect-ratio: ${props => props.$isMobile ? '9 / 16' : '16 / 9'};
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    clip-path: inset(0 0 0 0 round 16px);
  }
  
  .carousel .carousel-slider {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .carousel .slider-wrapper {
    height: 100%;
    overflow: hidden;
  }
  
  .carousel .slider {
    height: 100%;
  }
  
  .carousel .slide {
    height: 100%;
    background: rgba(30, 30, 46, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;
  }
  
  .carousel .slide > div {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      transition: background 0.3s ease;
      z-index: 5;
      pointer-events: none;
    }
    
    &::after {
      content: 'Click to view image';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      white-space: nowrap;
      z-index: 10;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }
    
    &:hover::before {
      background: rgba(0, 0, 0, 0.5);
    }
    
    &:hover::after {
      opacity: 1;
    }
  }

  .carousel .slide img {
    width: 100%;
    height: 100%;
    aspect-ratio: ${props => props.$isMobile ? '9 / 16' : '16 / 9'};
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  /* Hide non-active slides to prevent them from showing */
  .carousel .slide:not(.selected) {
    opacity: 0 !important;
    pointer-events: none;
  }

  .carousel .slide.selected {
    opacity: 1 !important;
  }

  /* Carousel controls styling */
  .carousel .control-arrow {
    background: rgba(30, 30, 46, 0.9);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    transition: all 0.3s ease;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 2;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.25);
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
    cursor: pointer;
    
    &:hover {
      opacity: 1;
      background: rgba(124, 58, 237, 0.9);
      transform: translateY(-50%) scale(1.1) !important;
      box-shadow: 0 8px 24px rgba(124,58,237,0.5);
    }
  }

  .carousel .control-prev.control-arrow {
    left: 10px !important;
  }

  .carousel .control-next.control-arrow {
    right: 10px !important;
  }

  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    position: static;
    border: none !important;
    width: auto;
    height: auto;
    margin: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
  }

  .carousel .control-prev.control-arrow:before { content: '<'; }
  .carousel .control-next.control-arrow:before { content: '>'; }

  /* Indicators */
  .carousel .control-dots {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 8px 12px;
    
    .dot {
      background: rgba(255, 255, 255, 0.5);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: 0 4px;
      transition: all 0.3s ease;
      
      &.selected {
        background: #ffffff;
        transform: scale(1.3);
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 16px 16px 0 16px;
    
    .carousel-root {
      border-radius: 16px;
    }
    
    .carousel .carousel-slider,
    .carousel .slider-wrapper,
    .carousel .slider {
      border-radius: 16px;
    }
    
    .carousel .slide {
      border-radius: 16px;
    }
    
    .carousel .slide img {
      border-radius: 16px;
    }

    .carousel .control-arrow {
      width: 40px;
      height: 40px;
    }
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 320px;

  @media (max-width: 768px) {
    padding: 24px;
    min-height: auto;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.05rem;
  color: #a1a1aa;
  line-height: 1.7;
  margin-bottom: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: rgba(124, 58, 237, 0.15);
  color: #c084fc;
  border: 1px solid rgba(124, 58, 237, 0.3);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.25);
    color: #d8b4fe;
    transform: translateY(-1px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  padding: 12px 24px;
  background: rgba(30, 30, 46, 0.8);
  color: #e4e4e7;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 35px rgba(124, 58, 237, 0.4);
  }
`;

const ProjectCard = React.memo(({ project, index }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (imgIndex) => {
    setLoadedImages(prev => ({ ...prev, [imgIndex]: true }));
  };

  const handleImageClick = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNavigateLightbox = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <ProjectCardContainer $isEven={index % 2 === 0}>
        <ImageSection $isMobile={project.category === 'mobile'}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={project.images.length > 1}
            interval={4000}
            swipeable={true}
            emulateTouch={true}
            selectedItem={currentImageIndex}
            onChange={(index) => setCurrentImageIndex(index)}
          >
            {project.images.map((image, imgIndex) => (
              <div key={imgIndex} onClick={() => handleImageClick(imgIndex)}>
                <ImageWrapper $loaded={loadedImages[imgIndex]}>
                  {!loadedImages[imgIndex] && <LoadingSpinner />}
                  <img
                    src={image}
                    alt={`${project.title} - ${imgIndex + 1}`}
                    loading={imgIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    title="Click to view larger"
                    onLoad={() => handleImageLoad(imgIndex)}
                  />
                </ImageWrapper>
              </div>
            ))}
          </Carousel>
        </ImageSection>
        <ContentSection $isMobile={project.category === 'mobile'}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechStack>
            {project.technologies.map((tech, techIndex) => (
              <TechTag key={techIndex}>{tech}</TechTag>
            ))}
          </TechStack>
          <ProjectLinks>
            {project.liveLink && (
              <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </ProjectLink>
            )}
            {project.githubLink && (
              <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
            )}
          </ProjectLinks>
        </ContentSection>
      </ProjectCardContainer>
      
      {lightboxOpen && (
        <ImageLightbox
          images={project.images}
          currentIndex={currentImageIndex}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
          projectTitle={project.title}
        />
      )}
    </>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
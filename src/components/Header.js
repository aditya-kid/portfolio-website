import React from 'react';
import styled, { keyframes } from 'styled-components';
import profileImage from '../assets/images/adit.jpg';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 30px 40px 40px;
  margin: 10px 20px 0;
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.6), rgba(236, 72, 153, 0.6), transparent);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px 30px;
    margin: 10px 15px 0;

    &::after {
      left: 5%;
      right: 5%;
    }
  }
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background: linear-gradient(135deg, #7c3aed, #ec4899) padding-box,
              linear-gradient(135deg, #7c3aed, #ec4899) border-box;
  box-shadow: 0 15px 35px rgba(124, 58, 237, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.08) rotate(2deg);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }
`;

const NameSection = styled.div`
  margin-left: 40px;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #a1a1aa;
  font-weight: 400;
  margin-bottom: 16px;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #71717a;
  line-height: 1.7;
  max-width: 700px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileImage
        src={profileImage}
        alt="Aditya Budiantono Profile"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <NameSection>
        <Name>Achmad Aditya Budiantono</Name>
        <Title>IoT Engineer • Embedded Systems & Full-Stack Connectivity</Title>
        <Description>
          I am passionate about transforming physical data into digital insights.
          As an end-to-end IoT Engineer, my focus is on designing, implementing,
          and deploying reliable Internet of Things solutions right into the hands
          of the end-user (My stack includes ESP32, Thingsboard, LoRa, MQTT and
          Flutter for seamless user experiences).
        </Description>
      </NameSection>
    </HeaderContainer>
  );
};

export default Header;
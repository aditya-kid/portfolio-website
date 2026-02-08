import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  margin: 60px 20px 20px;
  padding: 48px 40px 40px;
  margin-top: auto;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, 
      transparent, 
      #7c3aed 20%, 
      #ec4899 50%, 
      #7c3aed 80%, 
      transparent
    );
  }

  @media (max-width: 768px) {
    margin: 40px 15px 15px;
    padding: 32px 20px 20px;
  }
`;

const FooterTitle = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 24px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-left: 3px solid ${props => {
    switch (props.index) {
      case 0: return '#e91e63'; // Instagram - Pink
      case 1: return '#25d366'; // WhatsApp - Green  
      case 2: return '#0077b5'; // LinkedIn - Blue
      case 3: return '#7c3aed'; // Email - Purple
      default: return '#7c3aed';
    }
  }};
  background: rgba(255, 255, 255, 0.02);
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 12px;
  will-change: transform;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(8px);
    border-left-width: 4px;
  }

  svg {
    font-size: 1.4rem;
    color: ${props => {
    switch (props.index) {
      case 0: return '#e91e63';
      case 1: return '#25d366';
      case 2: return '#0077b5';
      case 3: return '#7c3aed';
      default: return '#7c3aed';
    }
  }};
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 18px 20px;
    gap: 14px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.span`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactDetail = styled.span`
  color: #a1a1aa;
  font-size: 0.9rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Footer = React.memo(() => {
  const contactData = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      detail: '@aditya.kid',
      link: 'https://www.instagram.com/aditya.kid?igsh=M3BtcnlrN3Z3dDBp'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      detail: '+62 812-9845-6216',
      link: 'https://wa.me/6281298456216'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      detail: 'linkedin.com/in/aditya-budiantono',
      link: 'https://www.linkedin.com/in/aditya-budiantono-b0aa88329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      detail: 'aditya20.04.04@gmail.com',
      link: 'mailto:aditya20.04.04@gmail.com'
    }
  ];

  return (
    <FooterContainer>
      <FooterTitle>Let's Connect!</FooterTitle>
      <ContactGrid>
        {contactData.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <ContactItem
              key={index}
              index={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
              <ContactInfo>
                <ContactLabel>{contact.label}</ContactLabel>
                <ContactDetail>{contact.detail}</ContactDetail>
              </ContactInfo>
            </ContactItem>
          );
        })}
      </ContactGrid>
    </FooterContainer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
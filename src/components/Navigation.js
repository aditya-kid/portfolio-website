import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FaMicrochip, FaCode, FaMobile } from 'react-icons/fa';

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 40px 20px 30px;
  gap: 8px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 35px 15px 25px;
    gap: 10px;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: ${props => props.active ?
    'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)' :
    'rgba(30, 30, 46, 0.6)'
  };
  color: ${props => props.active ? 'white' : '#a1a1aa'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active ?
    '0 8px 25px rgba(124, 58, 237, 0.25)' :
    '0 4px 15px rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(124, 58, 237, 0.25);
    background: ${props => props.active ?
    'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)' :
    'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)'
  };
    color: white;
    border-color: transparent;
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 1rem;
    justify-content: center;
  }
`;

const Navigation = React.memo(({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'hardware', name: 'Hardware', icon: FaMicrochip },
    { id: 'software', name: 'Software', icon: FaCode },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile }
  ];

  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, [setActiveCategory]);

  return (
    <NavigationContainer>
      {categories.map(category => {
        const IconComponent = category.icon;
        return (
          <NavButton
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            <IconComponent />
            {category.name}
          </NavButton>
        );
      })}
    </NavigationContainer>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
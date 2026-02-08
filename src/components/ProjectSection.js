import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectSectionContainer = styled.section`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 48px;
  background: linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  ${props => props.$isMobile && `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `}
`;

const NoProjects = styled.div`
  text-align: center;
  padding: 80px 32px;
  background: rgba(30, 30, 46, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), transparent);
  }

  h3 {
    font-size: 1.6rem;
    color: #e4e4e7;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    color: #a1a1aa;
    font-weight: 400;
  }
`;

const ProjectSection = React.memo(({ category, projects }) => {
  const categoryTitles = {
    hardware: 'Hardware Projects',
    software: 'Software Projects',
    mobile: 'Mobile App Projects'
  };

  const filteredProjects = React.useMemo(
    () => projects.filter(project => project.category === category),
    [projects, category]
  );

  return (
    <ProjectSectionContainer>
      <SectionTitle>{categoryTitles[category]}</SectionTitle>
      <ProjectsGrid $isMobile={category === 'mobile'}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`${category}-${index}`} project={project} index={index} />
          ))
        ) : (
          <NoProjects>
            <h3>Coming Soon</h3>
            <p>Projects in this category will be added soon!</p>
          </NoProjects>
        )}
      </ProjectsGrid>
    </ProjectSectionContainer>
  );
});

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;
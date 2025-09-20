import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  opacity: 0;
  transform: translateY(50px);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ delay }) => delay || '0s'};
  will-change: opacity, visibility, transform;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const FadeInSection = ({ children, delay }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1, // Start animation when 10% of the component is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <StyledSection ref={domRef} className={isVisible ? 'is-visible' : ''} delay={delay}>
      {children}
    </StyledSection>
  );
};

export default FadeInSection;
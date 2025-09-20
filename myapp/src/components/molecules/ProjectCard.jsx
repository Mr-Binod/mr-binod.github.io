import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100%; /* Full width on small screens */
    max-width: 450px; /* Max width for larger screens */
    min-height: 600px; /* Ensure consistent height for all cards */
    padding: 20px;
    border-radius: 15px; /* Slightly larger radius */
    border: 1px solid #2a2a2a;
    background: #1a1a1a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    color: #bbbbbb;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribute content vertically */

    a {
      color: #88ccff; /* Lighter blue for links */
      text-decoration: none;

      &:hover {
        color: #aaddff;
        text-decoration: underline;
      }
    }
    .tags {
      margin-top: 15px;
      margin-bottom: 15px;
      color : #bbbbbb;
      font-size: 0.9em;
      line-height: 1.5;
    }

    /* Hover effect for the card */
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
        border-color: #4a90e2;

        /* Image zoom effect on card hover */
        .project-image {
            transform: scale(1.05);
        }
    }
`

const Title = styled.h2` /* Changed to h2 for semantic hierarchy */
    font-size: 24px;
    margin-bottom: 20px;
    color: #f7f7f7; /* Ensure title is visible */
    font-weight: 600;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 5px;
    overflow: hidden; /* Important for containing the zoomed image */
    margin-bottom: 25px;
    border: 1px solid #333; /* Subtle border for images */
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out; /* Smooth zoom transition */
`

const Desc = styled.p` /* Changed to p for semantic text */
    font-size: 16px;
    line-height: 1.6;
`

const TechStack = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const TechTag = styled.span`
    background-color: #2c2c2c;
    color: #a0a0a0;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #444;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; /* Space between buttons */
`;
const Desclink = styled.button` /* Changed to button for semantic interaction */
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    background-color: #1f3557;
    padding: 12px;
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white; /* Ensure text is white */
    border: none; /* Remove default button border */

    &:hover {
        background-color: #2e4b75;
        color: #e0e0e0;
    }

    
`

const ProjectCard = ({ title, description, image, links, githubLink, siteLink, technologies }) => {
  return (
    <Wrap>
      <div> {/* Group top content */}
        <Title>{title}</Title>
        <ImageContainer>
            <Image src={image} alt={`${title} project screenshot`} className="project-image" />
        </ImageContainer>
        <Desc>{description}</Desc>
        <TechStack>
            {technologies?.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
            ))}
        </TechStack>
        {links && links.length > 0 && (
          <div className='tags'>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                {index < links.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <ButtonGroup> {/* Group bottom links */}
        {siteLink && (
            <Desclink onClick={() => {
                window.open(siteLink, '_blank', 'noopener noreferrer');
            }}>
                사이트 이동하기
            </Desclink>
        )}
        {githubLink && (
            <Desclink onClick={() => {
                window.open(githubLink, '_blank', 'noopener noreferrer');
            }}>
                Github 이동하기
            </Desclink>
        )}
      </ButtonGroup>
    </Wrap>
  );
}

export default ProjectCard

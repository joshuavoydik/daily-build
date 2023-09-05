import React from 'react';
import styled from 'styled-components';
import logoIcon from './logo.png';
import joshuaImage from './joshua2.jpeg';

const Wrapper = styled.div`
  position: relative; // Added this line
`;

const LogoIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 3.5em;

  @media (max-width: 768px) {
    font-size: 2.5em; // Smaller font-size for mobile
  }

  font-weight: 900;
`;

const ContentContainer = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%; // Full width for mobile devices
  }

  margin-left: 0;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 20px; // Smaller font-size for mobile
  }

  margin-bottom: 30px;
  max-width: 100%;
  font-weight: 500;
`;

const AdditionalText = styled.p`
  text-align: left;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px; // Smaller font-size for mobile
  }

  font-weight: 600;
`;

const SubscribeBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 50px;
`;

const EmailInput = styled.input`
  width: calc(100% - 30px); // Adjust the width to accommodate the button
  padding: 15px;
  font-size: 18px;
  border-radius: 10px 0 0 10px;
  border: 1px solid black; // Set the border explicitly
  box-sizing: border-box; // Include padding and border in width/height calculations

  &:focus {
    outline: none;
    border: 1px solid black; // Keep the border on focus
  }
`;

const SubscribeButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  background-color: #190000; // Gunmetal gray color
  color: #FFF; // Text color set to white for readability
  border: 1px solid black; // Black border around the button
  box-sizing: border-box; // Include padding and border in width/height calculations

  &:focus {
    outline: none;
    border: 1px solid black; // Keep the border on focus
  }
`;

const PastIssuesLink = styled.a`
  position: absolute;
  top: 20px; // Adjust this value to align with the logo
  right: 20px;
  font-size: 18px;
  text-align: right;
  text-decoration: underline; // Always underline
  color: #000; // Adjust the color as needed

  &:hover {
    text-decoration: none; // Removes underline on hover
  }
`;

const JoshuaImage = styled.img`
  position: absolute; 
  right: 100px;  
  top: 150px;
  width: auto;
  height: 180px;
  border-radius: 5px; 

  @media (max-width: 768px) {
    position: relative;  // To stack it normally
    right: auto;
    top: auto;
    margin: 0 auto;  // Center the image
    height: 100px;  // Adjust size as needed
  }
`;

const ImageCaption = styled.p`
  position: absolute; 
  right: 140px;
  top: 320px;
  font-size: 16px;
  text-align: right;

  @media (max-width: 768px) {
    position: relative;  // To stack it normally
    right: auto;
    top: auto;
    text-align: center;  // Center the caption
    margin-top: 10px;  // Space between image and caption
  }
`;

const HighlightedText = styled.span`
  background-color: #FFD700; // Your highlight color here
  padding: 0px 0px; // Padding around the highlighted text
`;

const IframeWrapper = styled.div`
  height: 52px;
  width: 100%; // Make iframe responsive
  border-radius: 0px;
  margin: 0;
  background-color: transparent;

  iframe {
    width: 100%;
    max-width: 750px; // Keep the maximum width
  }
`;

const StyledLink = styled.a`
  color: inherit;  // Use the same color as the surrounding text
  text-decoration: underline;  // Underline to indicate a hyperlink

  &:hover {
    color: #1DA1F2;  // Change color on hover to Twitter blue or any other color you like
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoIcon src={logoIcon} alt="Logo" />
      <Title>Joshua's Daily Build</Title>
      <ContentContainer>
        <Subtitle>
          <HighlightedText><b> Follow me as I publicly explore AI tools and share my learnings with you daily.</b></HighlightedText> I feature new projects, showcase AI tools, provide updates & news, and present my findings.
        </Subtitle>
        <AdditionalText>Get updates daily in your inbox.</AdditionalText>
        <SubscribeBar>
          <IframeWrapper>
            <iframe src="https://embeds.beehiiv.com/087f1df0-d099-4a61-8df9-e68ef05fef2a?slim=true" data-test-id="beehiiv-embed" height="52" width="750" frameBorder="0" scrolling="no" style={{ margin: '0', borderRadius: '0px', backgroundColor: 'transparent' }}></iframe>
          </IframeWrapper>
        </SubscribeBar>
      </ContentContainer>
      <PastIssuesLink href="https://daily-build.beehiiv.com/">view past issues</PastIssuesLink>
      <JoshuaImage src={joshuaImage} alt="Joshua" />
      <p style={{ position: 'absolute', right: '132px', top: '326px', fontSize: '16px', textAlign: 'right' }}>
        👋 Hey, I'm <StyledLink href="https://twitter.com/joshuavoydik" target="_blank" rel="noopener noreferrer">Joshua</StyledLink>
      </p>
    </Wrapper>
  );
};

export default Header;















import React from 'react';
import styled from 'styled-components';
import logoIcon from './logo.png';

const Wrapper = styled.div`
  background-color: #fdebd0;
  position: relative; // Added this line
`;

const LogoIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 0 20px 0;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 3em;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 60%; // Adjust this to the desired width
  margin-left: 0; // Set the left margin to 0 to align the content to the left
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 26px;
  margin-bottom: 30px;
  max-width: 100%; // Ensure that the subtitle doesn't exceed the container's width
`;

const AdditionalText = styled.p`
  text-align: left;
  font-size: 18px; // Adjust as needed
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
  background-color: #2C3539; // Gunmetal gray color
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
  text-decoration: none;
  color: #000; // Adjust the color as needed

  &:hover {
    text-decoration: underline; // Adds underline on hover
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoIcon src={logoIcon} alt="Logo" />
      <Title>Daily Build</Title>
      <ContentContainer>
        <Subtitle>Building new things daily using AI tools. Learn how to build apps, products, workflows, and much more!</Subtitle>
        <AdditionalText>Your additional text here.</AdditionalText>
        <SubscribeBar>
          <EmailInput type="email" placeholder="Enter your email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeBar>
      </ContentContainer>
      <PastIssuesLink href="https://daily-build.beehiiv.com/">view past issues</PastIssuesLink>
    </Wrapper>
  );
};

export default Header;









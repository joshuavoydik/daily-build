import React from 'react';
import styled from 'styled-components';
import slackIcon from './slack.png'; // assuming the images are in the same directory as this file

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px; // Add this line to create space above the footer
  background-color: #FEDE87; // soft orange color to match the rest of the site
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

const Footer = () => (
    <Wrapper>
      <Icon src={slackIcon} alt="Icon 1" />
      {/* Add more icons as needed */}
    </Wrapper>
  );

export default Footer;

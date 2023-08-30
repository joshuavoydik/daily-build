import React from 'react';
import styled from 'styled-components';
import discordIcon from './discord.png'; // assuming the images are in the same directory as this file

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px; // Add this line to create space above the footer
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

const Footer = () => (
    <Wrapper>
      <a href="https://discord.gg/qvRKejkRUF" target="_blank" rel="noopener noreferrer">
        <Icon src={discordIcon} alt="Icon 1" />
      </a>
    </Wrapper>
  );

export default Footer;

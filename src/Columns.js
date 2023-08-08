import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; // allow wrapping
  padding-top: 40px; // add padding at the top
`;

const Column = styled.div`
  width: calc(33.333% - 40px); // adjusts for padding
  padding: 0px;
  box-sizing: border-box; // include padding in width calculation
  font-size: 20px; // set the desired font size
  font-weight: 500; // Set the desired font weight here
  
  @media (max-width: 768px) {
    width: 100%; // stacks columns on smaller screens
  }
`;

const LastRowWrapper = styled.div`
  margin-bottom: 100px; // Adjust as needed
`;

const Spacer = styled.div`
  height: 100px; // Adjust this value as needed for padding between rows
`;

const HighlightedText = styled.span`
  background-color: #FFD700; // Your highlight color here
  padding: 2px 5px; // Padding around the highlighted text
`;

const Columns = ({ columnsContent }) => (
  <Wrapper>
    {columnsContent.map((content, index) => (
      <Column key={index}>{content}</Column>
    ))}
  </Wrapper>
);

const Rows = () => (
  <div>
    <Columns
      columnsContent={[
        <>
          <HighlightedText>"This newsletter gets my creative juices flowing</HighlightedText>
          so I can dream up bold new marketing campaigns."
        </>,
        <>
          <HighlightedText>"Daily Build gives me fun new skills</HighlightedText>
          to whip up slick web apps for my side projects."
        </>,
        <>
          <HighlightedText>"Super useful tips that help make</HighlightedText>
          my portfolio shine!!"
        </>,
      ]}
    />
    <Spacer /> {/* Add the spacer here */}
    <Columns
  columnsContent={[
    <>
      <HighlightedText>"I'm a product manager and the quick step-by-step guides</HighlightedText>
      in Daily Build help me build new features that users will love."
    </>,
    <>
      <HighlightedText>"The coding snippets in Daily Build</HighlightedText>
      allowed me to build a cool website for my startup."
    </>,
    <>
      <HighlightedText>"Love this! I made a super slick data dashboard</HighlightedText>
      and some financial spreadsheets."
    </>,
  ]}
/>
  </div>
);

export default Rows;



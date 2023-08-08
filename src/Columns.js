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
    margin-bottom: 20px; // adds space between the stacked columns
  }

  &:last-child {
    margin-bottom: 0; // removes margin from the last column
  }
`;

const LastRowWrapper = styled.div`
  margin-bottom: 100px; // Adjust as needed
`;

const Spacer = styled.div`
  height: 20px; // Adjust this value as needed for padding between rows
`;

const HighlightedText = styled.span`
  background-color: #FFD700; // Your highlight color here
  padding: 0px 0px; // Padding around the highlighted text
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
          <HighlightedText><b>"This newsletter gets my creative juices flowing</b></HighlightedText> so I can dream up bold new marketing campaigns." —John J.
        </>,
        <>
          <HighlightedText>"Daily Build gives me fun new skills</HighlightedText> to whip up slick web apps for my side projects." —Sarah H.
        </>,
        <>
          <HighlightedText>"Super useful tips that help make</HighlightedText> my portfolio shine!!" —Massimo M.
        </>,
      ]}
    />
   // <Spacer /> {/* Add the spacer here */}
    <Columns
  columnsContent={[
    <>
      "I'm a product manager and <HighlightedText><b>the quick step-by-step guides</b></HighlightedText>
      "in Daily Build help me build new features that users will love." —Jaya K.
  </>,
    <>
      <HighlightedText>"The coding snippets in Daily Build</HighlightedText>
      allowed me to build a cool website for my startup." —Liz H.
    </>,
    <>
      <HighlightedText>"Love this! I made a super slick data dashboard</HighlightedText>
      and some financial spreadsheets." —Nidhi J.
    </>,
  ]}
/>
  </div>
);

export default Rows;



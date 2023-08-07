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
  font-size: 18px; // set the desired font size

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
        "This newsletter gets my creative juices flowing so I can dream up bold new marketing campaigns.",
        "Daily Build give me fun new skills to whip up slick web apps for my side projects.",
        "Super useful tips to build awesome new tech projects that will make my portfolio shine.",
      ]}
    />
    <Spacer /> {/* Add the spacer here */}
    <Columns
      columnsContent={[
        "I'm a product manager and the step-by-step guides in Daily Build empower me to confidently build new features that users will love.",
        "The coding snippets in Daily Build allowed me to build a dazzling interactive website for my startup.",
        "Love this! I made a super slick data dashboard.",
      ]}
    />
  </div>
);

export default Rows;



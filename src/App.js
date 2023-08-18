import React from 'react';
import Header from './Header';
import Separator from './Separator';
import Columns from './Columns';
import styled from 'styled-components';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #FEDE87;
    font-family: 'PT Sans', sans-serif;
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    body {
      padding: 20px; // Reduced padding for mobile devices
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px 100px 100px 100px;

  @media (max-width: 768px) {
    padding: 20px; // Reduced padding for mobile devices
  }
`;

const Content = styled.div`
  flex: 1;
`;

// Define a Spacer component
const Spacer = styled.div`
  height: 60px; // Adjust this value as needed
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Header />
        <Separator />
        <Columns />
        <Spacer /> {/* Add the spacer here */}
      </Content>
      <Footer />
    </Container>
  </>
);

export default App;




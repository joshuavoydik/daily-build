import styled from 'styled-components';

const Line = styled.hr`
  width: 100%;
  border: 2px solid black;
`;

const Separator = styled.div`
  height: 2px;
  background-color: #000;
  width: 100%; // full width of the container
  margin: 20px 0; // remove left and right margins
`;

export default Separator;

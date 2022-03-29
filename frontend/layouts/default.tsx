import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar/navbar';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
    </>
  );
};

export default DefaultLayout;

/* eslint-disable import/no-relative-packages */
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import StyledButton from '../components/primitives/button/button';

const Slogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  margin: 40px 0;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Reformat App</title>
        <meta name="description" content="Reformat App Home" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Slogan>
          LEBST
          <br />
          DU
          <br />
          DEIN
          <br />
          TALENT
          <br />?
        </Slogan>
        <StyledButton>Sign me up!</StyledButton>
      </div>
    </div>
  );
};

export default Home;

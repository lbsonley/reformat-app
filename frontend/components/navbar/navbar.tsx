import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const AppBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 48px;
`;

const Brand = styled.div`
  border-right: 1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
`;

const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Brand>
        <Link href="/" passHref>
          <StyledLink>LOGO</StyledLink>
        </Link>
      </Brand>
      <Links>
        <Link href="/user-list" passHref>
          <StyledLink>Users</StyledLink>
        </Link>
      </Links>
    </AppBar>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import StyledButton from '../primitives/button/button';

const AppBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const StyledNav = styled.nav`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 24px;
  color: #1d8190;
  font-weight: bold;
  padding: 12px 24px;
`;

const ReStyledButton = styled(StyledButton)`
  font-size: 16px;
  padding: 12px;
`;

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <AppBar>
      <StyledNav>
        <Brand>
          <Link href="/" passHref>
            <a>
              <Image src="/images/reformat-logo.jpeg" height={70} width={70} />
            </a>
          </Link>
        </Brand>
        <LinkList>
          <ReStyledButton onClick={() => router.push('/users/create')}>
            Create User
          </ReStyledButton>
          <Link href="/users" passHref>
            <StyledLink>Users</StyledLink>
          </Link>
        </LinkList>
      </StyledNav>
    </AppBar>
  );
};

export default Navbar;

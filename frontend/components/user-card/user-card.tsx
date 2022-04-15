import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
`;

const StyledAnchor = styled.a`
  flex: 1 0 auto;
  padding: 16px;
  cursor: pointer;
`;

const CardBody = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: left;
  align-items: center;
`;

const CardFooter = styled.div`
  margin-top: 30px;
`;

const HeaderText = styled.h2`
  margin: 0;
  max-width: 70%;
  overflow-wrap: break-word;
`;

const ActiveStatus = styled.span<{ activeStudent: boolean }>`
  display: inline-block;
  margin-right: 8px;
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.activeStudent ? 'green' : 'red')};
`;

const UserCard: React.FC<UserCardProperties> = ({
  id,
  name,
  activeStudent,
  archetypeId,
}) => {
  return (
    <Card>
      <Link href={`/users/${id}`} passHref>
        <StyledAnchor>
          <CardBody>
            <HeaderText>{name}</HeaderText>
            <Image
              src={`/images/${archetypeId}-50x50.png`}
              width="50px"
              height="50px"
            />
          </CardBody>
          <CardFooter>
            <ActiveStatus activeStudent={activeStudent} />
            <span>{activeStudent ? 'active' : 'inactive'}</span>
          </CardFooter>
        </StyledAnchor>
      </Link>
    </Card>
  );
};

export interface UserCardProperties {
  id: string;
  name: string;
  activeStudent: boolean;
  archetypeId?: string;
}

export default UserCard;

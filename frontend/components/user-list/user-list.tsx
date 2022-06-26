import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Row, Col } from 'react-grid-system';
import { User } from '../../types/schema';
import ClientOnly from '../client-only';
import UserCard from '../user-card/user-card';

const GET_USERS = gql`
  query AllUsers {
    users {
      id
      firstName
      lastName
      profile {
        archetypeId
      }
    }
  }
`;

const UserList = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error(error);
    return null;
  }

  const { users }: { users: User[] } = data;

  return (
    <ClientOnly>
      <Container>
        <Row>
          {users.length > 0 ? (
            users.map(({ id, firstName, lastName, profile }) => (
              <Col xs={12} md={4}>
                <UserCard
                  key={id}
                  id={id}
                  name={`${firstName} ${lastName}`}
                  archetypeId={profile?.archetypeId}
                />
              </Col>
            ))
          ) : (
            <p>No Users</p>
          )}
        </Row>
      </Container>
    </ClientOnly>
  );
};

export default UserList;

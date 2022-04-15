import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { User } from '../../types/schema';
import ClientOnly from '../client-only';
import UserCard from '../user-card/user-card';

const GET_USERS = gql`
  query AllUsers {
    users {
      id
      firstName
      lastName
      activeStudent
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
      {users.length > 0 ? (
        users.map(({ id, firstName, lastName, activeStudent }) => (
          <UserCard
            key={id}
            id={id}
            name={`${firstName} ${lastName}`}
            activeStudent={activeStudent}
          />
        ))
      ) : (
        <p>No Users</p>
      )}
    </ClientOnly>
  );
};

export default UserList;

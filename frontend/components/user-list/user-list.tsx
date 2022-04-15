import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { User } from '../../types/schema';
import ClientOnly from '../client-only';
import UserCard from '../user-card/user-card';

const GET_USERS = gql`
  query AllUsers {
    allUsers {
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

  const { allUsers }: { allUsers: User[] } = data;

  return (
    <ClientOnly>
      {allUsers.length > 0 ? (
        allUsers.map(({ id, firstName, lastName, activeStudent }) => (
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

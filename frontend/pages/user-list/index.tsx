/* eslint-disable import/no-relative-packages */
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { User } from '../../types/schema';
import UserCard from '../../components/user-card/user-card';

interface UserListProperties {
  users: User[];
}

const UserList: NextPage<UserListProperties> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>User List | Reformat App</title>
        <meta name="description" content="Reformat App User List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Users</h1>
      {users.length > 0 ? (
        users.map(({ firstName, lastName, email, animal }) => (
          <UserCard
            key={email}
            name={`${firstName} ${lastName}`}
            email={email}
            animal={animal}
          />
        ))
      ) : (
        <p>No Users</p>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allUsers {
          id
          email
          firstName
          lastName
          language
          animal
        }
      }
    `,
  });

  return {
    props: {
      users: data.allUsers,
    },
  };
}

export default UserList;

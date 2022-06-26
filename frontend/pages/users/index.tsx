/* eslint-disable import/no-relative-packages */
import type { GetServerSideProps, NextPage } from 'next';
import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import UserList from '../../components/user-list/user-list';

const UsersPage: NextPage<{ users: any }> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>User List | Reformat App</title>
        <meta name="description" content="Reformat App User List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Users</h1>
      <UserList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      users: data.users,
    },
  };
};

export default UsersPage;

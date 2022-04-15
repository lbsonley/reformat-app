/* eslint-disable import/no-relative-packages */
import type { NextPage } from 'next';
import Head from 'next/head';
import UserList from '../../components/user-list/user-list';

const UsersPage: NextPage = () => {
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

export default UsersPage;

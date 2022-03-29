/* eslint-disable import/no-relative-packages */
import type { NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import { User } from '../../backend/prisma/generated/type-graphql/models';
import styles from '../styles/Home.module.css';

interface HomeProperties {
  users: User[];
}

const Home: NextPage<HomeProperties> = ({ users }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reformat App - Home</title>
        <meta name="description" content="Reformat App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {users.length > 0 ? (
        users.map((user) => <pre>{JSON.stringify(user, null, 2)}</pre>)
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

export default Home;

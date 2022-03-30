import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import client from '../apollo-client';
import DefaultLayout from '../layouts/default';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </DefaultLayout>
  );
}

export default MyApp;

import React from 'react';
import Link from 'next/link';
import MyHeader from '../components/ui/MyHeader';

const IndexPage = () => (
  <>
    <MyHeader>
      <h1>here i am</h1>
    </MyHeader>
  </>
);

export default IndexPage;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql,
    cache: new InMemoryCache(),
  })
  
}

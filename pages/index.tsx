import React from "react";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { Layout, Header, ProductList, NewsletterForm, SocialLinks } from "../components";
// import {  } from "../components/NewsletterForm";
// import {  } from "../components/SocialLinks";
import { fetchPosts, fetchProducts } from "../hooks";

const Home = () => {
  return (
    <Layout>
      <Header />
      <NewsletterForm/>
      <SocialLinks/>
      <ProductList />
    </Layout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts(10));
  await queryClient.prefetchQuery(["products", 1], () => fetchProducts(1));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;

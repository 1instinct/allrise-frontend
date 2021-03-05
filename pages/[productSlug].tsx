import * as React from "react";
import { useRouter } from "next/router";
import { Layout } from "../components";
import { useProduct } from "../hooks/useProduct";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { data, isLoading, isFetching } = useProduct(`${productId}`);

  const source = `http://localhost:8080${data?.included[0].attributes.styles[2].url}`;

  return (
    <Layout>
      <div className="product-container">
        <img src={source} />
        <h1>{data?.data.attributes.name}</h1>
        <div>
          <h3>${data?.data.attributes.price}</h3>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

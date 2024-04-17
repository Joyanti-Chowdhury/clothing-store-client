import SingleProduct from "@/components/ui/singleProduct/SingleProduc";
import React from "react";

const SingleProductPage = async ({ params } : any) => {
  // console.log(params);
  const res = await fetch(`https://clothing-store-server-blond.vercel.app/products/${params.id}`, {
    next: {
      revalidate: 30,
    },
  });

  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <SingleProduct products={products}></SingleProduct>
    </div>
  );
};

export default SingleProductPage;

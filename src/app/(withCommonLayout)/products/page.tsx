import AllProducts from "@/components/ui/allProduct/AllProducts";
// import AllProduct from "@/components/ui/allProducts/AllProduct";
// import sidebar from "@/components/ui/allProducts/sidebar";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://clothing-store-server-blond.vercel.app/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const productsArr = await res.json();
  return (
    <div>
      {/* <AllProducts></AllProducts>
            <AllProduct></AllProduct> */}
      <AllProducts products={productsArr}></AllProducts>
    </div>
  );
};

export default AllProductsPage;

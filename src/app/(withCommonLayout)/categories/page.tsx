
import Category from "@/components/ui/HomePage/category/Category";

const CategoriesPage =  () => {
//   const res = await fetch(
//     "https://grocery-store-server-red.vercel.app/categories",
//     {
//       next: {
//         revalidate: 30,
//       },
//     }
//   );
//   const Categories = await res.json();
  return (

       
    // <div>
    //   <div className="w-[90%] mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
    //       {Categories?.map((category: any) => (
    //         <CategoryCard key={category._id} category={category} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

     <Category></Category>


  );
};

export default CategoriesPage;

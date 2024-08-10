import SingleProduct from '@/components/ui/singleProduct/SingleProduc';
import React from 'react';

const KidsProductPage = async ({ params } : any)  => {
    const res = await fetch(`https://clothing-store-server-blond.vercel.app/kids/${params.id}`, {
        next: {
          revalidate: 30,
        },
      });
    
      const kids = await  res.json();
    return (
        <div>
             <SingleProduct kids={kids}></SingleProduct>
        </div>
    );
};

export default KidsProductPage;
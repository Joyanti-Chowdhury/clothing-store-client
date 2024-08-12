import React, { useEffect } from 'react';

const Filtering = ({products} : {products : any}) => {
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    useEffect(() => {
        setFilteredProducts(products)
    },[products])

    const handleCheckboxChange = (filterType: string, value: string) => {
        const filtered = products.filter(product => {
            switch (filterType) {
                case 'category':
                    return product.category === value;
                case 'ratings':
                    const rating = parseFloat(value);
                    return product.ratings >= rating && product.ratings < rating + 1;
                case 'price':
                    const priceFiltered = checkPriceRange(product.price, value);
                    return priceFiltered;
                default:
                    return true;
            }
        });
        setFilteredProducts(filtered);
    };
    
    const checkPriceRange = (price: number, range: string) => {
        const [min, max] = range.split('-').map(range => parseFloat(range.trim()));
        return price >= min && price <= max;
    };

    return (
        <>
            
        </>
    );
};

export default Filtering;
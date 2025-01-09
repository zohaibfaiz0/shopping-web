'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";

interface Product {
  id?: string;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string | number;
}

interface ApiProduct {
  id?: string;
  image?: string;
  img?: string;
  name?: string;
  title?: string;
  description?: string;
  desc?: string;
  rating?: number;
  price?: string | number;
}

const NewProducts: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch('https://678013030476123f76a9768b.mockapi.io/apiv2/products'); // Replace with your API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data: ApiProduct[] = await response.json();
        const transformedData: Product[] = data.map(item => ({
          img: item.image || item.img || '/path/to/placeholder-image.jpg', // Use a placeholder image if empty
          title: item.name || item.title || 'Untitled', // Default title if none
          desc: item.description || item.desc || 'No description available', // Default description if none
          rating: item.rating || 0,
          price: item.price || '0' // Ensure price is a string
        }));
        
        setProductsData(transformedData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-4">Error: {error}</div>;

  return (
    <div>
      <div className='container pt-16'>
        <h2 className='pb-4 text-2xl text-center font-medium'>
          <span className='text-red-600'>━━</span> New Arrivals <span className='text-red-600'>━━</span>
        </h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-2 lg:place-items-center xl:grid-cols-3 gap-10 xl:gap-20 xl:gap-y-10'>
          {productsData.map((item, index) => (
            <ProductCard
              key={item.id || index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
import React from 'react';
import MenProduct from '../../components/MenProducts';

// Centralized product data with category information
const productCategories = {
  Shirts: [
    {
      img: "/assets/shirt.png",
      title: "Evening Dress",
      desc: "Elegant floor-length dress with delicate sequin embellishments, ideal for formal events.",
      rating: 4,
      price: "$95"
    },
    {
      img: "/assets/shirt2.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$65"
    },
    {
      img: "/assets/shirt3.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$65"
    },
    {
      img: "/assets/shirt4.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 3,
      price: "$65"
    },
    {
      img: "/assets/shirt5.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$65"
    }
  ],
  Jeans: [
    {
      img: "/assets/j1.jpg",
      title: "Evening Dress",
      desc: "Elegant floor-length dress with delicate sequin embellishments, ideal for formal events.",
      rating: 4,
      price: "$95"
    },
    {
      img: "/assets/j2.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$65"
    },
    {
      img: "/assets/j3.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$65"
    },
    {
      img: "/assets/j4.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 3,
      price: "$65"
    },
    {
      img: "/assets/j5.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$65"
    }
  ],
  Shoes: [
    {
      img: "/assets/shoes1.png",
      title: "Sneakers",
      desc: "Comfortable and stylish athletic sneakers with breathable mesh and cushioned sole.",
      rating: 5,
      price: "$80"
    },{
      img: "/assets/shoes2.png",
      title: "Sneakers",
      desc: "Comfortable and stylish athletic sneakers with breathable mesh and cushioned sole.",
      rating: 5,
      price: "$80"
    },
    {
      img: "/assets/shoes3.jpg",
      title: "Sneakers",
      desc: "Comfortable and stylish athletic sneakers with breathable mesh and cushioned sole.",
      rating: 3,
      price: "$80"
    },
    {
      img: "/assets/shoes4.jpg",
      title: "Sneakers",
      desc: "Comfortable and stylish athletic sneakers with breathable mesh and cushioned sole.",
      rating: 4,
      price: "$80"
    },
    {
      img: "/assets/shoes5.jpg",
      title: "Sneakers",
      desc: "Comfortable and stylish athletic sneakers with breathable mesh and cushioned sole.",
      rating: 4,
      price: "$80"
    },
  ],
  Caps: [
    {
      img: "/assets/c1.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$20"
    },
    {
      img: "/assets/c2.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$20"
    },
    {
      img: "/assets/c3.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 3,
      price: "$20"
    },
    {
      img: "/assets/c4.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$20"
    },
    {
      img: "/assets/c5.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$20"
    },

  ],
  TShirts: [
    {
      img: "/assets/t1.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$20"
    },
    {
      img: "/assets/t2.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$20"
    },
    {
      img: "/assets/t3.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 3,
      price: "$20"
    },
    {
      img: "/assets/t4.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$20"
    },
    {
      img: "/assets/t5.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 5,
      price: "$20"
    },
    {
      img: "/assets/t6.jpg",
      title: "Slim Fit Jeans",
      desc: "Classic slim-fit jeans with stretch fabric for maximum comfort and style.",
      rating: 4,
      price: "$20"
    },

  ]
};

const FeaturedProductsPage = () => {
  return (
    <div className="min-h-screen">
      <div className='container pt-16'>
        {Object.entries(productCategories).map(([category, products]) => (
          <div key={category}>
            <h1 className='pb-4 text-center text-3xl font-medium'>
              <span className='text-red-600'>━━</span> {category.charAt(0).toUpperCase() + category.slice(1)} <span className='text-red-600'>━━</span>
            </h1>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-2 lg:place-items-center xl:grid-cols-4 gap-10 xl:gap-20 xl:gap-y-10'>
              {products.map((product, index) => (
                <MenProduct
                  key={`${category}-${index}`}
                  img={product.img}
                  title={product.title}
                  desc={product.desc}
                  rating={product.rating}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsPage;
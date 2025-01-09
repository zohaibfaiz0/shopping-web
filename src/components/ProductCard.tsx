'use client';
import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useCart } from '../contexts/CartContext'; // Adjusted the import path

interface ProductCardProps {
    img: string;
    title: string;
    price: string ;
    desc: string;
    rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, price, rating }) => {
    const { addToCart } = useCart();
    
    // Remove '$' if present and convert to number
    const numericPrice = parseFloat(price.replace('$', ''));

    const generateStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<AiFillStar key={i} />);
            } else {
                stars.push(<AiOutlineStar key={i} />);
            }
        }
        return <div className='flex gap-1 text-[20px] text-[#FF9529]'>{stars}</div>;
    };

    const handleAddToCart = () => {
        const product = {
            id: Date.now(), // Unique ID for this product (you can replace with actual unique ID)
            name: title,
            price: numericPrice,
            image: img,
        };
        addToCart(product);
    };

    return (
        <div className='w-full max-w-sm border border-gray-200 rounded-xl overflow-hidden flex flex-col h-[450px]'> {/* Set a fixed height */}
            {/* Image Container */}
            <div className='aspect-[4/3] relative w-full h-2/3'> {/* Adjust height to fit within the card */}
                <Image 
                    src={img} 
                    alt={title}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover object-center"
                />
            </div>
            
            {/* Content Container */}
            <div className='p-4 flex flex-col justify-between flex-grow'> {/* Use flex-grow to fill space */}
                <div>
                    <h2 className='text-accent font-medium uppercase truncate'>{title}</h2>
                    <p className='text-gray-500 line-clamp-2 text-sm'>{desc}</p>
                    {generateStars(rating)}
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <span className='text-lg font-bold'>${numericPrice.toFixed(2)}</span>
                    <button 
                        onClick={handleAddToCart} // Add functionality to button
                        className='bg-accent hover:bg-blackish transition-all duration-200 ease-in-out text-white py-2 px-4 rounded-full'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
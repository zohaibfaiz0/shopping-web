import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface ProductCardProps {
    img: string;
    title: string;
    price: string;
    desc: string;
    rating: number;
}

const MenProduct: React.FC<ProductCardProps> = ({img, title, desc, price, rating}) => {
    const numericPrice = parseFloat(price.replace('$', ''));

    const generateStars = (rating: number) => {
        return (
            <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                {[1, 2, 3, 4, 5].map((star) => (
                    star <= rating ? <AiFillStar key={star} /> : <AiOutlineStar key={star} />
                ))}
            </div>
        );
    }

    return (
        <div className='w-full max-w-sm border border-gray-200 rounded-xl overflow-hidden flex flex-col'>
            <div className='aspect-[4/3] relative w-full'>
                <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover object-center"
                />
            </div>

            <div className='p-4 flex flex-col gap-2'>
                <h2 className='text-accent font-medium uppercase truncate'>{title}</h2>
                <p className='text-gray-500 line-clamp-2 text-sm'>{desc}</p>
                {generateStars(rating)}
                <div className='flex items-center gap-4 mt-4'>
                    <span className='text-lg font-bold'>${numericPrice.toFixed(2)}</span>
                    <span className='text-gray-400 line-through'>${(numericPrice + 50).toFixed(2)}</span>
                </div>
                <div>
                    <button className='bg-accent hover:bg-blackish transition-all duration-200 ease-in-out text-white py-2 px-4 rounded-full'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenProduct;
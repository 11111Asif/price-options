import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, features, price } = option
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-semibold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-4">{name}</h4>
            <div className='pl-10 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-10 bg-green-600 w-full font-bold py-4 rounded-lg hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

export default PriceOption;
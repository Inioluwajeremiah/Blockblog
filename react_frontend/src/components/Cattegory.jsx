import React, { useState } from 'react';

// import data
import { category } from './data';

// import icons
import { IoIosArrowForward } from 'react-icons/io';

const Category = () => {
  // item name state
  const [itemName, setItemName] = useState('Bitcoin');
  return (
    <section className='section lg:pt-[100px] bg-yellow-50 text-black lg:-mt-[320px]'>
      <div className='container mx-auto'>
        <h2
          className='section-title text-center mb-16'
          data-aos='fade-up'
          data-aos-offset='400'
        >
          Choose A Category.
        </h2>
        {/* items */}
        <div
          className='flex flex-col gap-[45px] lg:flex-row'
          data-aos='fade-up'
          data-aos-offset='450'
        >
          {category.map((item, index) => {
            // destructure item
            const { image, name, description } = item;
            return (
              // item
              <div
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? ' bg-blue text-black' : 'bg-white'
                } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}
              >
                <div className='flex flex-col justify-center items-center'>
                  {/* item image */}
                  <img className='mb-12 w-10' src={image} alt='' />
                  {/* item name */}
                  <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px] font-bold'>{name}</div>
                  
                  </div>
                  {/* item description */}
                  <p className='mb-6 text-center'>{description}</p>
                  {/* btn */}
        
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;

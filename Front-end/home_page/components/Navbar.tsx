'use client'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants/test';
import Search from '@/components/Search';
import { fetchQuantity } from '@/cartstore/cartstore';
import { useState, useEffect, use } from 'react';
function Navbar() {
  const [incart, setInCart] = useState(0); // Initialize with 0 or default value

  useEffect(() => {
    async function fetchAndUpdateQuantity() {
      try {
        const newQuantity = await fetchQuantity();
        setInCart(newQuantity);
      } catch (error) {
        // Handle fetch error if needed
      }
    }

    // Fetch quantity when the component mounts
    fetchAndUpdateQuantity();

    // Set up interval to continuously fetch quantity (optional)
    const interval = setInterval(fetchAndUpdateQuantity, 1000); // Fetch every 5 seconds, for example

    // Clear interval on component unmount (optional)
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className=' flexBetween navbar mb-20 '>
      <div className='flex-1 flexStart  '>
        <Link href="/" className='ml-6 ' >
          <Image className='max-w-none'
            src="/logo.svg" alt="Bookz"
            width={70}
            height={10}
          />

        </Link>
        {/* p-10 vs ml-10 mr-10 gap?*/}
        <ul className=' flexBetween pb-10 pt-10 pl-10 mr-10 gap-7 font-medium '>
          {/* dropdown categories */}
          {
            NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>

                {link.text}
              </Link>
            ))}
        </ul>
        {/* Title */}
        <div className='flexBetween m-auto'>
          <h1 className='lobester text-3xl flexBetween'>
            Welcome To Our Bookstore
          </h1>
        </div>
        {/* Search block */}
        <div className=' ml-10 gap-x-10 flexBetween mr-7'>
          <div className='flexBetween'>

            {/* Search bar */}
            <Search />
          </div>

          <div className='flexBetween'>
            <button className='flexBetween ' >
              <Link href={"/"}>
                <Image className='max-w-none'
                  src="/bookshelf.svg" alt="bookshelficon"
                  width={40}
                  height={10}
                />
                <span key={1} className=' absolute right-6 top-10 circle-block text-sm'>{incart}</span>

              </Link>
            </button>
          </div>
        </div>



      </div>
    </nav>
  )
}
export default Navbar;
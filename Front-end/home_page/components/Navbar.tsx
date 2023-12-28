'use client'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants/test';
import Search from '@/components/Search';
import { fetchQuantity } from '@/cartstore/cartstore';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const [incart, setInCart] = useState(0); // Initialize with 0 or default value
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(true);
    const timer = setTimeout(() => setChange(false), 300);
    return () => clearTimeout(timer);
  }, [incart]);

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




  const router = useRouter();


  const smoothScrollTo = (href: string) => (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });
    }

  };

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
        <ul className=' flexBetween pb-10 pt-10 pl-10 mr-10 gap-7 font-medium flex-shrink-0'>
          {/* dropdown categories */}
          <Link href={"/categories/default"}>Categories</Link>
          {
            NavLinks.map((link) => (
              <Link href={link.href} key={link.key} passHref legacyBehavior>
                <Link onClick={smoothScrollTo(link.href)} href={'  '}>{link.text}</Link>
              </Link>
            ))}
        </ul>
        {/* Title */}
        <div className='flexBetween m-auto'>
          <h1 className='lobester text-3xl flexBetween flex-shrink-0 m-auto'>
            Welcome To Our Bookstore
          </h1>
        </div>
        {/* Search block */}
        <div className=' ml-10 gap-x-10 flexBetween mr-7 flex-shrink-0 '>
          <div className='flexBetween'>

            {/* Search bar */}
            <Search />
          </div>

          <div className='flexBetween flex-shrink-0'>
            <button className='flexBetween ' >
              <Link href={"http://127.0.0.1:5500/Front-end/cart_page/cart.html"}>
                <div className='relative'>
                  <Image className='max-w-none'
                    src="/bookshelf.svg" alt="bookshelficon"
                    width={40}
                    height={10}
                  />
                  <span key={1} className={`absolute top-6 left-7 counter flex items-center justify-center w-4 h-4 bg-black text-white text-xs rounded-full ${change ? 'change' : ''}`}>{incart}</span>
                </div>
              </Link>
            </button>
          </div>
        </div>



      </div>
    </nav>
  )
}
export default Navbar;
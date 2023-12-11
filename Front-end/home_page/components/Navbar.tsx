'use client'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants/test';
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Search from '@/components/Search';

function Navbar() {

 
  
  return (
    <nav className=' flexBetween navbar mb-20 '>
      <div className='flex-1 flexStart'>
        <Link href="/">
          <Image className='ml-6'
            src="/logo.svg" alt="Bookz"
            width={70}
            height={10}
          />

        </Link>
        {/* p-10 vs ml-10 mr-10 gap?*/}
        <ul className=' flexBetween p-10 gap-7 font-medium'>
          {/* dropdown categories */}
          {
            NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>

                {link.text}
              </Link>
            ))}
        </ul>
        {/* Search icon */}
        <div className='flexBetween '>
          
          {/* Search bar */}
          <Search />
        </div>

        <div className='flexBetween ml-10 '>
          <button >
            <Link href={"/cart"}>
              <Image
                src="/bookshelf.svg" alt="bookshelficon"
                width={28}
                height={18}
              />
            </Link>
          </button>
        </div>




      </div>
    </nav>
  )
}
export default Navbar;
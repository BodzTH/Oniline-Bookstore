import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';

var x: string = "";
function Navbar() {
  return (
    <nav className=' flexBetween navbar mb-20 '>
      <div className='flex-1 flexStart ml-6'>
        <Link href="/">
          <Image className=''
            src="/logo.svg" alt="Bookz"
            width={90}  
            height={10}
          />

        </Link>
        {/* p-10 vs ml-10 mr-10 gap?*/}
        <ul className=' flexBetween p-10 gap-12 text-xl font-serif'>
          {/* dropdown categories */}
          {
            NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>

                {link.text}
              </Link>
            ))}
        </ul>
        {/* Search icon */}
        <div className='flexBetween ml-9 '>
          <button className='pr-5'>
            <Link href={"/searchfound"} >
              <Image
                src="/search.svg" alt="Bookz"
                width={35}
                height={10}
              />
            </Link>
          </button>
          {/* Search bar */}
          <input type="search" className='searchbar text-center placeholder:text-border-color' placeholder='Search' />
        </div>

        <div className='flexBetween ml-44 '>
          <button >
            <Link href={"/cart"}>
              <Image
                src="/bookshelf.svg" alt="bookshelficon"
                width={40}
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
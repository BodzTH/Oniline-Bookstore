import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';

function Navbar() {
 return (
  <nav className='flexBetween navbar'>
    <div className='flex-1 flexStart gap-10'>
      <Link href="/">
        <Image 
           src="/logo.svg" alt="Bookz"
           width={115}
           height={43}
           />
      </Link>
      <ul className='xl:flex hidden gap-7 text-sm font-medium'>
        {
          NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
            
            {link.text}
            </Link>
          ))}
      </ul>
    </div>
    <div className='gap-4 flex justify-center items-center'>
      
    </div>
  </nav>
 )
}
export default Navbar;
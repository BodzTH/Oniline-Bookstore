import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';

function Navbar() {
  return (
    <nav className=' flexBetween navbar mb-16 z-20'>
      <div className='flex-1 flexStart'>
        <Link href="/">
          <Image className='ml-6'
            src="/logo.svg" alt="Bookz"
            width={70}
            height={10}
          />

        </Link>
        {/* p-10 vs ml-10 mr-10*/}
        <ul className=' flexBetween p-10 gap-7 text-sm font-medium'>
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
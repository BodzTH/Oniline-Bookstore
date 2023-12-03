import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type ColumnProps = {
  title: string;
  links: string[];
};

function FotorColumn ({title,links}: ColumnProps){
return(
  <div className='footer_column'>
  <h4 className='font-semibold'>
    {title}
  </h4>
  <ul
  className='flex flex-col gap-2 font-normal'>
    {links.map((link) => (
      <Link href='/' key={link}>{link}</Link>
    ))}
  </ul>
</div>

)
}

function Footer() {
    return (
      <footer className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex items-start flex-col">
            <Image
            src="/logo-purple.svg"
            alt="Bodz"
            width={115}
            height={83}
            />
            <p className='text-start text-sm font-normal mt-5 max-w-xs'>
              Bookz is a book review site. We provide reviews of books and let you know which ones are worth your time and money.
            </p>

          </div> 

          <div className='flex flex-wrap gap-12'>
            <FotorColumn title={footerLinks[0].title}
            links={footerLinks[0].links}/>
          </div>
        </div>

        
        
      </footer>
    )
   }
   export default Footer;
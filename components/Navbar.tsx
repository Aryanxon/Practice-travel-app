import { NAV_LINKS } from '@/Constant'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'


const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image className="rounded-full" src={"./Alfa.jpeg"} alt='ALFA' width={"70"} height={"70"}/>
      </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCentre cursor-pointer pb-1.5 transition-ALL hover:font-bold'>
              {link.label}
            </Link>
            ))
          }
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button
          type="button"
          title="Login"
          icon="./user.svg"
          variant="btn_dark_green"/>
        </div>

        <Image 
        src="./menu.png"
        alt="menu"
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        />

    </nav>
  )
}

export default Navbar

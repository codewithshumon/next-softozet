'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiMenu } from 'react-icons/bi';

import SvgLogo from './global/SvgLogo';
import Button from './global/Button';

const navMenus = [
  { path: '/home', display: 'HOME' },
  { path: '/services', display: 'SERVICES' },
  { path: '/work', display: 'WORK' },
  { path: '/about', display: 'ABOUT US' },
  { path: '/contact', display: 'CONTACT US' },
];

const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleStickyHeader = () => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add('sticky_header');
      } else {
        headerRef.current?.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current?.classList.toggle('show-menu');

  return (
    <header
      ref={headerRef}
      className="absolute top-0 z-20 p-5 w-full h-[100px] "
    >
      <div className="container text-white flex items-center justify-between">
        <nav className="flex items-center gap-3">
          <SvgLogo width={50} height={50} />
          <Link href={'/'}>
            <span className="text-[24px] leading-7 font-[800]">SOFTOZET</span>
          </Link>
        </nav>
        <div className="w-[50%] h-full flex justify-center rounded-full">
          <div className="w-fit flex flex-row justify-between px-4 py-2 items-center gap-5 border-gradient-color">
            {navMenus.map((menu, index) => (
              <nav
                key={index}
                className={`${
                  menu.path === pathname
                    ? 'text-primaryColor'
                    : ' text-gray-100'
                } text-[12px] leading-7 font-[600]`}
              >
                <Link href={menu.path}>{menu.display}</Link>
              </nav>
            ))}
          </div>
        </div>

        <nav className="text-[12px] leading-7 font-[600] border-[3px] border-solid botton-gradient">
          <Button
            onClick={() => {}}
            title="FREE CONSULTATION"
            className=" px-2 py-[1px] cursor-pointer select-none"
          />
        </nav>
        <span className="md:hidden" onClick={toggleMenu}>
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
      </div>
    </header>
  );
};

export default Header;

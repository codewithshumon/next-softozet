import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../global/Button';
import { usePathname } from 'next/navigation';

import Styles from './Header.module.css';

const navMenus = [
  { path: '/home', display: 'HOME' },
  { path: '/services', display: 'SERVICES' },
  { path: '/work', display: 'WORK' },
  { path: '/about', display: 'ABOUT US' },
  { path: '/contact', display: 'CONTACT US' },
];

const HeaderSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);
  const pathname = usePathname();

  const hadleShowSidebar = () => {
    setShowSidebar(true);
    setCloseSidebar(false);
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setCloseSidebar(true);
  };
  return (
    <div className="z-30">
      <div
        onClick={handleCloseSidebar}
        className={`${
          showSidebar ? 'fixed inset-0 w-full h-screen bg-white/40' : ''
        }`}
      >
        <div
          className={`${showSidebar ? Styles.bigContainerIn : ''} ${
            closeSidebar ? Styles.bigContainerOut : ''
          } translate-x-[100%] h-full bg-red-500`}
        >
          <div className="md:hidden h-screen fixed top-0 right-0 w-[95%] rounded-l-full bg-[#243887] p-7 pr-0 overflow-hidden">
            <div
              className={`${showSidebar ? Styles.smallContainerIn : ''} ${
                closeSidebar ? Styles.smallContainerOut : ''
              } w-full h-full translate-x-[100%]`}
            >
              <div className=" w-full h-full rounded-l-full bg-[#8c27e5]">
                <div
                  className={`${showSidebar ? Styles.menuContainerIn : ''} ${
                    closeSidebar ? Styles.menuContainerOut : ''
                  } w-full h-full translate-x-[100%]`}
                >
                  <div className="absolute w-[60%] right-[5%] xs:right-[10%] py-[50%] xs:py-[20%] h-full flex flex-col justify-around">
                    <div className="">
                      <div className="text-[16px] xs:text-[28px] leading-7 font-[600] border-[3px] border-solid botton-gradient text-white">
                        <Button
                          onClick={() => {}}
                          title="FREE CONSULTATION"
                          className=" px-2 py-[1px] cursor-pointer select-none"
                        />
                      </div>
                    </div>
                    <div className=" ">
                      {navMenus.map((menu, index) => (
                        <nav
                          key={index}
                          className={`${
                            menu.path === pathname
                              ? 'text-primaryColor'
                              : ' text-gray-100'
                          } text-[16px] xs:text-[24px] leading-7 xs:leading-10 font-[600]`}
                        >
                          <Link href={menu.path}>{menu.display}</Link>
                        </nav>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebar;

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import gsap from "gsap";

import SvgLogo from "../global/SvgLogo";
import Button from "../global/Button";

import Styles from "./Header.module.css";
import useScrollY from "@/app/libs/useScroll";

const navMenus = [
  { path: "/home", display: "HOME" },
  { path: "/services", display: "SERVICES" },
  { path: "/work", display: "WORK" },
  { path: "/about", display: "ABOUT US" },
  { path: "/contact", display: "CONTACT US" },
];

const Header = () => {
  const scrollY = useScrollY();
  const scrollRef = useRef(scrollY);
  const [showSidebar, setShowSidebar] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    gsap.to(".scroll-translate-up", {
      yPercent: -300,
      duration: 1,
      ease: "none",
    });
    gsap.to(".scroll-translate-down", {
      yPercent: 0,
      duration: 0.5,
      ease: "none",
    });
  }, [scrollY]);

  useEffect(() => {
    scrollRef.current = scrollY;
  }, [scrollY]);

  const hadleShowSidebar = () => {
    setShowSidebar(true);
    setCloseSidebar(false);
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setCloseSidebar(true);
  };

  return (
    <>
      <div className="z-30 relative">
        <div
          onClick={handleCloseSidebar}
          className={`${
            showSidebar ? "fixed inset-0 w-full h-screen bg-white/40" : ""
          }`}
        >
          <div
            className={`${showSidebar ? Styles.bigContainerIn : ""} ${
              closeSidebar ? Styles.bigContainerOut : ""
            } translate-x-[100%] h-full`}
          >
            <div className="md:hidden h-screen fixed top-0 right-0 w-[95%] rounded-l-full bg-[#243887] p-7 pr-0 overflow-hidden">
              <div
                className={`${showSidebar ? Styles.smallContainerIn : ""} ${
                  closeSidebar ? Styles.smallContainerOut : ""
                } w-full h-full translate-x-[100%]`}
              >
                <div className=" w-full h-full rounded-l-full bg-[#8c27e5]">
                  <div
                    className={`${showSidebar ? Styles.menuContainerIn : ""} ${
                      closeSidebar ? Styles.menuContainerOut : ""
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
                                ? "text-primaryColor"
                                : " text-gray-100"
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
      <header className=" fixed bg-transparent top-0 z-20 py-10 md:py-5 md:px-5 w-full h-[50px] md:h-[100px]">
        <div className="container text-white flex items-center justify-between">
          <nav className="flex items-center gap-3">
            <div
              className=""
              style={{
                transform: `rotate(-${scrollY}deg)`,
                transition: "transform 0.2s",
              }}
            >
              <SvgLogo width={55} height={55} />
            </div>
            <Link
              href={"/"}
              className={
                scrollRef.current < scrollY
                  ? "scroll-translate-up"
                  : "scroll-translate-down"
              }
            >
              <span className="text-[12px] xs:text-[16px] md:text-[24px] leading-7 font-[800]">
                SOFTOZET
              </span>
            </Link>
          </nav>
          <div
            className={`${
              scrollRef.current < scrollY
                ? "scroll-translate-up"
                : "scroll-translate-down"
            } hidden md:flex w-[50%] h-[90%]  justify-center rounded-full`}
          >
            <div className="w-fit flex flex-row justify-between px-4 items-center gap-5 border-gradient-color ">
              {navMenus.map((menu, index) => (
                <nav
                  key={index}
                  className={`${
                    menu.path === pathname
                      ? "text-primaryColor"
                      : " text-gray-100"
                  } text-[12px] font-[600]`}
                >
                  <Link href={menu.path}>{menu.display}</Link>
                </nav>
              ))}
            </div>
          </div>

          <nav className=" hidden md:flex text-[12px]  leading-7 font-[600] border-[3px] border-solid botton-gradient">
            <Button
              onClick={() => {}}
              title="FREE CONSULTATION"
              className=" px-2 py-[1px] cursor-pointer select-none"
            />
          </nav>
          <span className="block md:hidden" onClick={hadleShowSidebar}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;

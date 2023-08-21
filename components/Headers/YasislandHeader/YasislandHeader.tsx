import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import YasislandHeaderData from "./YasislandHeader.mock-data";
import { Bebas_Neue } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import localFont from "next/font/local";


export interface YasislandHeaderProps {
  fields: {
    logo: Logo;
    languages: Languages;
    navlinks: Navlink[];
  };
}

export interface Logo {
  desktopImage: DesktopImage;
}

export interface DesktopImage {
  height: string;
  src: string;
  width: string;
}

export interface Languages {
  label: string;
  language: Language[];
}

export interface Language {
  languageName: string;
  languageCode: string;
  languageFlag: string;
  url: string;
}

export interface Navlink {
  navInfo: NavInfo;
}

export interface NavInfo {
  itemText: string;
  navLinks?: NavLink[];
  featuredTitle?: string;
  featuredLinks?: FeaturedLink[];
}
export interface FeaturedLink {
  featuredimage: string;
}
export interface NavLink {
  label: string;
  linkData: LinkDaum[];
  ctaDetails?: CtaDetails;
}

export interface LinkDaum {
  ctaDetail: CtaDetail;
}
export interface CtaDetail {
  href: string;
  label: string;
}

export interface CtaDetails {
  href: string;
  label: string;
}

const babas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const ddin = localFont({ src: "./static/DINCond-Regular Regular.otf" });
export default function YasislandHeader({ fields }: YasislandHeaderProps) {
  const [activeLanguage, setActiveLanguage] = useState("");
  const [activeLink, setActiveLink] = useState(-1);
  const [languageshow, setLanguageShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.onclick = function (e) {
      if (languageshow) {
        setLanguageShow(false);
      }
    };
  }, []);
  const handleActiveLink = (val: number) => {
    val === activeLink ? setActiveLink(-1) : setActiveLink(val);
  };
  return (
    <div className={`header py-5  ${babas.className} font-thin`}>
      <div className="md:container md:mx-auto ">
        <div className="flex justify-between relative">
          <div className="logo pl-[30px] lg:p-0">
            <Image
              src={fields?.logo?.desktopImage?.src}
              alt="Yasisland Logo"
              height={58}
              width={139}
              className="w-[120px] md:w-[139px] cursor-pointer"
            />
          </div>
          <div
            className={`${
              mobileMenu
                ? "flex flex-col absolute bg-white w-full  "
                : "hidden md:flex  md:flex-col md:w-full"
            }`}
          >
            <div className="flex justify-between px-[30px] pb-[10px] md:pb-0 items-center text-[28px] md:hidden">
              <p className="uppercase">Menu</p>
              <span
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
                className="text-[38px]"
              >
                <GrClose />
              </span>
            </div>
            <div className="flex px-5 pt-[20px] pb-[30px] border-b-[1px] border-t-[1px] border-gray-1 md:border-0  md:py-0 text-[26px] items-center justify-end">
              <div className="flex md:text-[20px] w-full justify-between md:justify-end ">
                <span className="ml-5 md:min-w-[35px] mx-4 md:mx-0">
                  <LuSearch />
                </span>
                <span className="md:min-w-[35px] mx-4 md:mx-0">
                  <GrLocation />
                </span>
                <span className="mr-5 md:min-w-[35px] mx-4 md:mx-0">
                  <AiOutlineUser />
                </span>
                <span
                  className="w-1/2 flex justify-end relative md:w-fit px-4"
                  id="ele"
                >
                  <div
                    className="flex items-center"
                    onClick={() => {
                      setLanguageShow(!languageshow);
                    }}
                  >
                    <p className="text-[22px] md:text-[14px]">
                      {activeLanguage?.length
                        ? activeLanguage
                        : fields?.languages?.label}
                    </p>
                    {fields?.languages?.language?.length ? (
                      <span>
                        <FiChevronDown className="text-[20px]" />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`${
                      !languageshow ? "hidden" : ""
                    } absolute top-full right-0 w-[190px] px-[1.20rem] rounded-2xl shadow-sm bg-gray-2 py-5 z-10 tracking-wider`}
                  >
                    {fields?.languages?.language?.map((lang) => {
                      return (
                        <span className="flex justify-between py-1">
                          <p className="text-[12px]">{lang?.languageName}</p>
                          <Image
                            src={lang?.languageFlag}
                            width={50}
                            height={50}
                            alt="Language"
                            className="h-4 w-5"
                          />
                        </span>
                      );
                    })}
                  </div>
                </span>
              </div>
            </div>
            <div className="px-5 text-[22px] overflow-scroll md:overflow-visible pt-[30px] md:p-0 h-[calc(100vh-135px)] md:h-auto md:w-full border-gray-200 md:border-0">
              <ul className="md:flex justify-end ">
                {fields?.navlinks?.map((nav, key) => {
                  return (
                    <>
                      <li
                        className={`group mt-3  md:static rounded-[20px] text-center md:hover:pb-6  bg-gray-1 md:bg-transparent overflow-hidden   md:bg-white md:overflow-visible md:px-2 ${
                          activeLink === key ? "!bg-white border" : ""
                        }`}
                      >
                        <p
                          className={` p-[16px] md:text-[18px] cursor-pointer text-center md:group-hover:bg-gray-1 rounded-[20px] md:hover:bg-gray-1 uppercase border-[3px] md:border-0 md:p-0 md:w-fit md:py-1 md:px-2 tracking-wide ${
                            activeLink === key
                              ? " border-yellow-300 border-[3px] rounded-[20px] md:border-0"
                              : ""
                          }`}
                        >
                          {nav?.navInfo?.itemText}
                        </p>
                        {nav?.navInfo?.navLinks?.length ? (
                          <span
                            className="absolute md:relative md:hidden top-[37px] md:top-0  transform translate-y-[-10px] right-[20px]"
                            onClick={() => {
                              handleActiveLink(key);
                            }}
                          >
                            <FiChevronDown />
                          </span>
                        ) : (
                          ""
                        )}
                        {nav?.navInfo?.navLinks?.length ? (
                          <div
                            className={`md:hidden overflow-hidden md:mt-4 md:min-h-[400px] bg-white z-10 md:group-hover:block md:absolute left-0 top-auto md:px-8 md:w-full`}
                          >
                            <div
                              className={`md:flex w-max md:w-full border-t-[1px] md:py-[22px] ${
                                activeLink ? "h-auto" : ""
                              }`}
                            >
                              {nav?.navInfo?.navLinks?.map((links) => {
                                return (
                                  <>
                                    <div
                                      className={`h-0 md:h-auto overflow-hidden transition-height delay-300 ease-in-out text-left md:w-full md:peer-hover:h-auto md:pr-2.5 ${
                                        activeLink === key
                                          ? "h-auto pl-9 pb-9"
                                          : ""
                                      }`}
                                    >
                                      {links?.label?.length ? (
                                        <h2 className="uppercase py-[14px] md:text-[20px] tracking-wider">
                                          {links?.label}
                                        </h2>
                                      ) : (
                                        ""
                                      )}
                                      <ul
                                        className={`!capitalize text-[25px] md:text-[15px] ${ddin.className}`}
                                      >
                                        {links?.linkData?.map((data) => {
                                          return (
                                            <li className="">
                                              <Link
                                                href={data?.ctaDetail?.href}
                                                className="text-link line-h md:pb-[13px] md:block cursor-pointer"
                                              >
                                                {data?.ctaDetail?.label}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </>
                                );
                              })}
                              {nav?.navInfo?.featuredTitle?.length ? (
                                <div className="h-0 md:w-[125%] md:h-auto md:mt-5">
                                  <h2 className="text-purple">
                                    {nav?.navInfo?.featuredTitle}
                                  </h2>
                                  {nav?.navInfo?.featuredLinks?.length ? (
                                    <div className="img w-full">
                                      <Image
                                        src={
                                          nav?.navInfo?.featuredLinks[0]
                                            ?.featuredimage
                                        }
                                        height={100}
                                        width={100}
                                        alt="Image"
                                        className="w-auto rounded-xl"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`menu md:hidden pr-[30px] lg:p-0 ${
              mobileMenu ? "hidden" : ""
            }`}
          >
            <span
              className="text-[35px]"
              onClick={() => {
                setMobileMenu(!mobileMenu);
                setActiveLink(-1);
              }}
            >
              <AiOutlineMenu />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Navbar = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target) && toggleMenu) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <header className="nk-header has-shape" ref={ref}>
      {pathname === "/" && (
        <>
          <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
          <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
          <div className="nk-shape bg-shape-border-a mt-n10 ms-40p start-50 top-100 translate-middle-x" />
          <div className="nk-shape bg-shape-border-b mt-n9 ms-30p start-50 translate-middle-x" />
          <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
        </>
      )}
      <div className="nk-header-main nk-menu-main will-shrink is-transparent ignore-mask">
        <div className="container">
          <div className="nk-header-wrap">
            <div className="nk-header-logo">
              <a href="#" className="logo-link">
                <div className="logo-wrap">
                  <img
                    className="logo-img logo-light"
                    src="images/googlers-logo-dark.png"
                    srcSet="images/googlers-logo-dark.png"
                    alt=""
                  />
                  <img
                    className="logo-img logo-dark"
                    src="images/googlers-logo.png"
                    srcSet="images/googlers-logo.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="nk-header-toggle">
              <button
                onClick={toggleTheme}
                className="dark-mode-toggle dark-active"
              >
                <em className="off icon ni ni-sun-fill" />
                <em className="on icon ni ni-moon-fill" />
              </button>
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className={`btn btn-light btn-icon`}
              >
                <em className="icon ni ni-menu" />
              </button>
            </div>
            <nav
              className={`nk-header-menu nk-menu ${
                toggleMenu && "header-menu-active"
              }`}
            >
              <ul className="nk-menu-list mx-auto">
                {pages.map((item) => (
                  <li
                    onClick={() => setToggleMenu(false)}
                    key={item.title}
                    className={`nk-menu-item ${
                      item.path === pathname ? "active" : ""
                    }`}
                  >
                    <Link href={item.path} className="nk-menu-link">
                      <span className="nk-menu-text ">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div onClick={toggleTheme} className="mx-2 d-none d-lg-block">
                <button className="dark-mode-toggle dark-active">
                  <em className="off icon ni ni-sun-fill" />
                  <em className="on icon ni ni-moon-fill" />
                </button>
              </div> */}
              <ul className="nk-menu-buttons flex-lg-row-reverse">
                <li>
                  <Link href="/cvchecker" className="btn btn-primary">
                    Compare Yours
                  </Link>
                </li>
                {/* <li>
                          <a class="link link-dark" href="login.html">Login </a>
                      </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {pathname == "/" && (
        <div className="nk-hero pt-4 pt-lg-6 pt-xl-12 pb-xl-4">
          <div className="container">
            <div className="row g-gs align-items-center justify-content-center justify-content-xl-between flex-xl-row-reverse text-center text-xl-start">
              <div className="col-xl-6 col-xxl-5 col-lg-7 col-md-10">
                <div className="nk-hero-gfx me-xxl-n7">
                  <div className="p-1 rounded-3 bg-gradient-primary">
                    <img
                      src="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/08/Group-2309.svg"
                      alt="Map showing locations of Uzbek Googlers"
                      className="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-11">
                <div className="nk-hero-content">
                  <h5 className="text-uppercase fw-normal mb-3">
                    Welcome to Smart Resume Matcher
                  </h5>
                  <h1 className="title mb-3 mb-lg-4">
                    Enhance Your Resume with
                    <span className="text-gradient-primary"> AI-Powered </span>
                    Insights
                  </h1>
                  <p className="lead">
                    Get personalized feedback and job match scores to improve
                    your chances of landing your dream job.
                  </p>
                  <ul className="btn-list btn-list-inline py-3 gy-3">
                    <li>
                      <Link
                        href="/cvchecker"
                        className="btn btn-primary btn-lg"
                      >
                        <em className="icon ni ni-google" />
                        <span>Check Your Resume</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="btn btn-light btn-lg">
                        <span>Learn More</span>
                        <em className="icon ni ni-arrow-long-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

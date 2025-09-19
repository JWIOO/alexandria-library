"use client"
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu }: any) {
    return (
        <>
            <style jsx>{`
                @font-face {
                    font-family: 'SSRockRegular';
                    src: url('/assets/fonts/MyFont/SSRockRegular.ttf') format('truetype');
                    font-weight: normal;
                    font-display: swap;
                }
            `}</style>
            <header>
                <nav
                    className={`navbar navbar-expand-lg navbar-black p-0  border-header z-3 navbar-stick ${scroll ? "top-0 position-fixed w-100" : ""}
                    `}
                    style={{
                        borderBottom: "1px solid transparent",
                        borderImage: "linear-gradient(90deg, #36DA60 0%, #9AFFEB 100%)",
                        borderImageSlice: 1,
                    }}>

                    <div className="container px-0 position-relative">
                        <Link className="navbar-brand py-2 px-3 border border-header position-lg-absolute start-0 top-0 align-items-center d-flex" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#36DA60" />
                                        <stop offset="100%" stopColor="#9AFFEB" />
                                    </linearGradient>
                                </defs>

                                <path fill="url(#logoGradient)" d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z" />
                                <path fill="url(#logoGradient)" d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z" />
                                <path fill="url(#logoGradient)" d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z" />
                                <path fill="url(#logoGradient)" d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z" />
                                <path fill="url(#logoGradient)" d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z" />
                                <path fill="url(#logoGradient)" d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z" />
                            </svg>

                            <h5 className="mb-0 fw-semibold text-white"
                                style={{
                                    fontFamily: 'SSRockRegular',
                                    background: 'linear-gradient(90deg, #36DA60 0%, #9AFFEB 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent', }}>팔랑크스</h5>
                        </Link>
                        <div className="d-none d-lg-flex mx-auto align-self-stretch">
                            <MainMenu />
                        </div>
                        <div className="d-flex align-items-center align-self-stretch pe-4 pe-lg-0"
                             style={{
                                 borderLeft: "1px solid transparent",
                                 borderRight: "1px solid transparent",
                                 borderImage: "linear-gradient(90deg, #36DA60 0%, #9AFFEB 100%)",
                                 borderImageSlice: 1,
                             }}>
                            <Link href="#" className="d-none d-lg-flex py-4 px-6 border-start align-self-stretch align-items-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                                  style={{
                                      borderRight: "1px solid transparent",
                                      borderImage: "linear-gradient(90deg, #36DA60 0%, #9AFFEB 100%)",
                                      borderImageSlice: 1,
                                  }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_727_4824)">
                                        <path
                                            d="M10.5656 3.40954C10.7453 3.58919 10.7453 3.88042 10.5656 4.06007C10.4757 4.15002 10.3581 4.19487 10.2404 4.19487C10.1226 4.19487 10.005 4.15002 9.91509 4.06007C8.30025 2.44546 5.67371 2.44546 4.0591 4.06007C3.87944 4.23973 3.58822 4.23973 3.40856 4.06007C3.2289 3.88042 3.2289 3.58919 3.40856 3.40954C5.38157 1.4363 8.59239 1.4363 10.5656 3.40954ZM19.8689 18.0296C19.8689 18.5212 19.6775 18.9833 19.3297 19.3307C18.9824 19.6785 18.5202 19.8699 18.0286 19.8699C17.5371 19.8699 17.0749 19.6785 16.7276 19.3307L11.8968 14.5C11.7172 14.3203 11.7172 14.0291 11.8968 13.8494L12.5474 13.1989L11.5272 12.1787C10.3126 13.2421 8.72443 13.889 6.98698 13.889C3.18174 13.889 0.0859375 10.7932 0.0859375 6.98796C0.0859375 3.18272 3.18174 0.0869141 6.98698 0.0869141C10.7922 0.0869141 13.888 3.18272 13.888 6.98796C13.888 8.72541 13.2412 10.3136 12.1777 11.5282L13.1979 12.5484L13.8485 11.8978C14.0281 11.7182 14.3193 11.7182 14.499 11.8978L19.3297 16.7285C19.6775 17.0759 19.8689 17.538 19.8689 18.0296ZM12.9679 6.98796C12.9679 3.69018 10.285 1.00705 6.98698 1.00705C3.68897 1.00705 1.00608 3.69018 1.00608 6.98796C1.00608 10.2857 3.68897 12.9689 6.98698 12.9689C10.285 12.9689 12.9679 10.2857 12.9679 6.98796ZM18.9488 18.0296C18.9488 17.7839 18.8531 17.553 18.6792 17.3791L14.1737 12.8736L12.8726 14.1747L17.3781 18.6802C17.7259 19.028 18.3316 19.028 18.6792 18.6802C18.8531 18.5063 18.9488 18.2753 18.9488 18.0296Z"
                                            fill="white"
                                        />
                                    </g>
                                </svg>
                            </Link>
                            <Link href={"#"} className="menu-tigger d-none d-lg-flex py-4 px-6 border-start border-end align-self-stretch align-items-center"
                                 >
                                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                                    <rect width={3} height={3} fill="white" />
                                    <rect y={8} width={3} height={3} fill="white" />
                                    <rect y={16} width={3} height={3} fill="white" />
                                    <rect x={8} width={3} height={3} fill="white" />
                                    <rect x={8} y={8} width={3} height={3} fill="white" />
                                    <rect x={16} y={16} width={3} height={3} fill="white" />
                                    <rect x={16} width={3} height={3} fill="white" />
                                    <rect x={16} y={8} width={3} height={3} fill="white" />
                                </svg>
                            </Link>
                            <div className="burger-icon burger-icon-white bg-transparent border rounded-3 top-0 end-0
                            " onClick={handleMobileMenu}

                               >
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </nav>
                {/* offCanvas-menu */}
                <div className="offCanvas__info">
                    <div className="offCanvas__close-icon menu-close">
                        <button className="btn-close" aria-label="Close">
                            <i className="ri-close-line" />
                        </button>
                    </div>
                    <div className="offCanvas__logo mb-30">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                <g>
                                    <path className="fill-primary" d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z"></path>
                                    <path className="fill-primary" d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z"></path>
                                    <path className="fill-primary" d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z"></path>
                                    <path className="fill-primary" d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z"></path>
                                    <path className="fill-primary" d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z"></path>
                                    <path className="fill-primary" d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z"></path>
                                </g>
                            </svg>
                            <h5 className="mb-0 text-dark">Astrax</h5>
                        </Link>
                    </div>
                    <div className="offCanvas__side-info mb-30">
                        <div className="contact-list mb-30">
                            <h4>Office Address</h4>
                            <p>
                                123/A, Miranda City Likaoli <br />
                                Prikano, Dope
                            </p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Phone Number</h4>
                            <p>+0989 7876 9865 9</p>
                            <p>+(090) 8765 86543 85</p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Email Address</h4>
                            <p>info@example.com</p>
                            <p>example.mail@hum.com</p>
                        </div>
                    </div>
                    <div className="offCanvas__social-icon mt-30">
                        <Link href="#">
                            <i className="bi bi-facebook" />
                        </Link>
                        <Link href="#">
                            <i className="bi bi-twitter-x" />
                        </Link>
                        <Link href="#">
                            <i className="bi bi-linkedin" />
                        </Link>
                        <Link href="#">
                            <i className="bi bi-behance" />
                        </Link>
                    </div>
                </div>
                <div className="offCanvas__overly" />
                {/* Offcanvas search */}
                <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop">
                    <div className="offcanvas-header">
                        <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-8 mx-auto">
                                    <h3 className="mb-4">What are you looking for?</h3>
                                    <form className="input-group mb-3" data-aos="zoom-in">
                                        <input type="text" className="form-control" placeholder="Enter Your Keywords" aria-label="Enter Your Keywords" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary rounded-end-2" type="submit" aria-label="search" id="button-addon2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Offcanvas search */}
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    );
}

import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*yoga section 7*/}
            <section className="yoga-section-6 position-relative bg-white pt-120 pb-120 ">
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 me-lg-auto order-lg-1 order-2 wow img-custom-anim-left">
                            <div className="contact-map">
                                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991725!2d-74.1444877707482!3d40.697631233381586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1729152035449!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 mb-lg-0 mb-5 order-lg-2 order-1 position-relative">
                            <div className="alltuchtopdown">
                                <img className="z-0 position-absolute top-100 start-lg-100 start-50 translate-middle-x d-inline-block" src="assets/imgs/pages/yoga/page-home/home-section-6/icon-spa.png" alt="AstraX" />
                            </div>
                            <div className="icon">
                                <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                            </div>
                            <span className="btn-text text-primary">yoga places</span>
                            <h2 className="mb-5 mt-3 text-anime-style-2">
                                Let’s catchup with <br />
                                us on our place.
                            </h2>
                            <div className="d-flex flex-md-row flex-column gap-md-5 gap-4 pt-5">
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <g clipPath="url(#clip0_743_2057)">
                                                <path d="M41.25 25C48.845 25 55 30.0375 55 36.25C55 39.7425 53.055 42.8625 50 44.925V50L45.09 47.055C43.8317 47.3522 42.543 47.5015 41.25 47.5C33.655 47.5 27.5 42.4625 27.5 36.25C27.5 30.0375 33.655 25 41.25 25Z" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M27.9925 39.245C26.2675 39.735 24.4175 40 22.5 40C20.2785 40.0048 18.0717 39.6398 15.97 38.92L10 42.5V35.4975C6.9075 32.7925 5 29.0875 5 25C5 16.715 12.835 10 22.5 10C31.955 10 39.6575 16.425 40 24.4625V25.045" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M25 20H25.025" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5 20H17.525" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M37.5 35H37.525" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M45 35H45.025" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h6 className="mt-5 mb-3 fs-20 ">Phone &amp; Email</h6>
                                    <Link href="#">
                                        <p className="mb-0">+(123) 456 789 00</p>
                                    </Link>
                                    <Link href="#">
                                        <p className="mb-0">info@astrax.com</p>
                                    </Link>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                            <g clipPath="url(#clip0_743_2069)">
                                                <path d="M29.8325 12.5H12.5V52.5H45V32.5" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M35 42.5H22.5" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.5 32.5H35V22.5H22.5V32.5Z" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M37.5 12.5V7.5" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M45 15L50 10" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M47.5 22.5H52.5" stroke="#D42C6C" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <h6 className="mt-5 mb-3 fs-20 ">Locations</h6>
                                    <Link href="https://maps.google.com/maps?q=1st+avenue,New+York">
                                        <p className="mb-0">
                                            12/A, New Booston Tower, <br />
                                            Tokyo, China
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

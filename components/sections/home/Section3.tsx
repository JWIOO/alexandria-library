"use client";

import CarouselTicker from "@/components/elements/CarouselTicker";
import Link from "next/link";

const slidesContent = [<img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-1.png" alt="AstraX" />, <img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-2.png" alt="AstraX" />, <img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-3.png" alt="AstraX" />, <img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-1.png" alt="AstraX" />, <img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-2.png" alt="AstraX" />, <img className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/logo-3.png" alt="AstraX" />];
export default function Section3() {
    return (
        <>
            {/*yoga-section-3*/}
            <div className="container-fluid text-section-about overflow-hidden">
                <h1 className="fs-200 text-secondary-2 text-center mb-0 text-anime-style-2">Meditation</h1>
            </div>
            <svg className="waves" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x={48} y={0} fill="#F8F2F3" />
                </g>
            </svg>
            <section className="yoga-section-3 pt-200 pb-120 position-relative z-0 overflow-hidden bg-secondary-2">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center" data-aos="fade-right">
                                    <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                        <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-1.png" alt="AstraX" />
                                    </div>
                                    <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                        <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-2.png" alt="AstraX" />
                                    </div>
                                    <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                        <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-3.png" alt="AstraX" />
                                    </div>
                                    <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                        <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-4.png" alt="AstraX" />
                                    </div>
                                </div>
                                <div className="wow img-custom-anim-left">
                                    <div className="d-flex gap-1 mb-2">
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary  fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                    </div>
                                    <p className="mb-0 text-dark btn-text">BVictoria L. Davis</p>
                                </div>
                            </div>
                            <h4 className="py-5 border-bottom text-anime-style-3">“ We have classes for, discover the perfect one for you. ”</h4>
                            <CarouselTicker slides={slidesContent} />
                        </div>
                        <div className="col-lg-4">
                            <div className="position-relative">
                                <img className="h-100 d-block" data-aos="zoom-in" src="assets/imgs/pages/yoga/page-home/home-section-3/img-1.png" alt="AstraX" />

                                <div className="position-absolute start-0 top-100 translate-middle d-none d-lg-block">
                                    <img data-aos="fade-up" className="h-100 d-block" src="assets/imgs/pages/yoga/page-home/home-section-3/img-2.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-6 align-self-center">
                            <div className="icon">
                                <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                            </div>
                            <span className="btn-text text-primary">yoga &amp; pilates Services</span>
                            <h2 className="mb-5 mt-3 text-anime-style-2">Yoga enhances your life practice yoga anytime.</h2>
                            <p className="mb-6 text-anime-style-1">A modern form of Hatha Yoga that focuses on alignment and heart-opening postures.</p>
                            <Link href="/about" className="btn btn-primary hover-up">
                                <span> services </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_1181_1593)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

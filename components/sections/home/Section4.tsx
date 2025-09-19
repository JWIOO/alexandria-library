"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperPadding from "@/components/elements/BoxSwiperPadding";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section4({ pt }: any) {
    return (
        <>
            {/*yoga home section 4*/}
            <SwiperPadding />
            <section className={`yoga-home-section-4 position-relative pt-120 pb-120 ${pt} overflow-hidden`}>
                <div className="container position-relative z-1">
                    <div className="row flex-wrap align-items-end">
                        <div className="swipper-root">
                            <div className="icon">
                                <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                            </div>
                            <span className="btn-text text-primary">pricing &amp; plans</span>
                            <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                <h2 className="text-dark mt-3 mb-0 text-anime-style-3">
                                    Special health benefits of <br />
                                    yoga in the morning.
                                </h2>
                                <div className="position-relative">
                                    <div className="h-100 d-flex align-items-center gap-5 position-relative z-1">
                                        <div className="swiper-button-prev mt-0 position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1382)">
                                                    <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="swiper-button-next mt-0 position-relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1381)">
                                                    <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 ms-lg-auto text-center mt-3 mt-lg-0" />
                    </div>
                </div>
                <div className="row pt-80">
                    <div className="col-12 position-relative wow img-custom-anim-left">
                        {/* Swiper */}
                        <div className="box-swiper-padding">
                            <Swiper {...swiperOptions} className="swiper slider-4 pb-1">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-news position-relative mb-lg-0 mb-8 hover-up py-2">
                                            <Link href="/classes-details" className="card-news-img position-relative d-block">
                                                <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-4/img-1.png" alt="AstraX" />
                                                <div className="icon-shape icon-xxl rounded-circle bg-white shadow-1 position-absolute top-100 end-0 translate-middle-y me-5">
                                                    <div>
                                                        <h6 className="mb-0">$49</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-news-body border p-4 rounded-top-0 border-top-0">
                                                <div className="card-news-title mt-2 mb-4">
                                                    <Link href="/classes-details">
                                                        <h6 className="fw-regular">Balance body &amp; mind</h6>
                                                    </Link>
                                                    <p>Yoga is a slow-paced, meditative style of yoga that targets deep connective.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-news position-relative mb-lg-0 mb-8 hover-up py-2">
                                            <Link href="/classes-details" className="card-news-img position-relative d-block">
                                                <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-4/img-2.png" alt="AstraX" />
                                                <div className="icon-shape icon-xxl rounded-circle bg-white shadow-1 position-absolute top-100 end-0 translate-middle-y me-5">
                                                    <div>
                                                        <h6 className="mb-0">$99</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-news-body border p-4 rounded-top-0 border-top-0">
                                                <div className="card-news-title mt-2 mb-4">
                                                    <Link href="/classes-details">
                                                        <h6 className="fw-regular">Meditation practice</h6>
                                                    </Link>
                                                    <p>Yoga is a slow-paced, meditative style of yoga that targets deep connective.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-news position-relative mb-lg-0 mb-8 hover-up py-2">
                                            <Link href="/classes-details" className="card-news-img position-relative d-block">
                                                <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-4/img-3.png" alt="AstraX" />
                                                <div className="icon-shape icon-xxl rounded-circle bg-white shadow-1 position-absolute top-100 end-0 translate-middle-y me-5">
                                                    <div>
                                                        <h6 className="mb-0">$69</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-news-body border p-4 rounded-top-0 border-top-0">
                                                <div className="card-news-title mt-2 mb-4">
                                                    <Link href="/classes-details">
                                                        <h6 className="fw-regular">Any type of yoga</h6>
                                                    </Link>
                                                    <p>Yoga is a slow-paced, meditative style of yoga that targets deep connective.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-news position-relative mb-lg-0 mb-8 hover-up py-2">
                                            <Link href="/classes-details" className="card-news-img position-relative d-block">
                                                <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-4/img-4.png" alt="AstraX" />
                                                <div className="icon-shape icon-xxl rounded-circle bg-white shadow-1 position-absolute top-100 end-0 translate-middle-y me-5">
                                                    <div>
                                                        <h6 className="mb-0">$49</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-news-body border p-4 rounded-top-0 border-top-0">
                                                <div className="card-news-title mt-2 mb-4">
                                                    <Link href="/classes-details">
                                                        <h6 className="fw-regular">Venyasa kama sutra</h6>
                                                    </Link>
                                                    <p>Yoga is a slow-paced, meditative style of yoga that targets deep connective.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-news position-relative mb-lg-0 mb-8 hover-up py-2">
                                            <Link href="/classes-details" className="card-news-img position-relative d-block">
                                                <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-4/img-2.png" alt="AstraX" />
                                                <div className="icon-shape icon-xxl rounded-circle bg-white shadow-1 position-absolute top-100 end-0 translate-middle-y me-5">
                                                    <div>
                                                        <h6 className="mb-0">$99</h6>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="card-news-body border p-4 rounded-top-0 border-top-0">
                                                <div className="card-news-title mt-2 mb-4">
                                                    <Link href="/classes-details">
                                                        <h6 className="fw-regular">Meditation practice</h6>
                                                    </Link>
                                                    <p>Yoga is a slow-paced, meditative style of yoga that targets deep connective.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* Swiper JS */}
            </section>
        </>
    );
}

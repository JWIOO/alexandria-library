"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
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
const listnews = [
    {
        delay: "0",
        img: "img-1.png",
        link: "#",
        link_author: "#",
        code_first: "Admin",
        subject: "yoga",
        title: "The Art of Mindful Living: How Yoga Transforms Your Daily Life",
        date: "December 21, 2025",
    },
    {
        delay: "200",
        img: "img-2.png",
        link: "#",
        link_author: "#",
        code_first: "Admin",
        subject: "gym",
        title: "Morning vs. Evening Yoga: Which is Best for You?",
        date: "December 21, 2025",
    },
    {
        delay: "400",
        img: "img-3.png",
        link: "#",
        link_author: "#",
        code_first: "Admin",
        subject: "fitness",
        title: "Morning vs. Evening Yoga: Which is Best for You?",
        date: "December 21, 2025",
    },
    {
        delay: "0",
        img: "img-2.png",
        link: "#",
        link_author: "#",
        code_first: "yoga",
        subject: "Vinyasa",
        title: "The Art of Mindful Living: How Yoga Transforms Your Daily Life",
        date: "December 21, 2025",
    },
];

export default function Section1() {
    return (
        <>
            {/*yoga blog section 1*/}
            <section className="yoga-blog-section-1 position-relative overflow-hidden pt-120 pb-120">
                <div className="container position-relative">
                    <div className="text-center mb-80">
                        <div className="icon">
                            <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                        </div>
                        <span className="btn-text text-primary">Our blog &amp; insights</span>
                        <h2 className="text-anime-style-2">Trending News</h2>
                    </div>
                    <div className="row g-lg-5 g-4">
                        <div className="col-12 position-relative z-1 wow img-custom-anim-top">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-3 ps-3">
                                <div className="swiper-wrapper z-1" />
                                {listnews.map(({ delay, img, link, link_author, code_first, subject, title, date }) => (
                                    <SwiperSlide className="swiper-slide h-100 align-self-stretch">
                                        <div className="py-2 h-100" data-aos="fade-up" data-aos-delay={delay}>
                                            <div className="card-news position-relative hover-up h-100">
                                                <Link href={link} className="card-news-img position-relative d-block">
                                                    <img className="w-100" src={`/assets/imgs/pages/yoga/page-home/home-section-9/${img}`} alt={title} />
                                                    <span className="text-uppercase fw-bold fs-8 text-white bg-dark px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">{subject}</span>
                                                </Link>
                                                <div className="card-news-body border p-4 border-top-0 bg-white">
                                                    <div className="d-flex card-news-information gap-4">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <i className="fa-solid fa-calendar-days text-primary"></i>
                                                            <p className="mb-0">{date}</p>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <i className="fa-regular fa-user text-primary"></i>
                                                            <span className="opacity-50">By</span>
                                                            <Link href={link_author} className="mb-0 text-primary-2">
                                                                {code_first}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="card-news-title mt-2 mb-4">
                                                        <Link href={link}>
                                                            <h6>{title}</h6>
                                                        </Link>
                                                    </div>
                                                    <Link href={link} className="text-dark opacity-50 fs-7 fw-semibold">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="position-relative mt-6">
                                    <div className="h-100 d-flex align-items-center justify-content-center gap-5 position-relative z-1">
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
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

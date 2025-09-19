"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
            slidesPerView: 2,
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
export default function Section5({ classList, display }: any) {
    return (
        <>
            {/*yoga about section 5*/}
            <section className="yoga-about-section-5 overflow-hidden position-relative">
                <div className={`${classList} py-120`}>
                    <div className="container position-relative z-1">
                        <div className="text-center mb-80">
                            <div className="icon">
                                <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                            </div>
                            <span className="btn-text text-primary">EXPERIENCED TEACHERS</span>
                            <h2 className="text-anime-style-2">Meet our Experts</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 position-relative z-1 wow img-custom-anim-top">
                                {/* Swiper */}
                                <div className="box-swiper-padding">
                                    <Swiper {...swiperOptions} className="swiper slider-3 ps-3">
                                        <div className="swiper-wrapper z-1">
                                            <SwiperSlide>
                                                <div className="card-experts" data-aos="fade-up">
                                                    <div className="position-relative d-inline-flex rounded-5 overflow-hidden">
                                                        <img src="assets/imgs/pages/yoga/page-about/experts-1.png" alt="AstraX" />
                                                        <div className="experts-overlay">
                                                            <ul className="list-unstyled d-flex mb-0 gap-2 justify-content-center position-absolute top-50 start-50 translate-middle">
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="btn-text text-primary mt-5">Stretching Instructor</p>
                                                    <Link href="#">
                                                        <h5>Natalia T. Morgan</h5>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-experts" data-aos="fade-up">
                                                    <div className="position-relative d-inline-flex rounded-5 overflow-hidden">
                                                        <img src="assets/imgs/pages/yoga/page-about/experts-2.png" alt="AstraX" />
                                                        <div className="experts-overlay">
                                                            <ul className="list-unstyled d-flex mb-0 gap-2 justify-content-center position-absolute top-50 start-50 translate-middle">
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="btn-text text-primary mt-5">Yoga Instructor</p>
                                                    <Link href="#">
                                                        <h5>Sophia J. Carter</h5>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-experts" data-aos="fade-up">
                                                    <div className="position-relative d-inline-flex rounded-5 overflow-hidden">
                                                        <img src="assets/imgs/pages/yoga/page-about/experts-3.png" alt="AstraX" />
                                                        <div className="experts-overlay">
                                                            <ul className="list-unstyled d-flex mb-0 gap-2 justify-content-center position-absolute top-50 start-50 translate-middle">
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="btn-text text-primary mt-5">Yoga Trainer</p>
                                                    <Link href="#">
                                                        <h5>Juliana P. Taylor</h5>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-experts" data-aos="fade-up">
                                                    <div className="position-relative d-inline-flex rounded-5 overflow-hidden">
                                                        <img src="assets/imgs/pages/yoga/page-about/experts-10.png" alt="AstraX" />
                                                        <div className="experts-overlay">
                                                            <ul className="list-unstyled d-flex mb-0 gap-2 justify-content-center position-absolute top-50 start-50 translate-middle">
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <span className="icon d-inline-flex text-center align-items-center justify-content-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="btn-text text-primary mt-5">Yoga for Athletes</p>
                                                    <Link href="#">
                                                        <h5>Daniel Carter</h5>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
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
                                </div>
                                {/* Swiper JS */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rotate-x-180 ${display}`}>
                    <svg className="waves" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x={48} y={0} fill="#F8F2F3" />
                        </g>
                    </svg>
                </div>
            </section>
        </>
    );
}

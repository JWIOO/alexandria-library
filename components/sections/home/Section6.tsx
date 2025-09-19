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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};
export default function Section6() {
    return (
        <>
            {/*yoga section 6*/}
            <section className="yoga-section-6 position-relative overflow-hidden pt-120">
                <div className="container">
                    <div className="text-center mb-80">
                        <div className="icon">
                            <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                        </div>
                        <span className="btn-text text-primary">testimonials</span>
                        <h2 className="text-anime-style-2">Happy users feedback</h2>
                    </div>
                    <div className="row mt-80">
                        <div className="col-12 position-relative wow img-custom-anim-top">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-1">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-secondary-2 bg-opacity-10 rounded-3 overflow-hidden" data-aos="fade-up">
                                            <div className="position-absolute bottom-0 end-0 me-8 z-0">
                                                <img src="assets/imgs/pages/yoga/page-home/home-section-6/icon-1.svg" alt="AstraX" />
                                            </div>
                                            <div className="d-flex position-relative z-1">
                                                <img className="d-none d-lg-block" src="assets/imgs/pages/yoga/page-home/home-section-6/img-1.png" alt="AstraX" />
                                                <div className="d-flex flex-column m-lg-8 m-md-6 m-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                    </div>
                                                    <Link href="#">
                                                        <h6 className="fs-20 mt-2">Amazing yoga solution</h6>
                                                    </Link>
                                                    <p className="mb-0 mt-4 ">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—not too tight, not too loose—just right. The fabric is incredibly soft against the skin, making it feel like you're wearing a cloud. But what really sets it apart is how it seems to stay cool no matter the temperature. ”</p>
                                                    <div className="d-flex align-items-center position-relative z-1 mt-lg-auto mt-5">
                                                        <Link href="#">
                                                            <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/yoga/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        </Link>
                                                        <div className="text-start ms-3">
                                                            <Link href="#">
                                                                <h6 className="fs-18">Isabella F. Monroe</h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-secondary-2 bg-opacity-10 rounded-3 overflow-hidden" data-aos="fade-up">
                                            <div className="position-absolute bottom-0 end-0 me-8 z-0">
                                                <img src="assets/imgs/pages/yoga/page-home/home-section-6/icon-1.svg" alt="AstraX" />
                                            </div>
                                            <div className="d-flex position-relative z-1">
                                                <img className="d-none d-lg-block" src="assets/imgs/pages/yoga/page-home/home-section-6/img-1.png" alt="AstraX" />
                                                <div className="d-flex flex-column m-lg-8 m-md-6 m-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                    </div>
                                                    <Link href="#">
                                                        <h6 className="fs-20 mt-2">Amazing yoga solution</h6>
                                                    </Link>
                                                    <p className="mb-0 mt-4 ">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—not too tight, not too loose—just right. The fabric is incredibly soft against the skin, making it feel like you're wearing a cloud. But what really sets it apart is how it seems to stay cool no matter the temperature. ”</p>
                                                    <div className="d-flex align-items-center position-relative z-1 mt-lg-auto mt-5">
                                                        <Link href="#">
                                                            <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/yoga/page-home/home-section-6/author-2.png" alt="AstraX" />
                                                        </Link>
                                                        <div className="text-start ms-3">
                                                            <Link href="#">
                                                                <h6 className="fs-18">Isabella F. Monroe</h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-secondary-2 bg-opacity-10 rounded-3 overflow-hidden" data-aos="fade-up">
                                            <div className="position-absolute bottom-0 end-0 me-8 z-0">
                                                <img src="assets/imgs/pages/yoga/page-home/home-section-6/icon-1.svg" alt="AstraX" />
                                            </div>
                                            <div className="d-flex position-relative z-1">
                                                <img className="d-none d-lg-block" src="assets/imgs/pages/yoga/page-home/home-section-6/img-1.png" alt="AstraX" />
                                                <div className="d-flex flex-column m-lg-8 m-md-6 m-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                    </div>
                                                    <Link href="#">
                                                        <h6 className="fs-20 mt-2">Amazing yoga solution</h6>
                                                    </Link>
                                                    <p className="mb-0 mt-4 ">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—not too tight, not too loose—just right. The fabric is incredibly soft against the skin, making it feel like you're wearing a cloud. But what really sets it apart is how it seems to stay cool no matter the temperature. ”</p>
                                                    <div className="d-flex align-items-center position-relative z-1 mt-lg-auto mt-5">
                                                        <Link href="#">
                                                            <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/yoga/page-home/home-section-6/author-1.png" alt="AstraX" />
                                                        </Link>
                                                        <div className="text-start ms-3">
                                                            <Link href="#">
                                                                <h6 className="fs-18">Isabella F. Monroe</h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card-testimonial bg-secondary-2 bg-opacity-10 rounded-3 overflow-hidden" data-aos="fade-up">
                                            <div className="position-absolute bottom-0 end-0 me-8 z-0">
                                                <img src="assets/imgs/pages/yoga/page-home/home-section-6/icon-1.svg" alt="AstraX" />
                                            </div>
                                            <div className="d-flex position-relative z-1">
                                                <img className="d-none d-lg-block" src="assets/imgs/pages/yoga/page-home/home-section-6/img-1.png" alt="AstraX" />
                                                <div className="d-flex flex-column m-lg-8 m-md-6 m-5">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                        <i className="bi bi-star-fill text-primary fs-10" />
                                                    </div>
                                                    <Link href="#">
                                                        <h6 className="fs-20 mt-2">Amazing yoga solution</h6>
                                                    </Link>
                                                    <p className="mb-0 mt-4 ">“ I've owned a lot of shirts, but this one stands out as a favorite for so many reasons. The fit is absolutely perfect—not too tight, not too loose—just right. The fabric is incredibly soft against the skin, making it feel like you're wearing a cloud. But what really sets it apart is how it seems to stay cool no matter the temperature. ”</p>
                                                    <div className="d-flex align-items-center position-relative z-1 mt-lg-auto mt-5">
                                                        <Link href="#">
                                                            <img className="rounded-circle icon-shape icon-50" src="assets/imgs/pages/yoga/page-home/home-section-6/author-2.png" alt="AstraX" />
                                                        </Link>
                                                        <div className="text-start ms-3">
                                                            <Link href="#">
                                                                <h6 className="fs-18">Isabella F. Monroe</h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6 mx-auto text-center mt-8">
                                <div className="position-relative mx-auto">
                                    <div className="d-inline-flex border h-100 d-flex align-items-center gap-1 rounded-pill mx-auto bg-white position-relative z-1">
                                        <div className="swiper-button-prev mt-0 position-relative border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1382)">
                                                    <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="swiper-pagination position-relative top-0 bottom-0 mb-1" />
                                        <div className="swiper-button-next mt-0 position-relative border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_349_1381)">
                                                    <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#292929" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="border-top position-absolute top-50 start-50 translate-middle w-100 z-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-text-slide pt-120 wow img-custom-anim-left d-none d-md-block">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-slide-text wow fadeInDown">
                            <div className="swiper-wrapper align-items-center">
                                <SwiperSlide>
                                    <div className="text-slide">
                                        <h5 className="fs-100">Transformation of body &amp; mind</h5>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div className="icon-shape icon-xxl rounded-circle border">
                                            <img src="assets/imgs/pages/yoga/page-home/home-section-6/icon-yoga.svg" alt="AstraX" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="text-slide">
                                        <h5 className="fs-100">More than the 1M+ people trusting astrax yoga</h5>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

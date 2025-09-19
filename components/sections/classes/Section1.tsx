import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*yoga classes section 1*/}
            <section className="yoga-classes-section-1 position-relative overflow-hidden pt-120">
                <div className="container position-relative">
                    <div className="row align-items-center mb-80">
                        <div className="col-lg-6">
                            <div>
                                <div className="icon">
                                    <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                                </div>
                                <span className="btn-text text-primary">Our Classes</span>
                                <h2 className="text-anime-style-2">Yoga Classes Tailored for You</h2>
                                <p>Join our wide variety of classes for all levels, featuring Mysore-style, guided Ashtanga sessions, and exclusive workshops.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img data-aos="zoom-in" src="assets/imgs/pages/yoga/template/pattern-5.png" alt="AstraX" />
                        </div>
                    </div>
                    <div className="row g-4 mb-lg-5 mb-8">
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay={200}>
                            <Link href="/classes-details" className="zoom-img rounded-5 overflow-hidden d-inline-blockq">
                                <img className="rounded-5 w-100" src="assets/imgs/pages/yoga/page-classes/img-1.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
                            <div className="p-md-7 p-5 rounded-5 bg-secondary-2 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
                                <span className="position-absolute bottom-0 end-0">
                                    <img src="assets/imgs/pages/yoga/template/pattern-6.png" alt="AstraX" />
                                </span>
                                <Link href="/classes-details">
                                    <h3 className="ds-6 text-anime-style-2">Mysore-Style Yoga</h3>
                                </Link>
                                <p>Mysore-style yoga is a traditional, self-paced practice where each student practices the Ashtanga sequence at their own pace while receiving personalized guidance and adjustments from the instructor.</p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Duration</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path d="M10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346ZM10.0013 16.668C13.6832 16.668 16.668 13.6832 16.668 10.0013C16.668 6.3194 13.6832 3.33464 10.0013 3.33464C6.3194 3.33464 3.33464 6.3194 3.33464 10.0013C3.33464 13.6832 6.3194 16.668 10.0013 16.668ZM10.8346 10.0013H14.168V11.668H9.16797V5.83464H10.8346V10.0013Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">90 minutes</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Schedule</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.9987 0.667969V2.0013H9.9987V0.667969H11.332V2.0013H13.9987C14.3669 2.0013 14.6654 2.29978 14.6654 2.66797V13.3346C14.6654 13.7028 14.3669 14.0013 13.9987 14.0013H1.9987C1.63051 14.0013 1.33203 13.7028 1.33203 13.3346V2.66797C1.33203 2.29978 1.63051 2.0013 1.9987 2.0013H4.66536V0.667969H5.9987ZM13.332 7.33463H2.66536V12.668H13.332V7.33463ZM4.66536 3.33464H2.66536V6.0013H13.332V3.33464H11.332V4.66797H9.9987V3.33464H5.9987V4.66797H4.66536V3.33464Z" fill="#666666" />
                                                </svg>
                                            </div>
                                            <p className="text-dark mb-0">Monday, Wednesday, Friday - 7:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Course</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M8.66536 14V15.3333H7.33203V14H1.9987C1.63051 14 1.33203 13.7015 1.33203 13.3333V2.66667C1.33203 2.29848 1.63051 2 1.9987 2H5.9987C6.79516 2 7.5101 2.34917 7.9987 2.90279C8.4873 2.34917 9.20223 2 9.9987 2H13.9987C14.3669 2 14.6654 2.29848 14.6654 2.66667V13.3333C14.6654 13.7015 14.3669 14 13.9987 14H8.66536ZM13.332 12.6667V3.33333H9.9987C9.2623 3.33333 8.66536 3.93029 8.66536 4.66667V12.6667H13.332ZM7.33203 12.6667V4.66667C7.33203 3.93029 6.7351 3.33333 5.9987 3.33333H2.66536V12.6667H7.33203Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">15 Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-5 mt-5">
                                    <div className="d-flex align-items-end gap-3">
                                        <h2 className="mb-0">$250</h2>
                                        <span className="fs-6 text-secondary fw-regular mb-2">/ month</span>
                                    </div>
                                    <Link href="/contact" className="btn btn-primary hover-up">
                                        <span> Book Now </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1181_1593)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-lg-5 mb-8">
                        <div className="col-lg-5 order-lg-2" data-aos="fade-up" data-aos-delay={200}>
                            <Link href="/classes-details" className="zoom-img rounded-5 overflow-hidden d-inline-blockq">
                                <img className="rounded-5 w-100" src="assets/imgs/pages/yoga/page-classes/img-2.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
                            <div className="p-md-7 p-5 rounded-5 bg-secondary-2 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
                                <span className="position-absolute bottom-0 end-0">
                                    <img src="assets/imgs/pages/yoga/template/pattern-6.png" alt="AstraX" />
                                </span>
                                <Link href="/classes-details">
                                    <h3 className="ds-6 text-anime-style-2">Guided Ashtanga Yoga</h3>
                                </Link>
                                <p>Ashtanga yoga builds both strength and flexibility while promoting physical and mental endurance. In our guided sessions, the instructor leads students through the series of postures, offering clear instructions.</p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Duration</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path d="M10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346ZM10.0013 16.668C13.6832 16.668 16.668 13.6832 16.668 10.0013C16.668 6.3194 13.6832 3.33464 10.0013 3.33464C6.3194 3.33464 3.33464 6.3194 3.33464 10.0013C3.33464 13.6832 6.3194 16.668 10.0013 16.668ZM10.8346 10.0013H14.168V11.668H9.16797V5.83464H10.8346V10.0013Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">90 minutes</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Schedule</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.9987 0.667969V2.0013H9.9987V0.667969H11.332V2.0013H13.9987C14.3669 2.0013 14.6654 2.29978 14.6654 2.66797V13.3346C14.6654 13.7028 14.3669 14.0013 13.9987 14.0013H1.9987C1.63051 14.0013 1.33203 13.7028 1.33203 13.3346V2.66797C1.33203 2.29978 1.63051 2.0013 1.9987 2.0013H4.66536V0.667969H5.9987ZM13.332 7.33463H2.66536V12.668H13.332V7.33463ZM4.66536 3.33464H2.66536V6.0013H13.332V3.33464H11.332V4.66797H9.9987V3.33464H5.9987V4.66797H4.66536V3.33464Z" fill="#666666" />
                                                </svg>
                                            </div>
                                            <p className="text-dark mb-0">Monday, Wednesday, Friday - 7:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Course</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M8.66536 14V15.3333H7.33203V14H1.9987C1.63051 14 1.33203 13.7015 1.33203 13.3333V2.66667C1.33203 2.29848 1.63051 2 1.9987 2H5.9987C6.79516 2 7.5101 2.34917 7.9987 2.90279C8.4873 2.34917 9.20223 2 9.9987 2H13.9987C14.3669 2 14.6654 2.29848 14.6654 2.66667V13.3333C14.6654 13.7015 14.3669 14 13.9987 14H8.66536ZM13.332 12.6667V3.33333H9.9987C9.2623 3.33333 8.66536 3.93029 8.66536 4.66667V12.6667H13.332ZM7.33203 12.6667V4.66667C7.33203 3.93029 6.7351 3.33333 5.9987 3.33333H2.66536V12.6667H7.33203Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">15 Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-5 mt-5">
                                    <div className="d-flex align-items-end gap-3">
                                        <h2 className="mb-0">$180</h2>
                                        <span className="fs-6 text-secondary fw-regular mb-2">/ month</span>
                                    </div>
                                    <Link href="/contact" className="btn btn-primary hover-up">
                                        <span> Book Now </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1181_1593)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-lg-5 mb-8">
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay={200}>
                            <Link href="/classes-details" className="zoom-img rounded-5 overflow-hidden d-inline-blockq">
                                <img className="rounded-5 w-100" src="assets/imgs/pages/yoga/page-classes/img-3.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
                            <div className="p-md-7 p-5 rounded-5 bg-secondary-2 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
                                <span className="position-absolute bottom-0 end-0">
                                    <img src="assets/imgs/pages/yoga/template/pattern-6.png" alt="AstraX" />
                                </span>
                                <Link href="/classes-details">
                                    <h3 className="ds-6 text-anime-style-2">Vinyasa Flow Yoga</h3>
                                </Link>
                                <p>Vinyasa Flow is a fluid and creative form of yoga that links breath with movement, transitioning from one posture to the next in a rhythmic flow. This class is perfect for those looking to build strength, flexibility.</p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Duration</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path d="M10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346ZM10.0013 16.668C13.6832 16.668 16.668 13.6832 16.668 10.0013C16.668 6.3194 13.6832 3.33464 10.0013 3.33464C6.3194 3.33464 3.33464 6.3194 3.33464 10.0013C3.33464 13.6832 6.3194 16.668 10.0013 16.668ZM10.8346 10.0013H14.168V11.668H9.16797V5.83464H10.8346V10.0013Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">90 minutes</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Schedule</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.9987 0.667969V2.0013H9.9987V0.667969H11.332V2.0013H13.9987C14.3669 2.0013 14.6654 2.29978 14.6654 2.66797V13.3346C14.6654 13.7028 14.3669 14.0013 13.9987 14.0013H1.9987C1.63051 14.0013 1.33203 13.7028 1.33203 13.3346V2.66797C1.33203 2.29978 1.63051 2.0013 1.9987 2.0013H4.66536V0.667969H5.9987ZM13.332 7.33463H2.66536V12.668H13.332V7.33463ZM4.66536 3.33464H2.66536V6.0013H13.332V3.33464H11.332V4.66797H9.9987V3.33464H5.9987V4.66797H4.66536V3.33464Z" fill="#666666" />
                                                </svg>
                                            </div>
                                            <p className="text-dark mb-0">Monday, Wednesday, Friday - 7:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Course</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M8.66536 14V15.3333H7.33203V14H1.9987C1.63051 14 1.33203 13.7015 1.33203 13.3333V2.66667C1.33203 2.29848 1.63051 2 1.9987 2H5.9987C6.79516 2 7.5101 2.34917 7.9987 2.90279C8.4873 2.34917 9.20223 2 9.9987 2H13.9987C14.3669 2 14.6654 2.29848 14.6654 2.66667V13.3333C14.6654 13.7015 14.3669 14 13.9987 14H8.66536ZM13.332 12.6667V3.33333H9.9987C9.2623 3.33333 8.66536 3.93029 8.66536 4.66667V12.6667H13.332ZM7.33203 12.6667V4.66667C7.33203 3.93029 6.7351 3.33333 5.9987 3.33333H2.66536V12.6667H7.33203Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">15 Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-5 mt-5">
                                    <div className="d-flex align-items-end gap-3">
                                        <h2 className="mb-0">$$255</h2>
                                        <span className="fs-6 text-secondary fw-regular mb-2">/ month</span>
                                    </div>
                                    <Link href="/contact" className="btn btn-primary hover-up">
                                        <span> Book Now </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1181_1593)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-lg-5 mb-8">
                        <div className="col-lg-5 order-lg-2" data-aos="fade-up" data-aos-delay={200}>
                            <Link href="/classes-details" className="zoom-img rounded-5 overflow-hidden d-inline-blockq">
                                <img className="rounded-5 w-100" src="assets/imgs/pages/yoga/page-classes/img-4.png" alt="AstraX" />
                            </Link>
                        </div>
                        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={400}>
                            <div className="p-md-7 p-5 rounded-5 bg-secondary-2 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
                                <span className="position-absolute bottom-0 end-0">
                                    <img src="assets/imgs/pages/yoga/template/pattern-6.png" alt="AstraX" />
                                </span>
                                <Link href="/classes-details">
                                    <h3 className="ds-6 text-anime-style-2">Restorative Yoga</h3>
                                </Link>
                                <p>Restorative yoga is a deeply relaxing practice designed to restore and rejuvenate both body and mind. Using props such as blankets, bolsters, and blocks, this class helps you settle into supported, gentle poses.</p>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Duration</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path d="M10.0013 18.3346C5.39893 18.3346 1.66797 14.6036 1.66797 10.0013C1.66797 5.39893 5.39893 1.66797 10.0013 1.66797C14.6036 1.66797 18.3346 5.39893 18.3346 10.0013C18.3346 14.6036 14.6036 18.3346 10.0013 18.3346ZM10.0013 16.668C13.6832 16.668 16.668 13.6832 16.668 10.0013C16.668 6.3194 13.6832 3.33464 10.0013 3.33464C6.3194 3.33464 3.33464 6.3194 3.33464 10.0013C3.33464 13.6832 6.3194 16.668 10.0013 16.668ZM10.8346 10.0013H14.168V11.668H9.16797V5.83464H10.8346V10.0013Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">90 minutes</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Schedule</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.9987 0.667969V2.0013H9.9987V0.667969H11.332V2.0013H13.9987C14.3669 2.0013 14.6654 2.29978 14.6654 2.66797V13.3346C14.6654 13.7028 14.3669 14.0013 13.9987 14.0013H1.9987C1.63051 14.0013 1.33203 13.7028 1.33203 13.3346V2.66797C1.33203 2.29978 1.63051 2.0013 1.9987 2.0013H4.66536V0.667969H5.9987ZM13.332 7.33463H2.66536V12.668H13.332V7.33463ZM4.66536 3.33464H2.66536V6.0013H13.332V3.33464H11.332V4.66797H9.9987V3.33464H5.9987V4.66797H4.66536V3.33464Z" fill="#666666" />
                                                </svg>
                                            </div>
                                            <p className="text-dark mb-0">Monday, Wednesday, Friday - 7:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="position-relative mt-6">
                                        <p className="fw-bold text-primary position-absolute bottom-100 start-0 mb-2">Course</p>
                                        <div className="d-flex align-items-center gap-2 bg-white rounded-pill px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M8.66536 14V15.3333H7.33203V14H1.9987C1.63051 14 1.33203 13.7015 1.33203 13.3333V2.66667C1.33203 2.29848 1.63051 2 1.9987 2H5.9987C6.79516 2 7.5101 2.34917 7.9987 2.90279C8.4873 2.34917 9.20223 2 9.9987 2H13.9987C14.3669 2 14.6654 2.29848 14.6654 2.66667V13.3333C14.6654 13.7015 14.3669 14 13.9987 14H8.66536ZM13.332 12.6667V3.33333H9.9987C9.2623 3.33333 8.66536 3.93029 8.66536 4.66667V12.6667H13.332ZM7.33203 12.6667V4.66667C7.33203 3.93029 6.7351 3.33333 5.9987 3.33333H2.66536V12.6667H7.33203Z" fill="#666666" />
                                            </svg>
                                            <p className="text-dark mb-0">15 Lessons</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-5 mt-5">
                                    <div className="d-flex align-items-end gap-3">
                                        <h2 className="mb-0">$320</h2>
                                        <span className="fs-6 text-secondary fw-regular mb-2">/ month</span>
                                    </div>
                                    <Link href="/contact" className="btn btn-primary hover-up">
                                        <span> Book Now </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                            <g clipPath="url(#clip0_1181_1593)">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                            </g>
                                        </svg>
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

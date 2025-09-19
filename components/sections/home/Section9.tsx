import Link from "next/link";

export default function Section9({ classList }: any) {
    return (
        <>
            {/*yoga section 9*/}
            <section className={`yoga-section-9 position-relative py-120 ${classList}`}>
                <div className="container">
                    <div className="text-center mb-80">
                        <div className="icon">
                            <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                        </div>
                        <span className="btn-text text-primary">company blog</span>
                        <h2 className="text-anime-style-2">Our blog &amp; insights</h2>
                    </div>
                    <div className="row mt-8">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-news position-relative mb-lg-0 mb-md-5 hover-up">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-9/img-1.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-dark px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">yoga</span>
                                </Link>
                                <div className="card-news-body border p-4 border-top-0 bg-white">
                                    <div className="d-flex card-news-information mt- gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-news position-relative mb-lg-0 mb-md-5 hover-up">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-9/img-2.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-dark px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">gym</span>
                                </Link>
                                <div className="card-news-body border p-4 border-top-0 bg-white">
                                    <div className="d-flex card-news-information mt- gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
                            <div className="card-news position-relative mb-lg-0 mb-md-5 hover-up">
                                <Link href="#" className="card-news-img position-relative d-block">
                                    <img className="w-100" src="assets/imgs/pages/yoga/page-home/home-section-9/img-3.png" alt="AstraX" />
                                    <span className="text-uppercase fw-bold fs-8 text-white bg-dark px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5">fitness</span>
                                </Link>
                                <div className="card-news-body border p-4 border-top-0 bg-white">
                                    <div className="d-flex card-news-information mt- gap-4">
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-solid fa-calendar-days text-primary" />
                                            <p className="mb-0">December 21, 2025</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-user text-primary" />
                                            <span className="opacity-50">By</span>
                                            <Link href="#" className="mb-0 text-primary-2">
                                                Admin
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-news-title mt-2 mb-4">
                                        <Link href="#">
                                            <h6>2025: brace for the 'big one' cyber attack.</h6>
                                        </Link>
                                    </div>
                                    <Link href="#" className="text-dark opacity-50 fs-7 fw-semibold">
                                        Read More
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

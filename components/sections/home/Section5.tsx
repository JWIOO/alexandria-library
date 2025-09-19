export default function Section5() {
    return (
        <>
            {/*yoga home section 5*/}
            <section className="yoga-section-5 overflow-hidden">
                <div className="position-relative d-flex flex-column bg-dark">
                    <div className="h-100 position-lg-absolute position-relative end-lg-50 bottom-lg-0 order-2 d-none d-lg-block">
                        <img className="w-100 h-100" src="assets/imgs/pages/yoga/page-home/home-section-5/img-1.png" alt="muzilla" />
                    </div>
                    <div className="container py-120 order-1">
                        <div className="row">
                            <div className="col-lg-5 ms-auto position-relative">
                                <img className="position-absolute top-lg-0 top-50 start-lg-100 start-50 translate-middle-x" src="assets/imgs/pages/yoga/page-home/home-section-5/img-2.png" alt="AstraX" />
                                <div className="bg-dark p-lg-0 p-5 z-0">
                                    <div className="icon">
                                        <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                                    </div>
                                    <span className="btn-text text-primary">Book an Appointment</span>
                                    <h2 className="mb-5 mt-3 text-white text-anime-style-2">
                                        Get in touch with us <br />
                                        for yoga course.
                                    </h2>
                                    <form action="#">
                                        <div className="input-group">
                                            <div className="row g-3">
                                                <div className="col-md-6" data-aos="fade-up" data-aos-delay={0}>
                                                    <div>
                                                        <input type="text" className="form-control rounded-0 username-white bg-white bg-opacity-10 border-white border-opacity-25 border py-3" name="username" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                                    <div>
                                                        <input type="text" className="form-control rounded-0 email-white bg-white bg-opacity-10 border-white border-opacity-25 border py-3" name="email" placeholder="Business email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                                    <div>
                                                        <input type="text" className="form-control rounded-0 phone-white bg-white bg-opacity-10 border-white border-opacity-25 border py-3" name="username" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
                                                    <div className="select-form">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected={true}>Yanki Yoga</option>
                                                            <option value={1}>Hatha Yoga</option>
                                                            <option value={2}>Vinyasa Yoga</option>
                                                            <option value={3}>Bikram Yoga</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button aria-label="submit" type="submit" className="btn btn-primary mt-3">
                                            <span>get a quote</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <g clipPath="url(#clip0_1191_996)">
                                                    <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                </g>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

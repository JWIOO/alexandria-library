export default function Section6() {
    return (
        <>
            {/*yoga about section 6*/}
            <section className="yoga-about-section-6 position-relative overflow-hidden py-120 bg-secondary-2">
                <div className="position-absolute top-0 start-0 z-0 d-none d-lg-block" data-aos="fade-right">
                    <img src="assets/imgs/pages/yoga/template/pattern-3.png" alt="AstraX" />
                </div>
                <div className="position-absolute top-0 end-0 z-0" data-aos="fade-left">
                    <img src="assets/imgs/pages/yoga/template/pattern-4.png" alt="AstraX" />
                </div>
                <div className="container position-relative z-1">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-5">
                                <span className="btn-text text-primary">Start your journey</span>
                                <h2 className="text-anime-style-2">Book your class today!</h2>
                                <p className="text-anime-style-3">Try for 30 days. No upfront payment required. Cancel anytime.</p>
                                <div className="form-element-select d-flex flex-wrap align-items-center gap-2 pb-4 mt-4">
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={0}>
                                        <input type="radio" className="mon" name="options-outlined" id="mon" defaultChecked={true} />
                                        <label className="mon icon-shape icon-xl rounded-circle bg-white" htmlFor="mon">
                                            <span className="fw-bold fs-7 text-uppercase">mon</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={100}>
                                        <input type="radio" className="tue" name="options-outlined" id="tue" />
                                        <label className="tue icon-shape icon-xl rounded-circle bg-white" htmlFor="tue">
                                            <span className="fw-bold fs-7 text-uppercase">tue</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={200}>
                                        <input type="radio" className="wed" name="options-outlined" id="wed" />
                                        <label className="wed icon-shape icon-xl rounded-circle bg-white" htmlFor="wed">
                                            <span className="fw-bold fs-7 text-uppercase">wed</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={300}>
                                        <input type="radio" className="thu" name="options-outlined" id="thu" />
                                        <label className="thu icon-shape icon-xl rounded-circle bg-white" htmlFor="thu">
                                            <span className="fw-bold fs-7 text-uppercase">thu</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={400}>
                                        <input type="radio" className="fri" name="options-outlined" id="fri" />
                                        <label className="fri icon-shape icon-xl rounded-circle bg-white" htmlFor="fri">
                                            <span className="fw-bold fs-7 text-uppercase">fri</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={500}>
                                        <input type="radio" className="sat" name="options-outlined" id="sat" />
                                        <label className="sat icon-shape icon-xl rounded-circle bg-white" htmlFor="sat">
                                            <span className="fw-bold fs-7 text-uppercase">sat</span>
                                        </label>
                                    </div>
                                    <div className="form-element" data-aos="fade-up" data-aos-delay={600}>
                                        <input type="radio" className="sun" name="options-outlined" id="sun" />
                                        <label className="sun icon-shape icon-xl rounded-circle bg-white" htmlFor="sun">
                                            <span className="fw-bold fs-7 text-uppercase">sun</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 wow img-custom-anim-left">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control username rounded-0 border-0 mb-3" name="username" placeholder="Your name" />
                                        <input type="text" className="form-control phone rounded-0 border-0 mb-3" name="Phone" placeholder="Phone number" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control email rounded-0 border-0 mb-3" name="email" placeholder="Business email" />
                                        <div className="select-form mb-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected={true}>Yanki Yoga</option>
                                                <option value={1}>Hatha Yoga</option>
                                                <option value={2}>Vinyasa Yoga</option>
                                                <option value={3}>Bikram Yoga</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button aria-label="submit" type="submit" className="btn btn-primary hover-up">
                                    <span>get a quote</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

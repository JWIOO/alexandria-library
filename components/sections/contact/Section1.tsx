export default function Section1() {
    return (
        <>
            {/*yoga contact section 1*/}
            <section className="yoga-contact-section-1 position-relative overflow-hidden pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-lg-auto">
                            <div className="bg-secondary-2 rounded-4 overflow-hidden p-lg-7 p-5" data-aos="fade-up">
                                <div className="text-center mb-4">
                                    <div className="icon">
                                        <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                                    </div>
                                    <span className="btn-text text-primary">leave a message</span>
                                    <h2>Get in Touch</h2>
                                </div>
                                <form action="#" className="form-group">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control border-0 ps-5" name="username" placeholder="Your name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control border-0 ps-5" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-12 select-form">
                                            <select name="service" className="form-select p-3 ps-5" id="Subject" aria-placeholder="Select Subject">
                                                <option selected={true}>Select Subject</option>
                                                <option value="subject-2">Subject 1</option>
                                                <option value="subject-2">Subject 2</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control ps-5" id="message" placeholder="Type Your Message" aria-label="message" defaultValue={""} />
                                        </div>
                                        <div className="col-12 text-center">
                                            <button aria-label="submit" type="submit" className="btn btn-primary hover-up">
                                                <span> Send Message </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_1181_1593)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

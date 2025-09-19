import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*yoga home section 1*/}
            <section className="yoga-section-1 position-relative overflow-hidden bg-primary">
                <div className=" position-relative pt-250 pb-250 m-3 rounded-4 overflow-hidden">
                    <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 m-3">
                        <img className="w-100 h-100" src="assets/imgs/pages/yoga/page-home/home-section-1/img-dot.png" alt="AstraX" />
                    </div>
                    <div className="container position-relative z-1 text-lg-start text-center">
                        <div className="row align-items-center position-relative">
                            <div className="col-lg-5 col-md-12 px-md-0 position-relative">
                                <div className="icon">
                                    <img src="assets/imgs/pages/yoga/page-home/home-section-1/icon.svg" alt="AstraX" />
                                </div>
                                <h1 className="mb-8 text-white text-anime-style-2">
                                    Yoga for easy <br />
                                    life relieaf.
                                </h1>
                                <Link href="/contact" className="btn btn-white" data-aos="fade-up" data-aos-delay={200}>
                                    <span>book a seat</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_1181_981)">
                                            <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#D42C6C" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link href="#" className="btn btn-dark bg-transparent" data-aos="fade-up" data-aos-delay={600}>
                                    info@astrax.com
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y me-10">
                        <img className="position-relative z-1 wow img-custom-anim-top" src="assets/imgs/pages/yoga/page-home/home-section-1/img-1.png" alt="AstraX" />
                        <div className="position-absolute top-50 start-50 translate-middle z-0">
                            <img className="flickering" src="assets/imgs/pages/yoga/page-home/home-section-1/img-2.png" alt="AstraX" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

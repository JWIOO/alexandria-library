export default function Section1() {
    return (
        <>
            {/*yoga about section 1*/}
            <section className="yoga-about-section-1 position-relative overflow-hidden py-120">
                <div className="container position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle-x">
                        <img className="ribbonRotate" src="assets/imgs/pages/yoga/template/pattern-1.png" alt="AstraX" />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="icon">
                                    <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                                </div>
                                <span className="btn-text text-primary">Welcome to AstraX Yoga Center</span>
                                <h2 className="text-anime-style-3">Embrace Harmony, Elevate Your Mind</h2>
                                <p className="wow img-custom-anim-top">Whether you are a beginner seeking relaxation or an experienced practitioner aiming for deeper self-awareness, our diverse range of classes and expert instructors will guide you on your journey to inner balance and holistic well-being.</p>
                                <p className="wow img-custom-anim-top">Our center offers traditional and contemporary yoga styles, guided meditation sessions, and specialized wellness programs designed to restore harmony in today’s fast-paced world. Join us and experience the serenity, strength, and mindfulness that define AstraX Yoga Center.</p>
                            </div>
                            <div className="d-flex gap-3 w-md-75 pt-3">
                                <div>
                                    <div className="d-flex align-items-center" data-aos="fade-up" data-aos-delay={0}>
                                        <div className="avatar-md m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-1.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar-md m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-2.png" alt="AstraX" />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="avatar-md m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-3.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar-md m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="assets/imgs/pages/yoga/page-home/home-section-3/author-4.png" alt="AstraX" />
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative wow img-custom-anim-left w-75">
                                    <div className="position-absolute top-0 end-0 pe-8 pt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                            <path d="M0 17.1423H6.42856L2.14282 25.7137H8.57139L12.8571 17.1423V4.28516H0V17.1423Z" fill="#292929" />
                                            <path d="M17.1445 4.28516V17.1423H23.5731L19.2874 25.7137H25.7159L30.0017 17.1423V4.28516H17.1445Z" fill="#292929" />
                                        </svg>
                                    </div>
                                    <div className="d-flex gap-1 mb-2">
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary  fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                        <i className="bi bi-star-fill text-primary fs-10" />
                                    </div>
                                    <h4 className="fs-18 pe-10 text-anime-style-2">Unlock your full potential by harmonizing mind and body through movement.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end d-none d-lg-block">
                            <div className="position-relative d-inline-block">
                                <img className="wow img-custom-anim-top" src="assets/imgs/pages/yoga/page-about/img-1.png" alt="AstraX" />
                                <div className="position-absolute botom-0 start-0 translate-middle pb-10">
                                    <img data-aos="fade-up" className="w-100 img-2-sec2" src="assets/imgs/pages/yoga/page-about/img-2.png" alt="AstraX" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

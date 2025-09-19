export default function Section2() {
    return (
        <>
            {/*yoga about section 2*/}
            <section className="yoga-about-section-2 position-relative bg-secondary-2">
                <div className="container wow img-custom-anim-top py-6">
                    <div className="circle position-absolute bottom-0 start-100 translate-middle-x" />
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="item text-center">
                                <h1 className="count mb-0">
                                    <span className="odometer text-nowrap" data-count={250} />+
                                </h1>
                                <p className="mb-0 text-primary fs-20 fw-medium">Location served</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="item text-center">
                                <h1 className="count mb-0">
                                    <span className="odometer text-nowrap" data-count={5500} />
                                </h1>
                                <p className="mb-0 text-primary fs-20 fw-medium">Complete Cases</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="item text-center">
                                <h1 className="count mb-0">
                                    <span className="odometer text-nowrap" data-count={150} />+
                                </h1>
                                <p className="mb-0 text-primary fs-20 fw-medium">Happy Customer</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="item text-center">
                                <h1 className="count mb-0">
                                    <span className="odometer text-nowrap" data-count={420} />+
                                </h1>
                                <p className="mb-0 text-primary fs-20 fw-medium">Expert Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

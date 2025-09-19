import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*yoga home section 2*/}
            <section className="yoga-section-2 position-relative py-120">
                <div className="container">
                    <div className="text-center mb-80">
                        <div className="icon">
                            <img src="assets/imgs/pages/yoga/template/icons/icon.svg" alt="AstraX" />
                        </div>
                        <span className="btn-text text-primary">yoga &amp; pilates Services</span>
                        <h2 className="text-anime-style-2">
                            Calm your mind &amp; soothe <br />
                            your spirit.
                        </h2>
                    </div>
                    <div className="row g-md-5">
                        <div className="col-md-6">
                            <div className="border-top-md">
                                <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                    <Link href="/classes-details">
                                        <h6>Hatha Yoga</h6>
                                        <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                <Link href="/classes-details">
                                    <h6>Vinyasa Yoga</h6>
                                    <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                </Link>
                            </div>
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                <Link href="/classes-details">
                                    <h6>Ashtanga Yoga</h6>
                                    <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="border-top-md">
                                <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                    <Link href="/classes-details">
                                        <h6>Bikram Yoga</h6>
                                        <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                <Link href="/classes-details">
                                    <h6>Iyengar Yoga</h6>
                                    <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                </Link>
                            </div>
                            <div className="card-service tg-img-reveal-item w-100 border-bottom py-5" data-fx={1} data-img="assets/imgs/pages/yoga/page-home/home-section-2/img-hover.png">
                                <Link href="/classes-details">
                                    <h6>Kundalini Yoga</h6>
                                    <p className="mb-0">Yin Yoga is a slow-paced, meditative style of yoga that targets deep connective tissues, such as ligaments, joints, and fascia.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

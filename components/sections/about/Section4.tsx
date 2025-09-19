"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Section4() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/*yoga-about home section 4*/}
            <section className="yoga-about-section-4 position-relative d-none d-md-block">
                <div className="bg-secondary-2 position-absolute top-50 w-100 h-50" />
                <div className="container wow img-custom-anim-left">
                    <div className="position-relative">
                        <div className="img position-relative">
                            <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
                            <img className="w-100" src="assets/imgs/pages/yoga/page-about/img-4.png" alt="AstraX" />
                        </div>
                        <div className="position-absolute z-1 top-50 start-50 translate-middle bg-white icon-shape icon-160 rounded-circle border border-primary">
                            <Link
                                href="#"
                                className="popup-video w-100"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(true);
                                }}
                            >
                                <i className="ri-play-fill text-primary fs-3" />
                            </Link>
                            <div className="position-absolute top-50 start-50 translate-middle w-100">
                                <h6 className="circle-text rotateme">
                                    <span className="fw-regular">/ play /</span>
                                    <span className="fw-regular">play /</span>
                                    <span className="fw-regular">play /</span>
                                    <span className="fw-regular">play /</span>
                                    <span className="fw-regular">play /</span>
                                    <span className="fw-regular">play /</span>
                                    <span className="fw-regular">/</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="GSENAaAu8QQ" onClose={() => setIsOpen(false)} />
        </>
    );
}

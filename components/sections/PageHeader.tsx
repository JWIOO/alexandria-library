"use client";
import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            <style jsx>{`
                @font-face {
                    font-family: 'GapyeongWave';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/GapyeongWave.woff2') format('woff2');
                    font-weight: normal;
                    font-display: swap;
                }
            `}</style>
            {/*yoga section header*/}
            <section className="yoga-section-header bg-dark-1" data-background="assets/imgs/pages/yoga/page-about/banner.png">
                <div className="container position-relative">
                    <div className="container position-relative z-1 py-120-keep">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-8">
                                <h2 className="text-white text-anime-style-2 mb-4" style={{ fontFamily: 'GapyeongWave' }}>{title}</h2>
                                <Breadcrumb page={current_page} />
                            </div>
                            {/*<div className="col-lg-4 col-md-8">*/}
                            {/*    <p className="text-white mb-3 text-anime-style-3">We believe in the transformative power of yoga and meditation to nurture the mind, body, and spirit.</p>*/}
                            {/*    <Link href="/contact" className="btn btn-primary hover-up">*/}
                            {/*        <span> Let’s talk </span>*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">*/}
                            {/*            <g clipPath="url(#clip0_1181_1593)">*/}
                            {/*                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />*/}
                            {/*            </g>*/}
                            {/*        </svg>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

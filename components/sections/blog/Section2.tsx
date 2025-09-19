import Link from "next/link";

const listnews = [
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-103",
        code_second: "Business",
        title: "[기획 TOOL] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.",
        description: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 ‘실제 기획 자료’ (기획안, 기획제안서, 기획 보고소 등)로 제대로 ‘보여줄 수’ 있는지에 대해 초점을 맞추고 있습니다.",
        goal: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 ‘실제 기획 자료’ (기획안, 기획제안서, 기획 보고소 등)로 제대로 ‘보여줄 수’ 있는지에 대해 초점을 맞추고 있습니다.",
    },
    // {
    //     img: "img-new-2.png",
    //     link: "/classes-details",
    //     link_author: "#",
    //     code_first: "Smith",
    //     code_second: "Business",
    //     title: "Mindfulness 101: A Quick Guide",
    //     description: "Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services",
    // },
    // {
    //     img: "img-new-3.png",
    //     link: "/classes-details",
    //     link_author: "#",
    //     code_first: "Smith",
    //     code_second: "Business",
    //     title: "Yoga’s Health Benefits Explained",
    //     description: "Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services",
    // },
];
export default function Section2() {
    return (
        <section className="yoga-blog-section-2 position-relative overflow-hidden py-120 bg-secondary-2">

            <div className="container">
                <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                    구성 스텝
                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                </h6>

                {/* 뱃지 영역 */}
                <div className="d-flex gap-3 align-items-center mx-3">
                    {/* 필수형 뱃지 */}
                    <div className="w-32 px-6 py-3 bg-neutral-900 rounded-[5px] inline-flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-normal font-['Pretendard']">필수형</span>
                            <span className="origin-top-left rotate-90 text-lime-400 text-base font-normal font-['Font_Awesome_6_Pro']">
          
        </span>
                        </div>
                    </div>

                    {/* 해시태그 뱃지 */}
                    <div className="w-32 px-6 py-3 bg-neutral-900 rounded-[5px] inline-flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-sm font-normal font-['Pretendard']">해시태그</span>
                            <span className="origin-top-left rotate-90 text-lime-400 text-base font-normal font-['Font_Awesome_6_Pro']">
          
        </span>
                        </div>
                    </div>
                </div>


                <form className="input-group mt-3" data-aos="zoom-in">
                    <input type="text" className="form-control border" placeholder="찾고 싶은 내용을 입력하세요." aria-label="Enter Your Keywords" aria-describedby="button-addon2" />
                    <button aria-label="search" type="submit" className="btn btn-primary bg-primary border-0 rounded-2" id="button-addon2">
                        <i className="fa-solid fa-magnifying-glass text-white" />
                    </button>
                </form>
                <div className="text-anime-style-2 mb-8 text-anime-style-2"> </div>
                <div className="row g-5">
                    <div className="col-lg-8">
                        {listnews.map(({ img, link, link_author, code_first, code_second, title, description, goal }) => (
                            <div className="card-new position-relative wow img-custom-anim-top mb-6">
                                <div className="card-new-img position-relative rounded-top-3 overflow-hidden zoom-img">

                                    <div className="ratio ratio-16x9">
                                    <img className="w-full rounded-tl-xl rounded-tr-xl object-fit-cover"
                                         src={`assets/imgs/pages/yoga/page-classes-details/${img}`} alt="AstraX" />
                                    </div>
                                    {/* 좌측 상단 뱃지 */}
                                    <div className="position-absolute top-0 start-0 m-3">
                                            <span className="badge bg-success text-dark px-3 py-2 rounded-2 fw-bold">
                                              필수형
                                            </span>
                                    </div>
                                    <div className="position-absolute bottom-0 start-0 w-100 py-2 news-gradient--overlay news-gradient from-green-500/80 to-teal-200/80
                                    "
                                    >
                                        <div className="d-flex card-news-information gap-4 ps-2 ms-3 text-black">
                                            <div className="d-flex align-items-center gap-1 text-black">
                                                <i className="fa-solid fa-code_seconds" />
                                                <p className="mb-0">

                                                    <Link href={`${link_author}`} className="">
                                                        {code_first}
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-code_seconds" />
                                                <p className="mb-0 text-black">{code_second}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="card-new-content p-5 bg-black rounded-bottom-3">
                                    <h5 className="self-stretch h-9 justify-center text-white leading-10" style={{ fontFamily: 'Pretendard', fontWeight: 'bold' }}>
                                        {title.split('] ').map((part, index) => (
                                            index === 0 ?
                                            <span key={index}>{part}]<br /></span> :
                                            <span key={index}>{part}</span>
                                        ))}
                                    </h5>

                                    <Link href="link" className="btn btn-primary hover-up rounded-0">
                                        <span style={{ color: '#ADFF00' }}>게시물 보기</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                                fill="#ADFF00"/>
                                        </svg>
                                    </Link>
                                    <div
                                        className="self-stretch justify-center text-zinc-500 text-base font-medium font-['Pretendard'] leading-relaxed text-description-title">설명
                                    </div>
                                    <p className="mb-5 pb-5 text-description-content">{description}</p>

                                    <div
                                        className="self-stretch justify-center text-zinc-500 text-base font-medium font-['Pretendard'] leading-relaxed text-description-title">목표
                                    </div>
                                    <p className="mb-5 pb-5 text-description-content ">{goal}</p>
                                    <div
                                        className="relative self-stretch h-52 p-5 rounded-xl shadow-[0px_3px_15px_0px_rgba(255,255,255,0.20)] border-b border-CP-CPC flex flex-col justify-center items-center gap-2.5 overflow-hidden"
                                        style={{
                                            backgroundImage: "url('assets/imgs/pages/yoga/page-about/subbanner.png')", // 업로드한 이미지 경로
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        {/* 반투명 오버레이 (가독성을 위해 추가) */}
                                        <div className="absolute inset-0 bg-black/60"></div>

                                        {/* 텍스트 영역 */}
                                        <div className="relative flex flex-col justify-start items-center gap-[5px]">
                                            <div className="w-[622px] text-center text-white text-base font-bold font-['Gapyeong_Hanseokbong'] leading-snug">
                                                “아들아, 중고차를 팔 때, 단 1시간을 들여 정성들여 닦고 간단한 흠집만이라도 제거한다면, <br />
                                                그 간단한 ‘정성’만으로도 몇 백불은 더 받을 수 있단다.”
                                            </div>
                                            <div className="text-center text-gray-400 text-xs font-bold font-['Gapyeong_Hanseokbong'] leading-none">
                                                - 미국 애리조나 주 카운티 maxim -
                                            </div>
                                        </div>
                                    </div>
                                    {/* 진행횟수 / 평점 섹션 */}
                                    <div className="row g-5 mb-5">
                                        {/* 진행횟수 */}
                                        <div className="col-md-6">
                                            <div className="self-stretch justify-center">


                                                <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                                   진행 횟수
                                                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                            </div>
                                            <div className="d-flex align-items-baseline">
                                            <span className="fw-bold fs-2">37</span>
                                                <span className="text-gray-400 ms-2">회</span>
                                            </div>
                                        </div>

                                        {/* 평점 */}
                                        <div className="col-md-6">
                                            <h6 className="position-relative border-bottom w-100 mb-4 pb-3">
                                                평점
                                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                                        </svg>
                                                    </span>
                                            </h6>
                                            <div className="d-flex align-items-center">
                                                <span className="fw-bold fs-2 me-2">9.5</span>
                                                {/* 별 10개 */}
                                                <div className="d-flex">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className={`fa-solid fa-star ${
                                                                i < 9.5 ? "text-lime-400" : "text-gray-600"
                                                            }`}
                                                            style={{ fontSize: "14px" }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                {/*    <h6 className="position-relative border-bottom w-100 mb-4 pb-3">*/}
                                {/*        Recent Posts*/}
                                {/*        <span className="position-absolute top-0 start-0 text-primary mt-4">*/}
                                {/*    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">*/}
                                {/*        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />*/}
                                {/*    </svg>*/}
                                {/*</span>*/}
                                {/*    </h6>*/}



                                </div>


                            </div>
                        ))}
                        <div className="row pt-3 text-center">
                            <div className="d-flex justify-content-start align-items-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination gap-2">
                                        <li className="page-item">
                                            <Link
                                                className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular"
                                                href="#" aria-label="Previous">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                    <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                1
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link active pagination_item border-0 icon-shape fw-regular" href="#">
                                                2
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                3
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#">
                                                ...
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular" href="#" aria-label="Next">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                    <path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-lg-5 mb-lg-0 mb-5 p-3">
                        {/*<div className="block-search p-lg-5 p-3 bg-white rounded-4 border-primary-2">*/}
                        {/*    /!*<h6 className="position-relative border-bottom w-100 mb-4 pb-3">*!/*/}
                        {/*    /!*    Search Here*!/*/}
                        {/*    /!*    <span className="position-absolute top-0 start-0 text-primary mt-4">*!/*/}
                        {/*    /!*        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">*!/*/}
                        {/*    /!*            <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />*!/*/}
                        {/*    /!*        </svg>*!/*/}
                        {/*    /!*    </span>*!/*/}
                        {/*    /!*</h6>*!/*/}
                        {/*    /!*<form className="input-group mt-3" data-aos="zoom-in">*!/*/}
                        {/*    /!*    <input type="text" className="form-control border" placeholder="Enter Your Keywords" aria-label="Enter Your Keywords" aria-describedby="button-addon2" />*!/*/}
                        {/*    /!*    <button aria-label="search" type="submit" className="btn btn-primary bg-primary border-0 rounded-2" id="button-addon2">*!/*/}
                        {/*    /!*        <i className="fa-solid fa-magnifying-glass text-white" />*!/*/}
                        {/*    /!*    </button>*!/*/}
                        {/*    /!*</form>*!/*/}
                        {/*</div>*/}
                        <div className="block-our-services p-lg-5 p-4 bg-black rounded-4 border-primary-2 mt-4">
                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                구성 스텝
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={0}>
                                <span className="fw-medium">Yoga Practices &amp; Techniques</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>

                            <Link href="#" className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3" data-aos="fade-up" data-aos-delay={400}>
                                <span className="fw-medium">Health &amp; Wellness</span>
                                <i className="fa-solid fa-arrow-right" />
                            </Link>
                            <div
                                  className="btn btn-outline-secondary text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                                  >
                                <div
                                    className="h-12 px-3.5 py-3 bg-neutral-900 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-stone-500 inline-flex flex-col justify-start items-start gap-2.5">
                                    <div className="w-72 h-6 relative bg-neutral-900">
                                        <div
                                            className="d-flex left-0 top-0 absolute inline-flex justify-start items-start gap-[5px]">
                                            <div
                                                className="justify-center text-base font-semibold font-['Pretendard'] leading-normal">1)
                                            </div>
                                            <div
                                                className="w-72 justify-center text-gray-400 text-base font-normal font-['Sora'] leading-relaxed">[도식화]
                                                잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="p-lg-5 p-4 rounded-4 bg-black  mt-4">
                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                우수 사례
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4}
                                         viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C"/>
                                    </svg>
                                </span>
                            </h6>
                            <div className="d-flex align-items-center wow img-custom-anim-top">
                                <div className="pe-4">
                                    <div className="icon-80">
                                        <Link href="#">
                                            <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/recent-img.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-flex gap-1">
                                        <i className="fa-regular fa-clock fs-7 text-secondary" />
                                        <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>
                                    </span>
                                    <Link href="#">
                                        <h6 className="mb-0 fs-18">10 Easy Yoga Poses for Energy</h6>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="p-lg-5 p-4 rounded-4 bg-black  mt-4">
                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                후기
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />
                                    </svg>
                                </span>
                            </h6>
                            <div className="align-items-center wow img-custom-anim-top">
                                <div className="pe-4">
                                    <div className="icon-80">
                                        <Link href="#">
                                            <img className="rounded-3" src="assets/imgs/pages/yoga/page-classes-details/recent-img.png" alt="AstraX" />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex inline-flex justify-start items-center gap-1.5">
                                        <div
                                            className="justify-center text-sm font-semibold font-['Pretendard']">김민지
                                        </div>
                                        <div
                                            className="w-0 h-2.5 outline outline-1 "></div>
                                        <div
                                            className="justify-center text-neutral-400 text-sm font-medium font-['Pretendard']">6기
                                            서비스팀
                                        </div>
                                    </div>
                                    {/*<span className="d-flex gap-1 mt-2">*/}
                                    {/*    <i className="fa-regular fa-clock fs-7 text-secondary" />*/}
                                    {/*    <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>*/}
                                    {/*</span>*/}
                                    <div
                                        className="mt-4 justify-center text-lg font-medium font-['Pretendard'] leading-relaxed">해당
                                        내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*<div className="sidebar__widget p-lg-5 p-4 mt-4 bg-white rounded-4 border-primary-2">*/}
                        {/*    <h6 className="position-relative border-bottom w-100 mb-4 pb-3">*/}
                        {/*        Popular code_seconds*/}
                        {/*        <span className="position-absolute top-0 start-0 text-primary mt-4">*/}
                        {/*            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">*/}
                        {/*                <path d="M0 0H56.5L60 4H0V0Z" fill="#D42C6C" />*/}
                        {/*            </svg>*/}
                        {/*        </span>*/}
                        {/*    </h6>*/}
                        {/*    <div className="sidebar__code_second-list wow img-custom-anim-top">*/}
                        {/*        <ul className="list-wrap d-flex flex-wrap gap-2">*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Yoga*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Meditation*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Mindfulness*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Wellness*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0 active">*/}
                        {/*                    Breathwork*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Relaxation*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Flexibility*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Strength*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="btn-secondary btn border-0 rounded-2 text-capitalize px-3 py-2 fs-7 mb-0">*/}
                        {/*                    Balance*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="bg-primary p-lg-7 p-5 mt-4 rounded-4">*/}
                        {/*    <h6 className="text-white text-anime-style-3">Have any Questions? Call us Today!</h6>*/}
                        {/*    <p className="text-white mb-4 mt-3">Bichir sand dab chimaera glowlight danio bombay duck</p>*/}
                        {/*    <Link href="tel:+(123) 222-8888">*/}
                        {/*        <h5 className="text-white">+(123) 222-8888</h5>*/}
                        {/*    </Link>*/}
                        {/*    <Link href="#" className="btn btn-white w-100 mt-3">*/}
                        {/*        <span className="text-primary">Make Appointment</span>*/}
                        {/*        <i className="fa-solid fa-arrow-right text-primary" />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

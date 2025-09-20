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
                    검색
                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
                                    </svg>
                                </span>
                </h6>

                {/* 뱃지 영역 */}

                {/* ===== 뱃지 영역: 아래 블록으로 기존 뱃지 2개 블록을 교체하세요 ===== */}
                <div className="d-flex flex-wrap gap-4 items-center mx-3 mt-6">
                    {/* 필수형  */}
                    <div
                        role="button"
                        aria-pressed="false"
                        tabIndex={0}
                        className="w-32 px-6 py-3 bg-neutral-900 rounded-[5px] inline-flex justify-between items-center "
                        style={{
                            background: "#0f1411",
                            boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.01)",
                        }}
                    >
                        <div className="flex items-center gap-4">
                          <span
                              className="text-white text-[22px] font-semibold leading-none"
                              style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}
                          >
                            필수형
                          </span>
                          {/* 화살표를 텍스트 우측에 배치 */}
                          <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              aria-hidden="true"
                              style={{
                                  width: "24px",
                                  height: "24px",
                                  color: "#9AFF00",
                                  filter: "drop-shadow(0 4px 10px rgba(154,255,0,0.12))",
                              }}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  d="M6 9l6 6 6-6"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                              />
                          </svg>
                        </div>

                    </div>

                    {/* 해시태그 (비활성 스타일) */}
                    <div
                        role="button"
                        aria-pressed="false"
                        tabIndex={0}
                        className="min-w-[220px] md:min-w-[320px] h-[72px] px-8 rounded-[12px] inline-flex justify-between items-center"
                        style={{
                            background: "#0f1411",
                            boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.01)",
                        }}
                                        >
                                            <div className="flex items-center gap-4">
                          <span
                              className="text-gray-500/60 text-[22px] font-semibold leading-none"
                              style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}
                          >
                            해시태그
                          </span>
                          {/* 화살표를 텍스트 우측에 배치 */}
                          <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              aria-hidden="true"
                              style={{
                                  width: "24px",
                                  height: "24px",
                                  color: "#9AFF00",
                                  filter: "drop-shadow(0 4px 10px rgba(154,255,0,0.12))",
                              }}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  d="M6 9l6 6 6-6"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                              />
                          </svg>
                        </div>

                    </div>
                </div>
                {/* ===== 뱃지 영역 끝 ===== */}


                {/*<div className="d-flex gap-3 align-items-center mx-3">*/}
                {/*    /!* 필수형 뱃지 *!/*/}
                {/*    <div className="w-32 px-6 py-3 bg-neutral-900 rounded-[5px] inline-flex justify-between items-center">*/}
                {/*        <div className="flex items-center gap-2">*/}
                {/*            <span className="text-white text-sm font-normal font-['Pretendard']">필수형</span>*/}
                {/*            <i className="fa-solid fa-arrow-right origin-top-left rotate-180 text-lime-400 text-base font-normal"></i>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* 해시태그 뱃지 *!/*/}
                {/*    <div className="w-32 px-6 py-3 bg-neutral-900 rounded-[5px] inline-flex justify-between items-center">*/}
                {/*        <div className="flex items-center gap-2">*/}
                {/*            <span className="text-gray-500 text-sm font-normal font-['Pretendard']">해시태그</span>*/}
                {/*            <i className="fa-solid fa-arrow-right origin-top-left rotate-90 text-lime-400 text-base font-normal"></i>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <form className="input-group mt-3 " data-aos="zoom-in">
                    <input type="text" className="form-control border rounded-[5px] outline outline-1 outline-offset-[-0.50px]" style={{backgroundColor: "#111111"}} placeholder="찾고 싶은 내용을 입력하세요." aria-label="Enter Your Keywords" aria-describedby="button-addon2" />
                    <button aria-label="search" type="submit" className="btn btn-primary border-0 rounded-2" id="button-addon2"
                            style={{backgroundColor: "#ADFF00"}} >
                        <i className="fa-solid fa-magnifying-glass text-black " />
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
                                    <div className="px-3.5 py-2  position-absolute  top-0 start-0 m-3
                                    "
                                        style={{
                                            padding: '30px 18px',
                                            left: 0,
                                            top: 0,
                                            position: 'absolute',
                                            backgroundColor: '#dcfce7', // bg-green-100
                                            borderRadius: '5px',
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            overflow: 'hidden',
                                            margin: '12px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                justifyContent: 'center',
                                                color: '#166534', // text-green-800
                                                fontSize: '14px', // text-sm
                                                fontWeight: 'bold',
                                                fontFamily: 'Pretendard'
                                            }}
                                        >
                                            필수형
                                        </div>
                                    </div>
                                    <div className="position-absolute bottom-0 start-0 w-100 py-2 news-gradient--overlay news-gradient from-green-500/80 to-teal-200/80
                                        "
                                        >
                                        <div className="d-flex card-news-information gap-4 ps-2 ms-3" style={{color: 'transparent'}}>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-code_seconds " style={{color: 'black', backgroundColor: 'transparent'}}
                                                 />
                                                <p className="mb-0">

                                                    <Link href={`${link_author}`} className="">
                                                        {code_first}
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="fa-solid fa-code_seconds" style={{color: 'black', backgroundColor: 'transparent'}} />
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

                                    <Link href="link" className="btn btn-primary hover-up rounded-0 mt-3 mb-3">
                                        <span style={{ color: '#ADFF00' }}>게시물 보기</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                             viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
                                                fill="#ADFF00"/>
                                        </svg>
                                    </Link>
                                    <div
                                        className="self-stretch justify-center text-zinc-500 text-base font-medium leading-relaxed text-description-title"
                                        style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>설명
                                    </div>
                                    <p className="pb-2 text-description-content " >{description}</p>

                                    <div
                                        className="self-stretch justify-center text-zinc-500 text-base font-medium leading-relaxed text-description-title"
                                        style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>목표
                                    </div>
                                    <p className="mb-5 pb-5 text-description-content ">{goal}</p>

                                  {/*슬로건 영역*/}
                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "104px", // h-28
                                            padding: "20px", // p-5
                                            borderRadius: "12px", // rounded-xl
                                            boxShadow: "0px 3px 15px 0px rgba(255,255,255,0.20)",
                                            borderBottom: "1px solid #ADFF00", // border-b border-CP-CPC
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px", // gap-2.5
                                            overflow: "hidden",
                                            backgroundImage: "url('assets/imgs/pages/yoga/page-about/subbanner.png')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        {/* 반투명 오버레이 (가독성을 위해 추가) */}
                                        <div style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: "rgba(0, 0, 0, 0.6)"
                                        }}></div>

                                        {/* 텍스트 영역 */}
                                        <div style={{
                                            position: "relative",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            gap: "5px"
                                        }}>
                                            <div style={{
                                                width: "622px",
                                                textAlign: "center",
                                                color: "white",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                fontFamily: "Gapyeong_Hanseokbong",
                                                lineHeight: "1.375"
                                            }}>
                                                "아들아, 중고차를 팔 때, 단 1시간을 들여 정성들여 닦고 간단한 흠집만이라도 제거한다면, <br />
                                                그 간단한 '정성'만으로도 몇 백불은 더 받을 수 있단다."
                                            </div>
                                            <div style={{
                                                textAlign: "center",
                                                color: "#9ca3af",
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                fontFamily: "Gapyeong_Hanseokbong",
                                                lineHeight: "1"
                                            }}>
                                                - 미국 애리조나 주 카운티 maxim -
                                            </div>
                                        </div>
                                    </div>
                                    {/* 진행횟수 / 평점 섹션 */}
                                    <div className="row g-5  mb-2" style={{marginTop: '0.2px'}}>
                                        {/* 진행횟수 */}
                                        <div className="col-md-6 items-center justify-end ">
                                            <div className="self-stretch justify-center items-center justify-end ">


                                                <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                   진행 횟수
                                                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                            </div>
                                            <div className="d-flex align-items-baseline items-center justify-end ">
                                            <span className="fw-bold fs-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>37</span>
                                                <span className="text-gray-400 ms-2"  style={{
                                                    fontFamily: "Pretendard, system-ui, -apple-system",
                                                    color: "#a3a3a3",
                                                    fontSize: "20px",
                                                    fontWeight: "400",
                                                    textAlign: "center",
                                                    lineHeight: "normal"
                                                }}>회</span>
                                            </div>
                                        </div>

                                        {/* 평점 */}
                                        <div className="col-md-6">
                                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                평점
                                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
                                                        </svg>
                                                    </span>
                                            </h6>
                                            <div className="d-flex align-items-center">
                                                <span className="fw-bold fs-2 me-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>9.0</span>
                                                {/* 별 10개 */}
                                                <div className="d-flex">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className="fa-solid fa-star"
                                                            style={{
                                                                fontSize: "14px",
                                                                color: i < 9 ? "#ADFF00" : "#6b7280"
                                                            }}
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
                                            <Link className="icon-md fs-5 page-link pagination_item_ing border-0 icon-shape fw-regular" href="#">
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
                    <div className="col-lg-4 ps-lg-5 mb-lg-0 mb-5">
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
                        <div className="block-our-services p-lg-5 p-4 bg-black rounded-4 border-primary-2">
                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                구성 스텝
                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
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
                                                className="justify-center text-base font-semibold leading-normal"
                                                style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>1)
                                            </div>
                                            <div
                                                className="w-72 justify-center text-gray-400 text-base font-normal leading-relaxed"
                                                style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>[도식화]
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
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
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
                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
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
                                            className="justify-center text-sm font-semibold"
                                            style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>김민지
                                        </div>
                                        <div
                                            className="w-0 h-2.5 outline outline-1 "></div>
                                        <div
                                            className="justify-center text-neutral-400 text-sm font-medium"
                                            style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>6기
                                            서비스팀
                                        </div>
                                    </div>
                                    {/*<span className="d-flex gap-1 mt-2">*/}
                                    {/*    <i className="fa-regular fa-clock fs-7 text-secondary" />*/}
                                    {/*    <p className="fs-8 mb-0 fw-medium">15 Jan, 2025</p>*/}
                                    {/*</span>*/}
                                    <div
                                        className="mt-4 justify-center text-lg font-medium leading-relaxed"
                                        style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>해당
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

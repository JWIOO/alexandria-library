import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const listnews = [
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-103",
        code_second: "Business",
        title: "[기획 TOOL] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.",
        description: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        goal: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        steps: [
            "[도식화] 잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등)",
            "[그래프] 잘 보이는 기획은 그래프를 가진다 (막대, 선, 원형, 점형 등)",
            "[강조화] 잘 보이는 기획은 포인트를 가진다 (크기, 색상, 밑줄, 굵기, 배경 등)"
        ],
        bestCase: {
            name: "이혜인",
            team: "7기 브랜드팀",
            title: "GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "김민지",
            team: "6기 서비스팀",
            content: "해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)",
            img: "review-img.png"
        },
        progressCount: 37,
        rating: 9.0
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-104",
        code_second: "Strategy",
        title: "[리서치 TOOL] 데이터 기반 의사결정 : 추측이 아닌 근거로 말하자.",
        description: "비즈니스 기획에서 가장 중요한 것은 데이터를 기반으로 한 의사결정입니다. 본 과정에서는 올바른 리서치 방법론과 데이터 해석 능력을 기를 수 있습니다.",
        goal: "데이터 분석 도구 활용법과 리서치 설계 방법을 익혀 근거 있는 기획을 할 수 있는 역량을 기릅니다.",
        steps: [
            "[정량 리서치] 설문조사와 통계 분석을 통한 객관적 데이터 수집",
            "[정성 리서치] 인터뷰와 관찰을 통한 심층적 인사이트 도출",
            "[데이터 시각화] 수집된 데이터를 효과적으로 전달하는 시각화 기법"
        ],
        bestCase: {
            name: "박지훈",
            team: "8기 전략팀",
            title: "리서치 없이 기획했다가 프로젝트 망한 썰과 교훈",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "이소영",
            team: "7기 마케팅팀",
            content: "리서치 방법론을 체계적으로 배울 수 있어서 좋았습니다. 특히 데이터 해석 부분이 실무에 많은 도움이 되었어요!",
            img: "review-img.png"
        },
        progressCount: 42,
        rating: 9.2
    },
    {
        img: "img-new-3.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-105",
        code_second: "Communication",
        title: "[발표 TOOL] 스토리텔링 : 기획자는 이야기꾼이어야 한다.",
        description: "아무리 좋은 기획도 제대로 전달되지 않으면 의미가 없습니다. 효과적인 스토리텔링 기법을 통해 설득력 있는 발표를 만들어보세요.",
        goal: "논리적 구조와 감정적 공감을 동시에 만족시키는 스토리텔링 발표 능력을 개발합니다.",
        steps: [
            "[스토리 구조] 기승전결을 활용한 논리적 전개와 흐름 설계",
            "[시각적 스토리텔링] 인포그래픽과 차트를 활용한 시각적 전달",
            "[청중 분석] 타겟 오디언스에 맞는 메시지 커스터마이징"
        ],
        bestCase: {
            name: "최민석",
            team: "6기 기획팀",
            title: "CEO 앞에서 발표했는데 박수받은 기획 스토리",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "정유진",
            team: "8기 UX팀",
            content: "발표 능력이 현저히 향상되었습니다. 스토리텔링 프레임워크를 배운 후 회사에서 발표할 때 반응이 확실히 달라졌어요.",
            img: "review-img.png"
        },
        progressCount: 28,
        rating: 8.9
    },
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-103",
        code_second: "Business",
        title: "[기획 TOOL] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.",
        description: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        goal: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        steps: [
            "[도식화] 잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등)",
            "[그래프] 잘 보이는 기획은 그래프를 가진다 (막대, 선, 원형, 점형 등)",
            "[강조화] 잘 보이는 기획은 포인트를 가진다 (크기, 색상, 밑줄, 굵기, 배경 등)"
        ],
        bestCase: {
            name: "이혜인",
            team: "7기 브랜드팀",
            title: "GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "김민지",
            team: "6기 서비스팀",
            content: "해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)",
            img: "review-img.png"
        },
        progressCount: 37,
        rating: 9.0
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-104",
        code_second: "Strategy",
        title: "[리서치 TOOL] 데이터 기반 의사결정 : 추측이 아닌 근거로 말하자.",
        description: "비즈니스 기획에서 가장 중요한 것은 데이터를 기반으로 한 의사결정입니다. 본 과정에서는 올바른 리서치 방법론과 데이터 해석 능력을 기를 수 있습니다.",
        goal: "데이터 분석 도구 활용법과 리서치 설계 방법을 익혀 근거 있는 기획을 할 수 있는 역량을 기릅니다.",
        steps: [
            "[정량 리서치] 설문조사와 통계 분석을 통한 객관적 데이터 수집",
            "[정성 리서치] 인터뷰와 관찰을 통한 심층적 인사이트 도출",
            "[데이터 시각화] 수집된 데이터를 효과적으로 전달하는 시각화 기법"
        ],
        bestCase: {
            name: "박지훈",
            team: "8기 전략팀",
            title: "리서치 없이 기획했다가 프로젝트 망한 썰과 교훈",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "이소영",
            team: "7기 마케팅팀",
            content: "리서치 방법론을 체계적으로 배울 수 있어서 좋았습니다. 특히 데이터 해석 부분이 실무에 많은 도움이 되었어요!",
            img: "review-img.png"
        },
        progressCount: 42,
        rating: 9.2
    },
    {
        img: "img-new-3.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-105",
        code_second: "Communication",
        title: "[발표 TOOL] 스토리텔링 : 기획자는 이야기꾼이어야 한다.",
        description: "아무리 좋은 기획도 제대로 전달되지 않으면 의미가 없습니다. 효과적인 스토리텔링 기법을 통해 설득력 있는 발표를 만들어보세요.",
        goal: "논리적 구조와 감정적 공감을 동시에 만족시키는 스토리텔링 발표 능력을 개발합니다.",
        steps: [
            "[스토리 구조] 기승전결을 활용한 논리적 전개와 흐름 설계",
            "[시각적 스토리텔링] 인포그래픽과 차트를 활용한 시각적 전달",
            "[청중 분석] 타겟 오디언스에 맞는 메시지 커스터마이징"
        ],
        bestCase: {
            name: "최민석",
            team: "6기 기획팀",
            title: "CEO 앞에서 발표했는데 박수받은 기획 스토리",
            link: "https://phalanx-club.tistory.com/1474",
            img: "recent-img.png"
        },
        review: {
            name: "정유진",
            team: "8기 UX팀",
            content: "발표 능력이 현저히 향상되었습니다. 스토리텔링 프레임워크를 배운 후 회사에서 발표할 때 반응이 확실히 달라졌어요.",
            img: "review-img.png"
        },
        progressCount: 28,
        rating: 8.9
    },
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-103",
        code_second: "Business",
        title: "[기획 TOOL] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.",
        description: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        goal: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        steps: [
            "[도식화] 잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등)",
            "[그래프] 잘 보이는 기획은 그래프를 가진다 (막대, 선, 원형, 점형 등)",
            "[강조화] 잘 보이는 기획은 포인트를 가진다 (크기, 색상, 밑줄, 굵기, 배경 등)"
        ],
        bestCase: {
            name: "이혜인",
            team: "7기 브랜드팀",
            title: "GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "김민지",
            team: "6기 서비스팀",
            content: "해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)",
            img: "review-img.png"
        },
        progressCount: 37,
        rating: 9.0
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-104",
        code_second: "Strategy",
        title: "[리서치 TOOL] 데이터 기반 의사결정 : 추측이 아닌 근거로 말하자.",
        description: "비즈니스 기획에서 가장 중요한 것은 데이터를 기반으로 한 의사결정입니다. 본 과정에서는 올바른 리서치 방법론과 데이터 해석 능력을 기를 수 있습니다.",
        goal: "데이터 분석 도구 활용법과 리서치 설계 방법을 익혀 근거 있는 기획을 할 수 있는 역량을 기릅니다.",
        steps: [
            "[정량 리서치] 설문조사와 통계 분석을 통한 객관적 데이터 수집",
            "[정성 리서치] 인터뷰와 관찰을 통한 심층적 인사이트 도출",
            "[데이터 시각화] 수집된 데이터를 효과적으로 전달하는 시각화 기법"
        ],
        bestCase: {
            name: "박지훈",
            team: "8기 전략팀",
            title: "리서치 없이 기획했다가 프로젝트 망한 썰과 교훈",
            link: "https://phalanx-club.tistory.com/1473",
            img: "recent-img.png"
        },
        review: {
            name: "이소영",
            team: "7기 마케팅팀",
            content: "리서치 방법론을 체계적으로 배울 수 있어서 좋았습니다. 특히 데이터 해석 부분이 실무에 많은 도움이 되었어요!",
            img: "review-img.png"
        },
        progressCount: 42,
        rating: 9.2
    },
    {
        img: "img-new-3.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-105",
        code_second: "Communication",
        title: "[발표 TOOL] 스토리텔링 : 기획자는 이야기꾼이어야 한다.",
        description: "아무리 좋은 기획도 제대로 전달되지 않으면 의미가 없습니다. 효과적인 스토리텔링 기법을 통해 설득력 있는 발표를 만들어보세요.",
        goal: "논리적 구조와 감정적 공감을 동시에 만족시키는 스토리텔링 발표 능력을 개발합니다.",
        steps: [
            "[스토리 구조] 기승전결을 활용한 논리적 전개와 흐름 설계",
            "[시각적 스토리텔링] 인포그래픽과 차트를 활용한 시각적 전달",
            "[청중 분석] 타겟 오디언스에 맞는 메시지 커스터마이징"
        ],
        bestCase: {
            name: "최민석",
            team: "6기 기획팀",
            title: "CEO 앞에서 발표했는데 박수받은 기획 스토리",
            link: "https://phalanx-club.tistory.com/1474",
            img: "recent-img.png"
        },
        review: {
            name: "정유진",
            team: "8기 UX팀",
            content: "발표 능력이 현저히 향상되었습니다. 스토리텔링 프레임워크를 배운 후 회사에서 발표할 때 반응이 확실히 달라졌어요.",
            img: "review-img.png"
        },
        progressCount: 28,
        rating: 8.9
    },
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-103",
        code_second: "Business",
        title: "[기획 TOOL] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.",
        description: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        goal: "본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이, 자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해 '실제 기획 자료' (기획안, 기획제안서, 기획 보고소 등)로 제대로 '보여줄 수' 있는지에 대해 초점을 맞추고 있습니다.",
        steps: [
            "[도식화] 잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등)",
            "[그래프] 잘 보이는 기획은 그래프를 가진다 (막대, 선, 원형, 점형 등)",
            "[강조화] 잘 보이는 기획은 포인트를 가진다 (크기, 색상, 밑줄, 굵기, 배경 등)"
        ],
        bestCase: {
            name: "이혜인",
            team: "7기 브랜드팀",
            title: "GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)",
            link: "https://phalanx-club.tistory.com/1472",
            img: "recent-img.png"
        },
        review: {
            name: "김민지",
            team: "6기 서비스팀",
            content: "해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)",
            img: "review-img.png"
        },
        progressCount: 37,
        rating: 9.0
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-104",
        code_second: "Strategy",
        title: "[리서치 TOOL] 데이터 기반 의사결정 : 추측이 아닌 근거로 말하자.",
        description: "비즈니스 기획에서 가장 중요한 것은 데이터를 기반으로 한 의사결정입니다. 본 과정에서는 올바른 리서치 방법론과 데이터 해석 능력을 기를 수 있습니다.",
        goal: "데이터 분석 도구 활용법과 리서치 설계 방법을 익혀 근거 있는 기획을 할 수 있는 역량을 기릅니다.",
        steps: [
            "[정량 리서치] 설문조사와 통계 분석을 통한 객관적 데이터 수집",
            "[정성 리서치] 인터뷰와 관찰을 통한 심층적 인사이트 도출",
            "[데이터 시각화] 수집된 데이터를 효과적으로 전달하는 시각화 기법"
        ],
        bestCase: {
            name: "박지훈",
            team: "8기 전략팀",
            title: "리서치 없이 기획했다가 프로젝트 망한 썰과 교훈",
            link: "https://phalanx-club.tistory.com/1473",
            img: "recent-img.png"
        },
        review: {
            name: "이소영",
            team: "7기 마케팅팀",
            content: "리서치 방법론을 체계적으로 배울 수 있어서 좋았습니다. 특히 데이터 해석 부분이 실무에 많은 도움이 되었어요!",
            img: "review-img.png"
        },
        progressCount: 42,
        rating: 9.2
    },
    {
        img: "img-new-3.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-105",
        code_second: "Communication",
        title: "[발표 TOOL] 스토리텔링 : 기획자는 이야기꾼이어야 한다.",
        description: "아무리 좋은 기획도 제대로 전달되지 않으면 의미가 없습니다. 효과적인 스토리텔링 기법을 통해 설득력 있는 발표를 만들어보세요.",
        goal: "논리적 구조와 감정적 공감을 동시에 만족시키는 스토리텔링 발표 능력을 개발합니다.",
        steps: [
            "[스토리 구조] 기승전결을 활용한 논리적 전개와 흐름 설계",
            "[시각적 스토리텔링] 인포그래픽과 차트를 활용한 시각적 전달",
            "[청중 분석] 타겟 오디언스에 맞는 메시지 커스터마이징"
        ],
        bestCase: {
            name: "최민석",
            team: "6기 기획팀",
            title: "CEO 앞에서 발표했는데 박수받은 기획 스토리",
            link: "https://phalanx-club.tistory.com/1474",
            img: "recent-img.png"
        },
        review: {
            name: "정유진",
            team: "8기 UX팀",
            content: "발표 능력이 현저히 향상되었습니다. 스토리텔링 프레임워크를 배운 후 회사에서 발표할 때 반응이 확실히 달라졌어요.",
            img: "review-img.png"
        },
        progressCount: 28,
        rating: 8.9
    },
    {
        img: "img-new-1.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-106",
        code_second: "Management",
        title: "[프로젝트 TOOL] 일정관리 : 데드라인을 지키는 기획자가 되자.",
        description: "성공적인 프로젝트 완수를 위해서는 체계적인 일정 관리가 필수입니다. 실무에서 바로 적용 가능한 프로젝트 관리 스킬을 학습하세요.",
        goal: "애자일 방법론과 전통적 PM 기법을 활용하여 효율적인 프로젝트 관리 능력을 기릅니다.",
        steps: [
            "[일정 계획] WBS 작성과 마일스톤 설정을 통한 체계적 계획 수립",
            "[리스크 관리] 잠재적 위험 요소 식별과 대응 방안 마련",
            "[팀 커뮤니케이션] 스탠드업 미팅과 스프린트 리뷰를 통한 원활한 소통"
        ],
        bestCase: {
            name: "김태현",
            team: "7기 PM팀",
            title: "6개월 프로젝트를 4개월에 끝낸 일정관리 노하우",
            link: "https://phalanx-club.tistory.com/1475",
            img: "recent-img.png"
        },
        review: {
            name: "박서연",
            team: "6기 개발팀",
            content: "프로젝트 관리 툴 사용법부터 일정 수립까지 실무적인 내용들이 정말 유용했습니다. 덕분에 팀원들과의 협업이 훨씬 수월해졌어요.",
            img: "review-img.png"
        },
        progressCount: 35,
        rating: 9.1
    },
    {
        img: "img-new-2.png",
        link: "/classes-details",
        link_author: "#",
        code_first: "PXO-107",
        code_second: "UX/UI",
        title: "[UX TOOL] 사용자 중심 설계 : 고객이 원하는 것을 만들자.",
        description: "진정한 UX 기획은 사용자의 니즈를 정확히 파악하고 이를 제품에 반영하는 것입니다. 사용자 중심의 기획 방법론을 배워보세요.",
        goal: "사용자 리서치부터 프로토타이핑까지 UX 기획의 전 과정을 체계적으로 학습합니다.",
        steps: [
            "[사용자 리서치] 인터뷰, 서베이, 관찰을 통한 사용자 니즈 파악",
            "[정보 설계] 사이트맵과 와이어프레임을 통한 구조 설계",
            "[프로토타이핑] 사용성 테스트를 위한 인터랙티브 프로토타입 제작"
        ],
        bestCase: {
            name: "이지은",
            team: "8기 UX팀",
            title: "사용자 리서치로 앱 사용률 300% 높인 후기",
            link: "https://phalanx-club.tistory.com/1476",
            img: "recent-img.png"
        },
        review: {
            name: "장민호",
            team: "7기 디자인팀",
            content: "UX 기획의 기초부터 고급 기법까지 단계별로 잘 구성되어 있습니다. 실제 프로젝트에 바로 적용할 수 있는 실무 중심 내용이 좋았어요.",
            img: "review-img.png"
        },
        progressCount: 41,
        rating: 9.3
    }];

export default function Section2() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // 메인 카드들의 ref와 높이 상태
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [cardHeights, setCardHeights] = useState<number[]>([]);

    // 페이지네이션 계산
    const totalPages = Math.ceil(listnews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listnews.slice(startIndex, endIndex);

    // 디버깅을 위한 콘솔 로그
    console.log('=== 페이지네이션 디버그 ===');
    console.log('전체 아이템 수:', listnews.length);
    console.log('페이지당 아이템 수:', itemsPerPage);
    console.log('총 페이지 수:', totalPages);
    console.log('현재 페이지:', currentPage);
    console.log('startIndex:', startIndex);
    console.log('endIndex:', endIndex);
    console.log('현재 표시할 아이템 수:', currentItems.length);

    // 페이지 변경 함수
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // 페이지 변경 시 스크롤을 상단으로 이동
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 페이지 번호 배열 생성
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            // 총 페이지가 5개 이하면 모든 페이지 표시
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // 현재 페이지를 기준으로 페이지 번호 계산
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    // 사이드바에 표시할 모든 현재 페이지 아이템의 데이터
    const allCurrentItemsData = currentItems.length > 0 ? currentItems : listnews.slice(0, itemsPerPage);

    // 메인 카드 높이 측정 함수
    const measureCardHeights = () => {
        const heights = cardRefs.current.map(ref => {
            if (ref && ref.offsetHeight) {
                return ref.offsetHeight;
            }
            return 800; // 기본값
        });
        setCardHeights(heights);
    };

    // 이미지 로드 완료 후 높이 재측정
    useEffect(() => {
        // 초기 측정
        const timer = setTimeout(measureCardHeights, 100);

        // 이미지 로드 이벤트 리스너
        const images = document.querySelectorAll('.card-new img') as NodeListOf<HTMLImageElement>;
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                measureCardHeights();
            }
        };

        images.forEach(img => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        // 윈도우 리사이즈 이벤트
        const handleResize = () => {
            measureCardHeights();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            images.forEach(img => {
                img.removeEventListener('load', handleImageLoad);
            });
            window.removeEventListener('resize', handleResize);
        };
    }, [currentItems]);

    // 페이지 변경 시 높이 재측정
    useEffect(() => {
        // cardRefs 배열 초기화
        cardRefs.current = [];
        setCardHeights([]);
    }, [currentPage]);

    // 디버깅을 위한 콘솔 로그
    console.log('=== 사이드바 디버그 ===');
    console.log('allCurrentItemsData:', allCurrentItemsData);
    console.log('allCurrentItemsData.length:', allCurrentItemsData.length);
    console.log('cardHeights:', cardHeights);

    return (
        <>
            <style jsx>{`
                .link-hover-effect:hover {
                    color: #ADFF00 !important;
                }
            `}</style>
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
                <div className="d-flex gap-3 mb-4">
                    {/* 필수형 드롭다운 */}
                    <div
                        role="button"
                        className="w-32 px-5 py-2 d-flex align-items-center gap-2"
                        style={{
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            minWidth: '120px',
                            gap: '2px'
                        }}
                    >
                        <span className="text-white" style={{ fontSize: '14px', fontFamily: "Pretendard, system-ui, -apple-system" }}>
                            필수형
                        </span>
                        <img
                            src="/assets/imgs/pages/yoga/template/icons/arrow-down.png"
                            alt="icon-dropdown"
                            style={{ marginLeft: 'auto', width: '12px', height: '12px' }}
                        />
                    </div>

                    {/* 해시태그 드롭다운 */}
                    <div
                        role="button"
                        className="w-32 px-5 py-2 d-flex align-items-center gap-2"
                        style={{
                            backgroundColor: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            minWidth: '120px',
                            gap: '2px'
                        }}
                    >
                        <span className="text-grey" style={{ fontSize: '14px', fontFamily: "Pretendard, system-ui, -apple-system" }}>
                           해시태그
                        </span>
                        <img
                            src="/assets/imgs/pages/yoga/template/icons/arrow-down.png"
                            alt="icon-dropdown"
                            style={{ marginLeft: 'auto', width: '12px', height: '12px' }}
                        />
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
                    {/* 데스크탑용 기존 레이아웃 */}
                    <div className="d-none d-lg-block col-lg-8">
                        {currentItems.map(({ img, link, link_author, code_first, code_second, title, description, goal, steps, bestCase, review, progressCount, rating }, index) => (
                            <div
                                key={startIndex + index}
                                className="card-new position-relative wow img-custom-anim-top mb-6"
                                ref={el => { cardRefs.current[index] = el; }}
                            >
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

                                                    <Link href="#" className="">
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
                                        {title.includes('] ') ? (
                                            title.split('] ').map((part, index) => (
                                                index === 0 ?
                                                <span key={index}>{part}]<br /></span> :
                                                <span key={index}>{part}</span>
                                            ))
                                        ) : (
                                            <span>{title}</span>
                                        )}
                                    </h5>

                                    <Link href="https://phalanx-club.tistory.com/1471" className="btn btn-primary hover-up rounded-0 mt-3 mb-3">
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
                                            <span className="fw-bold fs-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>{progressCount}</span>
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
                                                <span className="fw-bold fs-2 me-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>{rating}</span>
                                                {/* 별 10개 */}
                                                <div className="d-flex">
                                                    {Array.from({ length: 10 }).map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className="fa-solid fa-star"
                                                            style={{
                                                                fontSize: "14px",
                                                                color: i < Math.floor(rating) ? "#ADFF00" : "#6b7280"
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
                        {totalPages > 1 && (
                            <div className="row pt-3 text-center">
                                <div className="d-flex justify-content-end align-items-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination gap-2">
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 1 ? 'disabled' : ''}`}
                                                    href="#"
                                                    aria-label="Previous"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage > 1) handlePageChange(currentPage - 1);
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 1 ? 'active' : ''}`}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(1);
                                                    }}
                                                >
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 2 ? 'active' : ''}`}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(2);
                                                    }}
                                                >
                                                    2
                                                </Link>
                                            </li>
                                            {totalPages >= 3 && (
                                                <li className="page-item">
                                                    <Link
                                                        className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 3 ? 'active' : ''}`}
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(3);
                                                        }}
                                                    >
                                                        3
                                                    </Link>
                                                </li>
                                            )}
                                            {totalPages > 3 && (
                                                <li className="page-item">
                                                    <Link className="icon-md fs-5 page-link pagination_item_ing border-0 icon-shape fw-regular" href="#">
                                                        ···
                                                    </Link>
                                                </li>
                                            )}
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === totalPages ? 'disabled' : ''}`}
                                                    href="#"
                                                    aria-label="Next"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                                                    }}
                                                >
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
                        )}
                    </div>

                    {/* 모바일용 순차적 레이아웃 */}
                    <div className="d-lg-none col-12">
                        {currentItems.map(({ img, link, link_author, code_first, code_second, title, description, goal, steps, bestCase, review, progressCount, rating }, index) => (
                            <div key={`mobile-item-${startIndex + index}`} className="mb-6">
                                {/* 메인 카드 */}
                                <div className="card-new position-relative wow img-custom-anim-top mb-4">
                                    <div className="card-new-img position-relative rounded-top-3 overflow-hidden zoom-img">
                                        <div className="ratio ratio-16x9">
                                            <img className="w-full rounded-tl-xl rounded-tr-xl object-fit-cover"
                                                 src={`assets/imgs/pages/yoga/page-classes-details/${img}`} alt="AstraX" />
                                        </div>
                                        {/* 좌측 상단 뱃지 */}
                                        <div className="px-3.5 py-2 position-absolute top-0 start-0 m-3"
                                            style={{
                                                padding: '30px 18px',
                                                left: 0,
                                                top: 0,
                                                position: 'absolute',
                                                backgroundColor: '#dcfce7',
                                                borderRadius: '5px',
                                                display: 'inline-flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '10px',
                                                overflow: 'hidden',
                                                margin: '12px'
                                            }}
                                        >
                                            <div style={{
                                                justifyContent: 'center',
                                                color: '#166534',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                fontFamily: 'Pretendard'
                                            }}>
                                                필수형
                                            </div>
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 w-100 py-2 news-gradient--overlay news-gradient from-green-500/80 to-teal-200/80">
                                            <div className="d-flex card-news-information gap-4 ps-2 ms-3" style={{color: 'transparent'}}>
                                                <div className="d-flex align-items-center gap-1">
                                                    <i className="fa-solid fa-code_seconds" style={{color: 'black', backgroundColor: 'transparent'}} />
                                                    <p className="mb-0">
                                                        <Link href="#" className="">{code_first}</Link>
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
                                            {title.includes('] ') ? (
                                                title.split('] ').map((part, idx) => (
                                                    idx === 0 ?
                                                    <span key={idx}>{part}]<br /></span> :
                                                    <span key={idx}>{part}</span>
                                                ))
                                            ) : (
                                                <span>{title}</span>
                                            )}
                                        </h5>

                                        <Link href="https://phalanx-club.tistory.com/1471" className="btn btn-primary hover-up rounded-0 mt-3 mb-3">
                                            <span style={{ color: '#ADFF00' }}>게시물 보기</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="#ADFF00"/>
                                            </svg>
                                        </Link>
                                        <div className="self-stretch justify-center text-zinc-500 text-base font-medium leading-relaxed text-description-title"
                                            style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>설명</div>
                                        <p className="pb-2 text-description-content">{description}</p>

                                        <div className="self-stretch justify-center text-zinc-500 text-base font-medium leading-relaxed text-description-title"
                                            style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>목표</div>
                                        <p className="mb-5 pb-5 text-description-content">{goal}</p>

                                        {/* 슬로건 영역 */}
                                        <div style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "104px",
                                            padding: "20px",
                                            borderRadius: "12px",
                                            boxShadow: "0px 3px 15px 0px rgba(255,255,255,0.20)",
                                            borderBottom: "1px solid #ADFF00",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "10px",
                                            overflow: "hidden",
                                            backgroundImage: "url('assets/imgs/pages/yoga/page-about/subbanner.png')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}>
                                            <div style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: "rgba(0, 0, 0, 0.6)"
                                            }}></div>
                                            <div style={{
                                                position: "relative",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                gap: "5px"
                                            }}>
                                                <div style={{
                                                    width: "100%",
                                                    textAlign: "center",
                                                    color: "white",
                                                    fontSize: "14px",
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
                                                    fontSize: "10px",
                                                    fontWeight: "bold",
                                                    fontFamily: "Gapyeong_Hanseokbong",
                                                    lineHeight: "1"
                                                }}>
                                                    - 미국 애리조나 주 카운티 maxim -
                                                </div>
                                            </div>
                                        </div>

                                        {/* 진행횟수 / 평점 섹션 */}
                                        <div className="row g-3 mb-2" style={{marginTop: '0.2px'}}>
                                            <div className="col-6">
                                                <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                   진행 횟수
                                                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <div className="d-flex align-items-baseline">
                                                    <span className="fw-bold fs-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>{progressCount}</span>
                                                    <span className="text-gray-400 ms-2" style={{
                                                        fontFamily: "Pretendard, system-ui, -apple-system",
                                                        color: "#a3a3a3",
                                                        fontSize: "20px",
                                                        fontWeight: "400"
                                                    }}>회</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                    평점
                                                    <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                            <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <div className="d-flex align-items-center">
                                                    <span className="fw-bold fs-2 me-2 text-white" style={{ fontFamily: "Pretendard, system-ui, -apple-system" }}>{rating}</span>
                                                    <div className="d-flex">
                                                        {Array.from({ length: 10 }).map((_, i) => (
                                                            <i key={i} className="fa-solid fa-star" style={{
                                                                fontSize: "12px",
                                                                color: i < Math.floor(rating) ? "#ADFF00" : "#6b7280"
                                                            }} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 해당 카드의 사이드바 정보들 */}
                                <div className="row g-3 mb-5">
                                    {/* 구성 스텝 */}
                                    <div className="col-12">
                                        <div className="block-our-services p-4 bg-black rounded-4 border-primary-2">
                                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                구성 스텝
                                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div className="d-flex flex-column gap-2">
                                                {(steps || []).map((step, stepIdx) => (
                                                    <div key={stepIdx} className="p-3 rounded-2" style={{
                                                        backgroundColor: 'transparent',
                                                        border: '1px solid #666666',
                                                        borderRadius: '5px'
                                                    }}>
                                                        <div className="d-flex align-items-start gap-2">
                                                            <span className="text-white fw-semibold" style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{stepIdx + 1})</span>
                                                            <span style={{
                                                                fontFamily: "Pretendard, system-ui, -apple-system",
                                                                flex: 1,
                                                                color: '#B4B9C0',
                                                                letterSpacing: '-1.2px'
                                                            }}>{step}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 우수 사례 */}
                                    <div className="col-12">
                                        <div className="p-4 rounded-4 bg-black">
                                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                우수 사례
                                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div className="d-flex align-items-start wow img-custom-anim-top gap-3">
                                                <div className="flex-shrink-0">
                                                    <div className="icon-80">
                                                        <Link href="#">
                                                            <img className="rounded-3 object-fit-cover"
                                                                 src={`assets/imgs/pages/yoga/page-classes-details/${bestCase?.img || 'recent-img.png'}`}
                                                                 alt="AstraX" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                        <span className="text-white text-sm">{bestCase?.name || '이혜인'}</span>
                                                        <span className="text-gray-500">|</span>
                                                        <span className="text-gray-400 text-sm">{bestCase?.team || '7기 브랜드팀'}</span>
                                                    </div>
                                                    <Link href={bestCase?.link || 'https://phalanx-club.tistory.com/1472'}>
                                                        <div className="text-white text-sm fw-bold link-hover-effect" style={{
                                                            lineHeight: "1.4",
                                                            textDecoration: "underline",
                                                            transition: "color 0.3s ease"
                                                        }}>
                                                            {bestCase?.title || 'GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)'}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 후기 */}
                                    <div className="col-12">
                                        <div className="p-4 rounded-4 bg-black">
                                            <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                                후기
                                                <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4} viewBox="0 0 60 4" fill="none">
                                                        <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                    </svg>
                                                </span>
                                            </h6>
                                            <div className="wow img-custom-anim-top">
                                                <div className="mb-3">
                                                    <div className="icon-80 mb-3">
                                                        <Link href="#">
                                                            <img className="rounded-3" src={`assets/imgs/pages/yoga/page-classes-details/${review?.img || 'review-img.png'}`} alt="AstraX"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-3">
                                                        <span className="text-white" style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{review?.name || '김민지'}</span>
                                                        <span className="text-gray-500">|</span>
                                                        <span className="text-gray-400" style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{review?.team || '6기 서비스팀'}</span>
                                                    </div>
                                                    <div className="text-white leading-relaxed text-lg font-medium" style={{
                                                        fontFamily: "Pretendard, system-ui, -apple-system",
                                                        fontSize: "16px",
                                                        lineHeight: "1.5"
                                                    }}>
                                                        {review?.content || '해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똁하게 기획 하시기 바랍니다 :)'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* 모바일 페이지네이션 */}
                        {totalPages > 1 && (
                            <div className="row pt-3 text-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination gap-2">
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 1 ? 'disabled' : ''}`}
                                                    href="#"
                                                    aria-label="Previous"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage > 1) handlePageChange(currentPage - 1);
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                                        <path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 1 ? 'active' : ''}`}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(1);
                                                    }}
                                                >
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 2 ? 'active' : ''}`}
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(2);
                                                    }}
                                                >
                                                    2
                                                </Link>
                                            </li>
                                            {totalPages >= 3 && (
                                                <li className="page-item">
                                                    <Link
                                                        className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === 3 ? 'active' : ''}`}
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(3);
                                                        }}
                                                    >
                                                        3
                                                    </Link>
                                                </li>
                                            )}
                                            {totalPages > 3 && (
                                                <li className="page-item">
                                                    <Link className="icon-md fs-5 page-link pagination_item_ing border-0 icon-shape fw-regular" href="#">
                                                        ···
                                                    </Link>
                                                </li>
                                            )}
                                            <li className="page-item">
                                                <Link
                                                    className={`icon-md fs-5 page-link pagination_item border-0 icon-shape fw-regular ${currentPage === totalPages ? 'disabled' : ''}`}
                                                    href="#"
                                                    aria-label="Next"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                                                    }}
                                                >
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
                        )}
                    </div>

                    {/* 데스크탑용 사이드바 */}
                    <div className="d-none d-lg-block col-lg-4 ps-lg-5 mb-lg-0 mb-5">
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


                        {/*<div*/}
                        {/*    className="self-stretch h-12 px-3.5 py-3 bg-neutral-900 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-stone-500 inline-flex flex-col justify-start items-start gap-2.5">*/}
                        {/*    <div className="w-72 h-6 relative bg-neutral-900">*/}
                        {/*        <div className="left-0 top-0 absolute inline-flex justify-start items-start gap-[5px]">*/}
                        {/*            <div*/}
                        {/*                className="justify-center text-white text-base font-semibold font-['Pretendard'] leading-normal">1)*/}
                        {/*            </div>*/}
                        {/*            <div*/}
                        {/*                className="w-72 justify-center text-gray-400 text-base font-normal font-['Sora'] leading-relaxed">[도식화]*/}
                        {/*                잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}



                        {/* 각 아이템별 사이드바 세트 */}
                        <div className="d-flex flex-column">
                            {allCurrentItemsData.map((item, itemIndex) => (
                                <div key={`sidebar-set-${itemIndex}`}
                                     className="position-relative"
                                     style={{
                                         // 측정된 카드 높이 또는 기본값 사용
                                         minHeight: cardHeights[itemIndex] ? `${cardHeights[itemIndex]}px` : '800px',
                                         marginBottom: itemIndex < allCurrentItemsData.length - 1 ? '3rem' : '0'
                                     }}>

                                    {/* 구성 스텝 */}
                                    <div className="block-our-services p-lg-5 bg-black rounded-4 border-primary-2 mb-4">
                                        <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                            구성 스텝
                                            <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4}
                                                     viewBox="0 0 60 4" fill="none">
                                                    <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                </svg>
                                            </span>
                                        </h6>

                                        {/* 구성 스텝 아이템들 */}
                                        <div className="d-flex flex-column gap-2">
                                            {(item.steps || []).map((step, index) => (
                                                <div
                                                    key={index}
                                                    className="p-3 rounded-2"
                                                    style={{
                                                        backgroundColor: 'transparent',
                                                        border: '1px solid #666666',
                                                        borderRadius: '5px'
                                                    }}
                                                >
                                                    <div className="d-flex align-items-start gap-2"
                                                    style={{padding: '0px'}}>
                                                        <span className="text-white fw-semibold"
                                                              style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{index + 1})</span>
                                                        <span
                                                            className=""
                                                            style={{
                                                                fontFamily: "Pretendard, system-ui, -apple-system",
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                                flex: 1,
                                                                color: '#B4B9C0',
                                                                letterSpacing: '-1.2px'
                                                            }}
                                                        >
                                                            {step}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 우수 사례 */}
                                    <div className="p-lg-5 p-4 rounded-4 bg-black mt-4 mb-4">
                                        <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                            우수 사례
                                            <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4}
                                                     viewBox="0 0 60 4" fill="none">
                                                    <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                </svg>
                                            </span>
                                        </h6>
                                        <div className="d-flex align-items-start wow img-custom-anim-top gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="icon-80">
                                                    <Link href="#">
                                                        <img
                                                            className="rounded-3 object-fit-cover"
                                                            src={`assets/imgs/pages/yoga/page-classes-details/${item.bestCase?.img || 'recent-img.png'}`}
                                                            alt="AstraX"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <span className="text-white text-sm">{item.bestCase?.name || '이혜인'}</span>
                                                    <span className="text-gray-500">|</span>
                                                    <span className="text-gray-400 text-sm">{item.bestCase?.team || '7기 브랜드팀'}</span>
                                                </div>
                                                <Link href={item.bestCase?.link || 'https://phalanx-club.tistory.com/1472'}>
                                                    <div
                                                        className="text-white text-sm fw-bold link-hover-effect"
                                                        style={{
                                                            lineHeight: "1.4",
                                                            textDecoration: "underline",
                                                            transition: "color 0.3s ease"
                                                        }}
                                                    >
                                                        {item.bestCase?.title || 'GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)'}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 후기 */}
                                    <div className="p-lg-5 p-4 rounded-4 bg-black">
                                        <h6 className="text-white position-relative border-bottom w-100 mb-4 pb-3">
                                            후기
                                            <span className="position-absolute top-0 start-0 text-primary mt-4">
                                                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={60} height={4}
                                                     viewBox="0 0 60 4" fill="none">
                                                    <path d="M0 0H56.5L60 4H0V0Z" fill="#ADFF00"/>
                                                </svg>
                                            </span>
                                        </h6>
                                        <div className="wow img-custom-anim-top">
                                            <div className="mb-3">
                                                <div className="icon-80 mb-3">
                                                    <Link href="#">
                                                        <img className="rounded-3"
                                                             src={`assets/imgs/pages/yoga/page-classes-details/${item.review?.img || 'review-img.png'}`}
                                                             alt="AstraX"/>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <span className="text-white"
                                                          style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{item.review?.name || '김민지'}</span>
                                                    <span className="text-gray-500">|</span>
                                                    <span className="text-gray-400"
                                                          style={{fontFamily: "Pretendard, system-ui, -apple-system"}}>{item.review?.team || '6기 서비스팀'}</span>
                                                </div>

                                                <div
                                                    className="text-white leading-relaxed text-lg font-medium "
                                                    style={{
                                                        fontFamily: "Pretendard, system-ui, -apple-system",
                                                        fontSize: "16px",
                                                        lineHeight: "1.5"
                                                    }}>
                                                    {item.review?.content || '해당 내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할 때 매우 좋으니 꼭 읽고 똑똁하게 기획 하시기 바랍니다 :)'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
        </>
    );
}

"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className=" text-white nav-link text-uppercase" href="/" style={{ fontFamily: 'Pretendard' }}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className=" text-white nav-link text-uppercase" href="/about" style={{ fontFamily: 'Pretendard' }}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link className=" text-white nav-link text-uppercase" href="/blog" style={{ fontFamily: 'Pretendard' }}>
                    Blog
                </Link>
            </li>

            <li className="nav-item">
                <Link className=" text-white nav-link text-uppercase" href="/experts" style={{ fontFamily: 'Pretendard' }}>
                    Pages
                </Link>
            </li>
            <li className="nav-item">
                <Link className=" text-white nav-link text-uppercase" href="/contact" style={{ fontFamily: 'Pretendard' }}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

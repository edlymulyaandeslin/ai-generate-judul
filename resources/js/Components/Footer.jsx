import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="p-10 footer footer-center bg-base-200 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                <Link
                    to="home"
                    smooth={true}
                    duration={400}
                    className="link link-hover"
                >
                    Home
                </Link>
                <Link
                    to="paketmagang"
                    smooth={true}
                    duration={400}
                    className="link link-hover"
                >
                    Paket Magang
                </Link>
                <Link
                    to="paketskripsi"
                    smooth={true}
                    duration={400}
                    className="link link-hover"
                >
                    Paket Skripsi
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://www.instagram.com/__elyynn"
                        target="_blank"
                    >
                        <FaInstagram size={24} className="text-pink-600" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edly-mulya-andeslin"
                        target="_blank"
                    >
                        <FaLinkedin size={24} className="text-blue-600" />
                    </a>
                    <a
                        href="https://wa.me/6281374653119"
                        target="_blank"
                        className="text-green-600"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                    by SUPERWEB
                </p>
            </aside>
        </footer>
    );
}

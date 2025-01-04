import { Link, usePage } from "@inertiajs/react";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FaCoins, FaHistory } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { LuSparkles } from "react-icons/lu";
import { Link as LinkScroll } from "react-scroll";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <div className="sticky top-0 z-50 border-b-2 border-gray-700 shadow bg-opacity-80 navbar bg-base-300">
            <div className="flex justify-between w-full">
                <Link href="/" className="text-xl btn btn-ghost">
                    SUPERWEB
                </Link>

                <div>
                    <ul className="hidden menu menu-horizontal md:flex">
                        {route().current("home") && (
                            <>
                                <li>
                                    <LinkScroll
                                        to="home"
                                        smooth={true}
                                        duration={400}
                                    >
                                        Home
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="paketmagang"
                                        smooth={true}
                                        duration={400}
                                    >
                                        Paket Magang
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="paketskripsi"
                                        smooth={true}
                                        duration={400}
                                    >
                                        Paket Skripsi
                                    </LinkScroll>
                                </li>
                            </>
                        )}
                        <li>
                            <Link href={route("carijudul")}>
                                Cari Judul With AI <LuSparkles size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row-reverse items-center gap-4">
                    <div>
                        <div className="drawer">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                            />
                            <div className="drawer-content justify-self-end">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="cursor-pointer md:hidden"
                                >
                                    <GiHamburgerMenu size={24} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-[80%]">
                                    {/* Sidebar content here */}
                                    {route().current("home") && (
                                        <>
                                            <li>
                                                <LinkScroll
                                                    to="home"
                                                    smooth={true}
                                                    duration={400}
                                                >
                                                    Home
                                                </LinkScroll>
                                            </li>
                                            <li>
                                                <LinkScroll
                                                    to="paketmagang"
                                                    smooth={true}
                                                    duration={400}
                                                >
                                                    Paket Magang
                                                </LinkScroll>
                                            </li>
                                            <li>
                                                <LinkScroll
                                                    to="paketskripsi"
                                                    smooth={true}
                                                    duration={400}
                                                >
                                                    Paket Skripsi
                                                </LinkScroll>
                                            </li>
                                        </>
                                    )}

                                    <li>
                                        <Link href={route("carijudul")}>
                                            Cari Judul With AI{" "}
                                            <LuSparkles size={20} />
                                        </Link>
                                    </li>

                                    {auth.user ? (
                                        <li>
                                            <Link href={route("login")}>
                                                Dashboard
                                            </Link>
                                        </li>
                                    ) : (
                                        <li>
                                            <Link href={route("login")}>
                                                Login
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {auth.user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                href={route("credits.index")}
                                className="flex items-center gap-2"
                            >
                                <FaCoins
                                    size={22}
                                    className="text-yellow-400"
                                />
                                <div className="flex flex-col">
                                    <span>{auth.user.credit}</span>
                                    <span>Credit</span>
                                </div>
                            </Link>
                            <div className="hidden md:block">
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="border-purple-800 btn btn-ghost btn-outline rounded-btn"
                                    >
                                        {auth.user.name} <IoIosArrowDown />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
                                    >
                                        <li>
                                            <Link href={route("history.judul")}>
                                                <FaHistory size={12} />
                                                History Judul
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={route("history.order")}>
                                                <HiOutlineShoppingBag
                                                    size={16}
                                                />
                                                History Order
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                <BsBoxArrowLeft size={15} />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href={route("login")}
                            className="hidden md:btn md:btn-ghost md:btn-outline"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

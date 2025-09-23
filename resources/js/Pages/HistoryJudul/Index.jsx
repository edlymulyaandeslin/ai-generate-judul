import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react"; // <-- pakai Link Inertia
import axios from "axios";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Index({ listJudul }) {
    const [view, setView] = useState([]);

    const handleView = async (id) => {
        const response = await axios.get(route("history.show", id));
        const aiResponse = response.data.ai_response;
        setView(JSON.parse(aiResponse));
        document.getElementById("modalView").showModal();
    };

    return (
        <MainLayout>
            <ContentWrapper>
                <Head title="History Order" />

                <h1 className="text-4xl font-bold text-center">
                    History Judul from AI
                </h1>

                <div className="w-full my-8">
                    <div className="overflow-x-auto">
                        <table className="table lg:text-lg">
                            <thead>
                                <tr className="text-lg text-gray-300">
                                    <th>Jurusan</th>
                                    <th>Jenis Penelitian</th>
                                    <th>Lokasi Penelitian</th>
                                    <th>Referensi Judul</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listJudul.data.map((judul, index) => (
                                    <tr
                                        className="hover:bg-gray-900 transition-all capitalize"
                                        key={index}
                                    >
                                        <td>{judul.jurusan}</td>
                                        <td>{judul.jenis_penelitian}</td>
                                        <td>{judul.lokasi}</td>
                                        <td>
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() =>
                                                    handleView(judul.id)
                                                }
                                            >
                                                show <FaRegEye />
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {listJudul.data.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center">
                                            No data available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {listJudul.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    className={`px-4 py-2 rounded-lg text-sm ${
                                        link.active
                                            ? "bg-indigo-600 text-white font-bold"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300"
                                    } ${
                                        !link.url &&
                                        "opacity-50 cursor-not-allowed"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Modal */}
                        <dialog id="modalView" className="modal">
                            <div className="modal-box w-full max-w-5xl p-5 bg-base-100 rounded-xl shadow-xl">
                                <div className="flex gap-2 items-center justify-between">
                                    <h3 className="text-2xl font-bold text-center mb-6 text-base-content">
                                        Detail Referensi Judul Penelitian
                                    </h3>
                                    <form method="dialog">
                                        <button>
                                            <IoMdCloseCircleOutline
                                                size={30}
                                                className="hover:text-red-500 transition-all"
                                            />
                                        </button>
                                    </form>
                                </div>

                                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">
                                    {view.map((ref, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-xl p-6 bg-base-200 shadow-sm hover:shadow-md transition"
                                        >
                                            <div className="flex justify-between items-center mb-2 text-sm text-base-content/60">
                                                <span className="font-medium">
                                                    Referensi #{index + 1}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-semibold mb-4 text-base-content">
                                                {ref.judul}
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="font-semibold text-base-content/70">
                                                        Latar Belakang
                                                    </p>
                                                    <p className="text-base-content">
                                                        {ref.latar_belakang}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-base-content/70">
                                                        Tujuan Penelitian
                                                    </p>
                                                    <p className="text-base-content">
                                                        {ref.tujuan_penelitian}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-base-content/70">
                                                        Metodologi
                                                    </p>
                                                    <p className="text-base-content">
                                                        {
                                                            ref.metodologi_penelitian
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-base-content/70">
                                                        Inovasi
                                                    </p>
                                                    <p className="text-base-content">
                                                        {ref.inovasi}
                                                    </p>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <p className="font-semibold text-base-content/70">
                                                        Keunggulan
                                                    </p>
                                                    <p className="text-base-content">
                                                        {ref.keunggulan}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

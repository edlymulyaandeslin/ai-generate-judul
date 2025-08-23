import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Index({ listJudul }) {
    const [view, setView] = useState([]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?");

        if (!confirm) return;

        router.delete(route("history.destroy", id));
    };

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
                            {/* head */}
                            <thead>
                                <tr className="text-lg">
                                    <th>Jurusan</th>
                                    <th>Jenis Penelitian</th>
                                    <th>Lokasi Penelitian</th>
                                    <th>AI Response</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listJudul.map((judul, index) => (
                                    <tr
                                        className="hover:bg-purple-900"
                                        key={index}
                                    >
                                        <td>{judul.jurusan}</td>
                                        <td>{judul.jenis_penelitian}</td>
                                        <td>{judul.lokasi}</td>

                                        <td>
                                            <button
                                                href="google.com"
                                                className="btn btn-info btn-sm"
                                                onClick={() =>
                                                    handleView(judul.id)
                                                }
                                            >
                                                Show <FaRegEye />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-error btn-sm"
                                                onClick={() =>
                                                    handleDelete(judul.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {listJudul.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center">
                                            No data available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <dialog id="modalView" className="modal">
                            <div className="modal-box w-full max-w-5xl p-5 bg-base-100 rounded-xl shadow-xl">
                                {/* Header */}
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

                                {/* Scrollable content area */}
                                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-6">
                                    {view.map((ref, index) => (
                                        <div
                                            key={index}
                                            className="border rounded-xl p-6 bg-base-200 shadow-sm hover:shadow-md transition"
                                        >
                                            {/* Subheader */}
                                            <div className="flex justify-between items-center mb-2 text-sm text-base-content/60">
                                                <span className="font-medium">
                                                    Referensi #{index + 1}
                                                </span>
                                            </div>

                                            {/* Judul */}
                                            <h4 className="text-lg font-semibold mb-4 text-base-content">
                                                {ref.judul}
                                            </h4>

                                            {/* Konten */}
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

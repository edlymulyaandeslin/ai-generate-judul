import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Index({ listJudul }) {
    const [view, setView] = useState("");

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?");

        if (!confirm) return;

        router.delete(route("history.destroy", id));
    };

    const handleView = async (id) => {
        const response = await axios.get(route("history.show", id));
        const aiResponse = response.data.ai_response;

        setView(aiResponse);

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
                                    <th>Tingkat Kesulitan</th>
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
                                            <span
                                                className={`badge ${
                                                    judul.tingkat_kesulitan ===
                                                    "easy"
                                                        ? "badge-success"
                                                        : judul.tingkat_kesulitan ===
                                                          "medium"
                                                        ? "badge-warning"
                                                        : "badge-error"
                                                }`}
                                            >
                                                {judul.tingkat_kesulitan}
                                            </span>
                                        </td>
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
                            </tbody>
                        </table>

                        <dialog id="modalView" className="modal">
                            <div className="w-11/12 max-w-5xl modal-box">
                                <div className="py-4">
                                    <Markdown remarkPlugins={[remarkGfm]}>
                                        {view}
                                    </Markdown>
                                </div>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

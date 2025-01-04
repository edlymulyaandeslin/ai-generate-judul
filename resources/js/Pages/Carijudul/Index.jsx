import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { geminiRequest } from "@/utils/ai/gemini";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

export default function Index() {
    const [text, setText] = useState("");
    const { auth } = usePage().props;
    const [loading, setLoading] = useState(false);
    const btnTitle = !text ? "Generate Judul" : "Generate Ulang";

    const { data, setData, post, errors } = useForm({
        jurusan: "",
        jenis_penelitian: "",
        lokasi: "",
        tingkat_kesulitan: "",
        ai_response: "",
    });

    const handleAI = async (e) => {
        e.preventDefault();

        if (
            !data.jurusan ||
            !data.jenis_penelitian ||
            !data.lokasi ||
            !data.tingkat_kesulitan
        ) {
            return toast.warning("Pastikan semua data di isi ya brother!");
        }

        if (auth.user.credit < 10) {
            return router.get(route("credits.notenought"));
        }

        setLoading(true);

        const prompt = `Berikan saya 3 referensi judul ${data.jenis_penelitian} untuk jurusan ${data.jurusan} yang lokasi penelitian berada di ${data.lokasi} dengan tingkat kesulitan pembuatan ${data.tingkat_kesulitan}. berikan poin poin penting untuk setiap judulnya.`;

        const responseAI = await geminiRequest(prompt);

        setText(responseAI);
        setData("ai_response", responseAI);
        setLoading(false);
    };

    useEffect(() => {
        if (data.ai_response) {
            post(route("carijudul.store"));
        }
    }, [text]);

    return (
        <MainLayout>
            <Head title="Cari Judul With AI" />

            <ContentWrapper>
                <div className="w-full">
                    <h1 className="text-center md:text-lg text-md md:text-left">
                        Temukan judul penelitian terbaik dengan bantuan AI
                        canggih! Hanya dalam hitungan detik, dapatkan
                        rekomendasi judul penelitian yang kreatif, relevan, dan
                        sesuai dengan bidang Anda. Coba sekarang dan buat
                        penelitian anda lebih mudah dari sebelumnya!
                    </h1>

                    <form
                        onSubmit={handleAI}
                        className="grid grid-cols-1 lg:grid-cols-2"
                    >
                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Pilih Jurusan
                            </h1>
                            <div className="flex justify-center gap-4">
                                <label
                                    htmlFor="sistem_informasi"
                                    className={`btn ${
                                        data.jurusan == "sistem informasi"
                                            ? "btn-primary"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="sistem_informasi"
                                        type="radio"
                                        name="jurusan"
                                        value={"sistem informasi"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData("jurusan", e.target.value)
                                        }
                                    />
                                    Sistem Informasi
                                </label>

                                <label
                                    htmlFor="teknik_informatika"
                                    className={`btn ${
                                        data.jurusan == "teknik informatika"
                                            ? "btn-primary"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="teknik_informatika"
                                        type="radio"
                                        name="jurusan"
                                        value={"teknik informatika"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData("jurusan", e.target.value)
                                        }
                                    />
                                    Teknik Informatika
                                </label>
                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Jenis Penelitian
                            </h1>
                            <div className="flex justify-center gap-4">
                                <label
                                    htmlFor="magang"
                                    className={`btn ${
                                        data.jenis_penelitian == "magang"
                                            ? "btn-accent"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="magang"
                                        type="radio"
                                        name="jenis_penelitian"
                                        value={"magang"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "jenis_penelitian",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Magang
                                </label>

                                <label
                                    htmlFor="skripsi"
                                    className={`btn ${
                                        data.jenis_penelitian == "skripsi"
                                            ? "btn-accent"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="skripsi"
                                        type="radio"
                                        name="jenis_penelitian"
                                        value={"skripsi"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "jenis_penelitian",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Skripsi
                                </label>
                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Tingkat Kesulitan
                            </h1>
                            <div className="flex justify-center gap-4">
                                <label
                                    htmlFor="easy"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "easy"
                                            ? "btn-success"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="easy"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"easy"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Easy
                                </label>

                                <label
                                    htmlFor="medium"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "medium"
                                            ? "btn-warning"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="medium"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"medium"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Medium
                                </label>

                                <label
                                    htmlFor="hard"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "hard"
                                            ? "btn-error"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="hard"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"hard"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Hard
                                </label>
                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Lokasi Penelitian
                            </h1>

                            <div className="w-full max-w-xs mx-auto">
                                <input
                                    type="text"
                                    placeholder="example: dinas kominfo"
                                    className="w-full max-w-xs input input-bordered"
                                    onChange={(e) =>
                                        setData("lokasi", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 lg:col-span-2">
                            <button type="submit" className="btn btn-info">
                                {loading ? "Generating..." : btnTitle}
                            </button>
                        </div>
                    </form>

                    {text && (
                        <div className="w-full max-w-6xl mx-auto my-8">
                            <Markdown
                                className="p-8 text-lg rounded bg-base-300"
                                remarkPlugins={[remarkGfm]}
                            >
                                {text}
                            </Markdown>
                        </div>
                    )}
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

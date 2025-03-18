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
        jenis_aplikasi: "",
        basis: "",
        jenis_penelitian: "",
        lokasi: "",
        tingkat_kesulitan: "",
        additional_prompt: "",
        ai_response: "",
    });

    const handleAI = async (e) => {
        e.preventDefault();

        if (
            !data.jurusan ||
            !data.jenis_aplikasi ||
            !data.basis ||
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

        //jurusan = sistem informasi
        //jenis aplikasi = sistem pakar / spk / sistem informasi
        //berbasis = web
        //jenis penelitian = skripsi
        //tingkat kesulitan = medium
        //lokasi penelitian = lokasi x
        //prompt tambahan user = saya ingin membahas tentang xxx

        // Bagian optional untuk tambahan prompt
        let optionalText = "";
        if (data.additional_prompt) {
            optionalText = ` Selain itu, ${data.additional_prompt} secara mendalam.`;
        }

        // Tambahan prompt khusus untuk jenis aplikasi tertentu
        let additionalMethodPrompt = "";
        const lowerJenisAplikasi = data.jenis_aplikasi.toLowerCase();
        if (
            lowerJenisAplikasi === "sistem pakar" ||
            lowerJenisAplikasi === "sistem pendukung keputusan"
        ) {
            additionalMethodPrompt = " Sertakan juga metode sistem pakarnya.";
        }

        // Prompt final
        const prompt = `Berikan saya 5 referensi judul ${data.jenis_penelitian} untuk jurusan ${data.jurusan} dengan fokus pada pengembangan ${data.jenis_aplikasi} berbasis ${data.basis}. Penelitian dilakukan di ${data.lokasi} dengan tingkat kesulitan ${data.tingkat_kesulitan}. Sertakan rincian poin penting pada setiap judul, meliputi latar belakang masalah, tujuan penelitian, metodologi, inovasi, dan keunggulan.${additionalMethodPrompt}${optionalText}`;

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
                                Jenis Aplikasi
                            </h1>
                            <div className="flex flex-wrap justify-center gap-4">
                                <label
                                    htmlFor="sistem pakar"
                                    className={`btn ${
                                        data.jenis_aplikasi == "sistem pakar"
                                            ? "btn-accent"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="sistem pakar"
                                        type="radio"
                                        name="jenis_aplikasi"
                                        value={"sistem pakar"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "jenis_aplikasi",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Sistem Pakar
                                </label>

                                <label
                                    htmlFor="sistem pendukung keputusan"
                                    className={`btn ${
                                        data.jenis_aplikasi ==
                                        "sistem pendukung keputusan"
                                            ? "btn-accent"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="sistem pendukung keputusan"
                                        type="radio"
                                        name="jenis_aplikasi"
                                        value={"sistem pendukung keputusan"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "jenis_aplikasi",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Sistem Pendukung Keputusan
                                </label>
                                <label
                                    htmlFor="sistem informasi"
                                    className={`btn ${
                                        data.jenis_aplikasi ==
                                        "sistem informasi"
                                            ? "btn-accent"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="sistem informasi"
                                        type="radio"
                                        name="jenis_aplikasi"
                                        value={"sistem informasi"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "jenis_aplikasi",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Sistem Informasi
                                </label>
                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Berbasis
                            </h1>
                            <div className="flex justify-center gap-4">
                                <label
                                    htmlFor="web"
                                    className={`btn ${
                                        data.basis == "web" ? "btn-info" : ""
                                    }`}
                                >
                                    <input
                                        id="web"
                                        type="radio"
                                        name="basis"
                                        value={"web"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData("basis", e.target.value)
                                        }
                                    />
                                    Web
                                </label>

                                <label
                                    htmlFor="mobile"
                                    className={`btn ${
                                        data.basis == "mobile"
                                            ? "btn-secondary"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="mobile"
                                        type="radio"
                                        name="basis"
                                        value={"mobile"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData("basis", e.target.value)
                                        }
                                    />
                                    Mobile
                                </label>
                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Tingkat Kesulitan
                            </h1>
                            <div className="flex justify-center gap-4">
                                <label
                                    htmlFor="mudah"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "mudah"
                                            ? "btn-success"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="mudah"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"mudah"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Mudah
                                </label>

                                <label
                                    htmlFor="menengah"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "menengah"
                                            ? "btn-warning"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="menengah"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"menengah"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Menengah
                                </label>

                                <label
                                    htmlFor="sulit"
                                    className={`btn ${
                                        data.tingkat_kesulitan == "sulit"
                                            ? "btn-error"
                                            : ""
                                    }`}
                                >
                                    <input
                                        id="sulit"
                                        type="radio"
                                        name="tingkat_kesulitan"
                                        value={"sulit"}
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "tingkat_kesulitan",
                                                e.target.value
                                            )
                                        }
                                    />
                                    Sulit
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

                        <div className="my-4">
                            <h1 className="mb-4 text-lg font-bold text-center">
                                Prompt
                                <br />
                                <span className="text-xs">(opsional)</span>
                            </h1>

                            <div className="w-full max-w-md mx-auto">
                                <textarea
                                    placeholder="ex: saya ingin membahas x"
                                    className="w-full textarea textarea-bordered"
                                    onChange={(e) =>
                                        setData(
                                            "additional_prompt",
                                            e.target.value
                                        )
                                    }
                                ></textarea>
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

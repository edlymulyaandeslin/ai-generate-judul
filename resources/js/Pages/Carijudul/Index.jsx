import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { geminiRequest } from "@/utils/ai/gemini";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";
import { toast } from "sonner";

export default function Index() {
    const [referensi, setListReferensi] = useState([]);
    const { auth } = usePage().props;
    const [loading, setLoading] = useState(false);

    const btnTitle =
        referensi.length == 0 ? "Generate Judul" : "Generate Ulang";

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
            return toast.warning("Pastikan semua data di isi ya brader!");
        }

        if (auth.user.credit < 10) {
            return router.get(route("credits.notenought"));
        }

        setLoading(true);

        // Tambahan prompt khusus untuk jenis aplikasi tertentu
        let additionalMethodPrompt = "";
        const lowerJenisAplikasi = data.jenis_aplikasi.toLowerCase();
        if (
            lowerJenisAplikasi === "sistem pakar" ||
            lowerJenisAplikasi === "sistem pendukung keputusan"
        ) {
            additionalMethodPrompt = ` Sertakan juga metode ${lowerJenisAplikasi}nya.`;
        }

        // Bagian optional untuk tambahan prompt
        let optionalText = "";
        if (data.additional_prompt) {
            optionalText = ` Selain itu, ${data.additional_prompt} secara mendalam.`;
        }

        // Prompt final
        const prompt = `Saya membutuhkan 3 referensi judul penelitian ${data.jenis_penelitian} untuk jurusan ${data.jurusan}, dengan fokus pada pengembangan ${data.jenis_aplikasi} berbasis ${data.basis}. Penelitian ini dilakukan di ${data.lokasi}, dengan tingkat kesulitan ${data.tingkat_kesulitan}.

        Untuk setiap judul, berikan penjelasan terstruktur yang mencakup:
        - judul
        - latar_belakang
        - tujuan_penelitian
        - metodologi_penelitian
        - inovasi
        - keunggulan

        ${additionalMethodPrompt}${optionalText}

        Tampilkan jawaban dalam format JSON array dengan key yang konsisten dan tanpa penjelasan tambahan di luar struktur JSON.`;

        const responseAI = await geminiRequest(prompt);
        // const responseAI = await groqRequest(prompt);

        const cleaned = responseAI
            .replace(/```json\s*|```/g, "") // Hapus ```json atau ```
            .trim();
        const listRef = JSON.parse(cleaned);

        setListReferensi(listRef);
        setData("ai_response", JSON.stringify(listRef));
        setLoading(false);
    };

    useEffect(() => {
        if (data.ai_response) {
            post(route("carijudul.store"));
        }
    }, [referensi]);

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
                                    placeholder="example: Toko gula pasir pengaraian"
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
                                    placeholder="ex: saya ingin membahas khusus bidang x"
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
                            <button
                                type="submit"
                                className="btn btn-outline btn-accent btn-block"
                            >
                                {loading ? (
                                    <LuLoader className="animate-spin" />
                                ) : (
                                    <>
                                        {btnTitle} (10
                                        <FaCoins
                                            size={13}
                                            className="text-yellow-400"
                                        />
                                        )
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {referensi.length !== 0 && (
                        <div className="w-full max-w-6xl mx-auto px-4 py-10 grid gap-8">
                            {referensi.map((ref, index) => (
                                <div
                                    key={index}
                                    className="relative border rounded-xl p-6 bg-base-100 shadow-md hover:shadow-lg transition-all"
                                >
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-4 text-sm text-base-content/60">
                                        <span className="font-medium">
                                            Referensi #{index + 1}
                                        </span>
                                    </div>

                                    {/* Judul */}
                                    <h2 className="text-xl font-semibold mb-4 text-base-content">
                                        {ref.judul}
                                    </h2>

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
                                                {ref.metodologi_penelitian}
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
                    )}
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

import { formatingPrice } from "@/utils";
import { FaWhatsapp } from "react-icons/fa";

export default function Card({ paket, isMagang = false }) {
    const title = isMagang ? "MAGANG" : "SKRIPSI";
    return (
        <div
            className="shadow-xl md:w-[500px] sm:w-[400px] w-[300px] h-auto card bg-base-100"
            style={{
                backgroundImage: `url("${paket.bg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="flex flex-col items-center justify-between card-body">
                <div className="flex flex-col card-title">
                    <h2 className="w-full text-center border-b-2 border-green-500">
                        {paket.title}
                    </h2>
                    <span>
                        {formatingPrice(paket.price)}
                        {paket.title === "Laporan" && "/Bab"}
                    </span>
                </div>
                <div className="w-full max-w-xs mx-auto">
                    <ul className="list-disc">
                        {paket.description.split("\n").map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-actions">
                    <a
                        href={
                            "https://wa.me/6281374653119?text=Halo kak saya ingin pesan PAKET " +
                            title +
                            " pembuatan " +
                            encodeURIComponent(paket.title)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                    >
                        <FaWhatsapp size={24} />
                        Pesan
                    </a>
                </div>
            </div>
        </div>
    );
}

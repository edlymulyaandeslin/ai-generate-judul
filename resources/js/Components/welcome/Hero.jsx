import { Link as LinkScroll } from "react-scroll";

export default function Hero() {
    return (
        <div className="hero min-h-[530px] px-4 lg:px-16">
            <div className="flex flex-col-reverse md:flex-row hero-content">
                <div className="max-w-xl text-center md:max-w-3xl lg:max-w-4xl md:text-left">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Solusi Tepat untuk Skripsi dan Magang!
                    </h1>
                    <p className="py-4 text-sm md:py-6 md:text-base lg:text-lg">
                        Lagi pusing buat website untuk skripsi atau magang?
                        Jangan buang waktu! Kami siap membantu kamu membuat
                        website profesional sesuai kebutuhan akademik atau
                        proyekmu. Cepat, mudah, dan sesuai standar terbaik.
                    </p>
                    <LinkScroll
                        to="paketmagang"
                        smooth={true}
                        duration={400}
                        className="text-white bg-blue-600 shadow btn hover:bg-blue-700"
                    >
                        Pesan Sekarang
                    </LinkScroll>
                </div>
                <div className="md:flex md:justify-center">
                    <img
                        src="/img/3d/3d-5.png"
                        alt="404"
                        className="md:w-[800px] w-[300px]"
                    />
                </div>
            </div>
        </div>
    );
}

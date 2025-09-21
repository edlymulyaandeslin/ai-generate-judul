import bg3 from "../../../public/img/bg/bg-3.jpeg";
import bg6 from "../../../public/img/bg/bg-6.jpeg";

export const PAKET_MAGANG = [
    {
        title: "Laporan",
        price: 150000,
        description: "Pengerjaan laporan\nFree konsultasi\nFree revisi laporan",
        bg: bg3,
    },
    {
        title: "Aplikasi",
        price: 1000000,
        description:
            "Pengerjaan aplikasi\nFree konsultasi\nFree revisi aplikasi",
        bg: bg3,
    },
    {
        title: "Laporan + Aplikasi",
        price: 1500000,
        description:
            "Pengerjaan laporan full bab\nPengerjaan aplikasi\nFree konsultasi\nFree revisi aplikasi\nFree revisi laporan",
        bg: bg6,
    },
];
export const PAKET_SKRIPSI = [
    {
        title: "Laporan",
        price: 200000,
        description: "Pengerjaan laporan\nFree konsultasi\nFree revisi laporan",
        bg: bg3,
    },
    {
        title: "Aplikasi",
        price: 3000000,
        description:
            "Pengerjaan aplikasi\nFree konsultasi\nFree revisi aplikasi",
        bg: bg3,
    },
    {
        title: "Laporan + Aplikasi",
        price: 3500000,
        description:
            "Pengerjaan laporan full bab\nPengerjaan aplikasi\nFree konsultasi\nFree revisi aplikasi\nFree revisi laporan",
        bg: bg6,
    },
];

export const formatingPrice = (price) => {
    return "Rp" + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const formatingDate = (date) => {
    const dateFormat = new Date(date);
    const optDate = { year: "numeric", month: "long", day: "numeric" };

    const optTime = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };

    const hour = String(dateFormat.getHours()).padStart(2, "0");
    const minute = String(dateFormat.getMinutes()).padStart(2, "0");
    const second = String(dateFormat.getSeconds()).padStart(2, "0");
    return (
        dateFormat.toLocaleDateString("id-ID", optDate) +
        ` ${hour}:${minute}:${second}`
    );
};

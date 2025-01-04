import Hero from "@/Components/welcome/Hero";
import PaketMagang from "@/Components/welcome/PaketMagang";
import PaketSkripsi from "@/Components/welcome/PaketSkripsi";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Homepage" />

            <section id="home">
                <Hero />
            </section>

            <section id="paketmagang">
                <PaketMagang />
            </section>

            <section id="paketskripsi">
                <PaketSkripsi />
            </section>
        </MainLayout>
    );
}

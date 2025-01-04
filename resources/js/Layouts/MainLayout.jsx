import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

export default function MainLayout({ children }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.warning) {
            toast.warning(flash.warning);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-base-200 to-purple-800">
            <Navbar />

            <main>{children}</main>

            <Footer />

            <Toaster richColors />
        </div>
    );
}

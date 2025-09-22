import MainLayout from "@/Layouts/MainLayout";
import { formatingDate } from "@/utils";
import { Button } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import axios from "axios";
import { toast } from "sonner";

export default function Upgrade() {
    const { auth } = usePage().props;

    const handleUpgrade = async () => {
        const response = await axios.post(route("midtrans.snaptoken"));
        const snapToken = response.data.snap_token;

        snap.pay(snapToken, {
            onSuccess: async function (result) {
                const res = await axios.post(route("midtrans.webhook"), result);
                if (res.data.success) {
                    window.location.reload();
                    toast.success(
                        "Upgrade to PRO successful! Enjoy your new features."
                    );
                }
            },
            onPending: async function (result) {
                const res = await axios.post(route("midtrans.webhook"), result);
                toast.warning(
                    `Payment is ${res.data.transaction_status}. Please complete the payment.`
                );
            },
            onError: async function (result) {
                const res = await axios.post(route("midtrans.webhook"), result);
                toast.error(
                    `Payment ${res.data.transaction_status} or was cancelled.`
                );
            },
            onClose: function () {
                console.log("client closed payment popup");
            },
        });
    };
    return (
        <MainLayout>
            <Head title="Upgrade to PRO" />

            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-sky-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Free Plan */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Free Plan
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Cocok untuk coba-coba, fitur terbatas.
                        </p>

                        <div className="mt-6 text-4xl font-extrabold text-gray-800 dark:text-gray-200">
                            Rp0
                            <span className="text-base font-medium text-gray-500">
                                {" "}
                                / bulan
                            </span>
                        </div>

                        <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                            <li>❌ Akses terbatas</li>
                            <li>❌ Tidak ada support premium</li>
                            <li>
                                ⚠️ Hanya bisa generate judul <b>1x</b>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <span className="block w-full rounded-xl bg-gray-200 dark:bg-gray-700 px-6 py-3 text-center text-gray-600 dark:text-gray-300 font-semibold cursor-not-allowed">
                                Current Plan
                            </span>
                        </div>
                    </div>

                    {/* PRO Plan */}
                    <div className="relative bg-gradient-to-b from-indigo-600 to-sky-500 text-white rounded-2xl shadow-2xl p-8 scale-105 flex flex-col">
                        {/* Badge */}
                        <div className="absolute -top-3 right-6">
                            <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                                RECOMMENDED
                            </span>
                        </div>

                        <h2 className="text-2xl font-extrabold">PRO Plan</h2>
                        <p className="mt-2 text-indigo-100">
                            Unlock semua fitur premium tanpa batas 🚀
                        </p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-5xl font-extrabold">
                                Rp49.000
                            </span>
                            <span className="text-lg text-indigo-200">
                                / bulan
                            </span>
                        </div>
                        <ul className="mt-6 space-y-3 text-indigo-50 text-sm">
                            <li>✔ Akses penuh semua fitur premium</li>
                            <li>✔ Prioritas support 24/7</li>
                            <li>✔ Update otomatis fitur terbaru</li>
                            <li>✔ Konten & tools eksklusif PRO</li>
                            <li>
                                🔥 Generate judul AI <b>UNLIMITED</b>
                            </li>
                        </ul>
                        <div className="mt-auto pt-6">
                            <Button
                                onClick={handleUpgrade}
                                className="block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center text-lg font-bold text-gray-900 shadow-lg hover:bg-yellow-300 transition"
                                disabled={auth.user.is_premium}
                            >
                                {auth.user.is_premium
                                    ? "ACTIVE"
                                    : "🚀 Upgrade Sekarang"}
                            </Button>
                            {Boolean(auth.user.is_premium) && (
                                <p className="text-center text-sm mt-2">
                                    berlaku hingga:{" "}
                                    {formatingDate(auth.user.premium_expired)}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

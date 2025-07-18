import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { BsPatchCheck } from "react-icons/bs";

export default function PaymentSuccess({ orderId }) {
    return (
        <MainLayout>
            <Head title="Payment Success" />
            <ContentWrapper>
                <div className="flex flex-col items-center justify-center space-y-10 min-h-[450px]">
                    <h1 className="text-4xl font-bold text-center">
                        Payment Successfully
                    </h1>
                    <div>
                        <BsPatchCheck className="text-green-400 text-7xl" />
                    </div>
                    <h1 className="text-2xl font-semibold text-center">
                        Order ID : {orderId}
                    </h1>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { formatingDate, formatingPrice, ORDER_STATUS } from "@/utils";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function Index({ listOrder }) {
    const handleRepayment = async (orderId, snapToken) => {
        const res = await axios.get(route("midtrans.status", orderId));
        const status = await res.data.response.transaction_status;
        // if (status !== STATUS.PENDING) {
        //     const formData = new FormData();

        //     formData.append("order_id", orderId);

        //     router.post(route("midtrans.expired"), formData);
        //     return;
        // }

        window.snap.pay(snapToken);
    };
    return (
        <MainLayout>
            <ContentWrapper>
                <Head title="History Order" />

                <h1 className="text-4xl font-bold text-center">
                    History Order
                </h1>

                <div className="w-full my-8">
                    <div className="overflow-x-auto">
                        <table className="table lg:text-lg">
                            {/* head */}
                            <thead>
                                <tr className="text-lg">
                                    <th>Date</th>
                                    <th>Credits</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOrder.map((order, index) => (
                                    <tr
                                        className="hover:bg-purple-900"
                                        key={index}
                                    >
                                        <td>
                                            {formatingDate(order.created_at)}
                                        </td>
                                        <td>{order.jumlah_credit} credit</td>
                                        <td>{formatingPrice(order.price)}</td>
                                        <td>
                                            {ORDER_STATUS.map(
                                                (stats, index) => {
                                                    if (
                                                        stats.value ===
                                                        order.status
                                                    ) {
                                                        return (
                                                            <span
                                                                className={`badge ${stats.class}`}
                                                                key={index}
                                                            >
                                                                {stats.label}
                                                            </span>
                                                        );
                                                    }
                                                }
                                            )}
                                        </td>
                                        <td>
                                            {order.status == "pending" ? (
                                                <button
                                                    className="btn btn-info md:btn-sm"
                                                    onClick={() =>
                                                        handleRepayment(
                                                            order.order_id,
                                                            order.snap_token
                                                        )
                                                    }
                                                >
                                                    <LiaMoneyBillWaveSolid
                                                        size={20}
                                                    />
                                                    Bayar
                                                </button>
                                            ) : (
                                                ""
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

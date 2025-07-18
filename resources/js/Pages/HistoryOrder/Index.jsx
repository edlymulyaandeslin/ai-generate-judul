import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { formatingDate, formatingPrice, ORDER_STATUS } from "@/utils";
import { Head } from "@inertiajs/react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function Index({ listOrder }) {
    const handleRepayment = async (snapToken) => {
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

                                {listOrder.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center text-gray-500"
                                        >
                                            No orders found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}

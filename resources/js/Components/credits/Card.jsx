import { formatingPrice, STATUS } from "@/utils";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import { FaCoins } from "react-icons/fa";
import { toast } from "sonner";

export default function Card({ credit }) {
    const { auth } = usePage().props;

    const handleBuyCredit = async (id) => {
        // pengecekan jika ada order yang statusnya pending
        for (const [_, c] of auth.user.credit_orders.entries()) {
            if (c.status == STATUS.PENDING) {
                return toast.warning(
                    "Please complete previous orders to create new orders"
                );
            }
        }

        const apiUrl = route("midtrans.snaptoken", id);

        const response = await axios.post(apiUrl);
        const snapToken = await response.data.snap_token;

        window.snap.pay(snapToken, {
            onClose: async () => {
                toast.error("Order Canceled");

                await axios.delete(route("midtrans.cancel"));
            },
        });
    };

    return (
        <div className="shadow-xl card bg-base-100 w-96 h-96">
            <div className="items-center text-center card-body">
                <h2 className="text-2xl card-title">{credit.title}</h2>
                <p className="text-2xl">{formatingPrice(credit.price)}</p>
                <span>
                    <FaCoins size={50} className="text-yellow-400" />
                </span>
                <p className="text-4xl font-bold">{credit.credit} Credit</p>
                <div className="card-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleBuyCredit(credit.id)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

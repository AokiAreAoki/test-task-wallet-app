import { type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import transactionsData from "../data/transactions.json";
import { type Transaction } from "../types";
import { format } from "date-fns";

const transactions: Transaction[] = transactionsData as Transaction[];

export const TransactionDetail: FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const transaction = transactions.find((t) => t.id === id);

	if (!transaction) {
		return (
			<div className="max-w-[430px] mx-auto bg-app-bg min-h-screen flex items-center justify-center">
				<div className="text-gray-500">Transaction not found</div>
				<button
					onClick={() => navigate(-1)}
					className="mt-4 text-blue-500 font-medium"
				>
					Go Back
				</button>
			</div>
		);
	}

	const formatCurrency = (val: number) =>
		val.toLocaleString("en-US", { style: "currency", currency: "USD" });

	const exactDate = format(new Date(transaction.date), "M/d/yy, HH:mm");

	return (
		<div className="max-w-[430px] mx-auto bg-app-bg min-h-screen">
			{/* Header Back Button */}
			<div className="pt-12 px-4 pb-2">
				<button
					onClick={() => navigate(-1)}
					className="text-blue-500 text-xl hover:opacity-80 transition-opacity"
				>
					<FontAwesomeIcon icon="chevron-left" />
				</button>
			</div>

			{/* Main Details */}
			<div className="flex flex-col items-center mt-6">
				<h1 className="text-6xl font-bold text-black tracking-tight">
					{formatCurrency(transaction.amount)}
				</h1>
				<p className="text-gray-500 font-medium text-[16px] mt-2">
					{transaction.name}
				</p>
				<p className="text-gray-400 text-[14px]">{exactDate}</p>
			</div>

			{/* Details Card */}
			<div className="px-4 mt-8">
				<div className="bg-panel-bg rounded-2xl shadow-sm overflow-hidden p-4">
					<div className="mb-4">
						<p className="text-black font-semibold text-[16px]">
							Status: {transaction.pending ? "Pending" : "Approved"}
						</p>
						<p className="text-gray-400 text-[15px] mt-0.5">Apple Card</p>
					</div>

					<div className="h-[1px] bg-gray-100 w-full mb-4"></div>

					<div className="flex justify-between items-center">
						<span className="text-black font-semibold text-[16px]">Total</span>
						<span className="text-black font-semibold text-[16px]">
							{formatCurrency(transaction.amount)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

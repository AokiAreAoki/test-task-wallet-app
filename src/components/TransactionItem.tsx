import { type FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatTransactionDate } from "../utils/dateFormatter";
import { type IconName } from "@fortawesome/fontawesome-svg-core";
import { type Transaction } from "../types";

interface Props {
	transaction: Transaction;
}

const darkColors = [
	"bg-blue-600",
	"bg-purple-600",
	"bg-red-600",
	"bg-indigo-600",
	"bg-teal-600",
	"bg-gray-800",
	"bg-gradient-to-br from-pink-500 to-orange-400",
	"bg-gradient-to-br from-blue-500 to-green-400",
];

export const TransactionItem: FC<Props> = ({ transaction }) => {
	const navigate = useNavigate();

	const bgColor = useMemo(() => {
		return darkColors[Math.floor(Math.random() * darkColors.length)];
	}, []);

	const formattedDate = formatTransactionDate(transaction.date);
	const amountPrefix = transaction.type === "Payment" ? "+" : "";
	const amountStr = `${amountPrefix}$${transaction.amount.toFixed(2)}`;

	const descriptionStr = transaction.pending
		? `Pending - ${transaction.description}`
		: transaction.description;

	const dateStr = transaction.authorizedUser
		? `${transaction.authorizedUser} - ${formattedDate}`
		: formattedDate;

	return (
		<div
			className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors px-2 rounded-xl group"
			onClick={() => navigate(`/transaction/${transaction.id}`)}
		>
			<div className="flex items-center gap-4 flex-1 overflow-hidden">
				<div
					className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bgColor} shadow-sm group-hover:scale-105 transition-transform`}
				>
					<FontAwesomeIcon
						icon={transaction.iconName as IconName}
						className="text-white text-xl"
					/>
				</div>

				<div className="flex flex-col overflow-hidden">
					<span className="font-semibold text-[16px] text-gray-900 truncate">
						{transaction.name}
					</span>
					<span className="text-[14px] text-gray-500 truncate">
						{descriptionStr}
					</span>
					<span className="text-[14px] text-gray-500">{dateStr}</span>
				</div>
			</div>

			<div className="flex items-center gap-2 pl-3">
				<div className="flex flex-col items-end">
					<span
						className={`font-medium text-[16px] ${transaction.type === "Payment" ? "text-black" : "text-gray-900"}`}
					>
						{amountStr}
					</span>
					{/* Mock cash back or percentage badge */}
					{transaction.type === "Credit" && (
						<span className="bg-gray-100 text-gray-500 text-[11px] font-bold px-1.5 py-0.5 rounded-md mt-0.5">
							3%
						</span>
					)}
				</div>
				<FontAwesomeIcon
					icon="chevron-right"
					className="text-gray-300 text-sm ml-1"
				/>
			</div>
		</div>
	);
};

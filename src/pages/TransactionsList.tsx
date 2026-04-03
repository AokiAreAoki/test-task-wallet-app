import { type FC } from "react";
import { CardBalance } from "../components/CardBalance";
import { PaymentDue } from "../components/NoPaymentDue";
import { DailyPoints } from "../components/DailyPoints";
import { TransactionItem } from "../components/TransactionItem";

import transactionsData from "../data/transactions.json";
import { type Transaction } from "../types";

const transactions: Transaction[] = transactionsData as Transaction[];

export const TransactionsList: FC = () => {
	return (
		<div className="max-w-[430px] mx-auto bg-app-bg min-h-screen pb-10">
			<div className="p-4 pt-10">
				{/* Top Grid Area */}
				<div
					className="grid grid-cols-2 gap-3 mb-8"
					style={{ gridAutoRows: "minmax(0, 1fr)" }}
				>
					<div className="flex flex-col gap-3 h-full">
						<div className="flex-1">
							<CardBalance />
						</div>
						<div className="flex-1">
							<DailyPoints />
						</div>
					</div>
					<div className="h-full">
						<PaymentDue />
					</div>
				</div>

				{/* Transactions List */}
				<h2 className="text-[22px] font-bold text-black mb-4 px-1">
					Latest Transactions
				</h2>

				<div className="bg-panel-bg rounded-3xl p-3 shadow-sm shadow-gray-200">
					{transactions.slice(0, 10).map((tx) => (
						<TransactionItem key={tx.id} transaction={tx} />
					))}
				</div>
			</div>
		</div>
	);
};

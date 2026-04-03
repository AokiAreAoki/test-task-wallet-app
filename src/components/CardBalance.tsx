import { type FC, useState } from "react";

export const CardBalance: FC = () => {
	const limit = 1500;
	// Simple random balance for demonstration
	const [balance] = useState(
		() => Math.floor(Math.random() * (limit + 1) * 100) / 100,
	);
	const available = limit - balance;

	const formatCurrency = (val: number) =>
		val.toLocaleString("en-US", { style: "currency", currency: "USD" });

	return (
		<div className="bg-panel-bg rounded-2xl shadow p-4 flex flex-col justify-between h-full">
			<div className="text-gray-900 font-medium text-[15px]">Card Balance</div>
			<div className="text-3xl font-bold my-1 text-black">
				{formatCurrency(balance)}
			</div>
			<div className="text-gray-500 font-medium text-[14px]">
				{formatCurrency(available)} Available
			</div>
		</div>
	);
};

import { type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PaymentDue: FC = () => {
	const month = new Date().toLocaleString("en-US", { month: "long" });

	return (
		<div className="bg-panel-bg rounded-2xl shadow p-4 flex flex-col justify-between h-full group hover:scale-[1.02] transition-transform duration-200">
			<div>
				<div className="text-gray-900 font-medium text-[15px]">
					No Payment Due
				</div>
				<div className="text-gray-400 font-medium text-[15px] mt-1 leading-snug">
					You've paid your {month} balance.
				</div>
			</div>
			<div className="self-end mt-4">
				<div className="w-12 h-12 bg-[#eeeeef] rounded-full flex items-center justify-center border-2 border-[#ebebec]">
					<FontAwesomeIcon icon="check" className="text-2xl text-black" />
				</div>
			</div>
		</div>
	);
};

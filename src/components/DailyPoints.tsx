import { type FC, useMemo } from "react";
import { calculateDailyPoints } from "../utils/pointsCalculator";

export const DailyPoints: FC = () => {
	const points = useMemo(() => calculateDailyPoints(new Date()), []);

	return (
		<div className="bg-panel-bg rounded-2xl shadow p-4 flex flex-col justify-between h-full group hover:scale-[1.02] transition-transform duration-200">
			<div className="text-gray-900 font-medium text-[15px]">Daily Points</div>
			<div className="text-gray-400 text-[18px] font-medium mt-1">{points}</div>
		</div>
	);
};

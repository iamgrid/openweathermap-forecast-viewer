import { TOWM2Point5ForecastListEntry } from "@/app/page";
import MainWeatherTableRow from "./MainWeatherTableRow";
import styles from "./MainWeatherTable.module.css";
import MainWeatherTableDayHeader from "./MainWeatherTableDayHeader";
import { Fragment } from "react";

interface TMainWeatherTableProps {
	weatherData: TOWM2Point5ForecastListEntry[];
}

function MainWeatherTable({ weatherData }: TMainWeatherTableProps) {
	let currentDayStr: string = "";
	return (
		<div>
			<table className={styles["table"]}>
				<tbody>
					{weatherData.map((entry) => {
						const currentDate = new Date(entry.dt * 1000);
						const dayStr = currentDate.toLocaleDateString("en-US", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						});

						let dayHeader = null;

						if (dayStr !== currentDayStr) {
							dayHeader = (
								<MainWeatherTableDayHeader
									key={dayStr}
									colSpan={7}
									dayName={dayStr}
								/>
							);
							currentDayStr = dayStr;
						}

						return (
							<Fragment key={entry.dt}>
								{dayHeader}
								<MainWeatherTableRow key={entry.dt} rowData={entry} />
							</Fragment>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default MainWeatherTable;

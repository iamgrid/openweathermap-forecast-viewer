import { TOWM2Point5ForecastListEntry } from "@/app/page";
import MainWeatherListEntry from "./MainWeatherListEntry";
import styles from "./MainWeatherList.module.css";
import MainWeatherListDayHeader from "./MainWeatherListDayHeader";
import { Fragment } from "react";

interface TMainWeatherListProps {
	weatherData: TOWM2Point5ForecastListEntry[];
}

function MainWeatherList({ weatherData }: TMainWeatherListProps) {
	let currentDayStr: string = "";
	return (
		<div className={styles["mwl"]}>
			<div>
				{weatherData.map((entry, ix) => {
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
							<MainWeatherListDayHeader key={dayStr} dayName={dayStr} />
						);
						currentDayStr = dayStr;
					}

					return (
						<Fragment key={entry.dt}>
							{dayHeader}
							<MainWeatherListEntry
								key={entry.dt}
								rowData={entry}
								isEvenEntry={(ix + 1) % 2 === 0}
							/>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}

export default MainWeatherList;

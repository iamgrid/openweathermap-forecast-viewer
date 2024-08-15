import { TOWM2Point5ForecastListEntry } from "@/app/page";
import { useMemo } from "react";
import MWLTempSection from "./sections/MWLTempSection";
import MWLPrecipitationSection from "./sections/MWLPrecipitationSection";
import MWLWindSection from "./sections/MWLWindSection";
import MWLMiscSection from "./sections/MWLMiscSection";
import MWLIconSection from "./sections/MWLIconSection";
import styles from "./MainWeatherList.module.css";

interface TMainWeatherListEntryProps {
	rowData: TOWM2Point5ForecastListEntry;
	isEvenEntry: boolean;
}

function MainWeatherListEntry({
	rowData,
	isEvenEntry,
}: TMainWeatherListEntryProps) {
	const timeStr = useMemo(() => {
		// const functionSignature = "MainWeatherListEntry.tsx@timeStr useMemo()";

		const currentDate = new Date(rowData.dt * 1000);

		// console.log(functionSignature, { currentDate });

		return currentDate.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			// hour12: false,
		});
	}, [rowData.dt]);

	let rainAmount: number = 0;
	if ("rain" in rowData && "3h" in rowData.rain) {
		rainAmount = rowData.rain["3h"];
	}
	let snowAmount: number = 0;
	if ("snow" in rowData && "3h" in rowData.snow) {
		snowAmount = rowData.snow["3h"];
	}

	return (
		<div
			className={`${styles["mwl-entry"]} ${
				isEvenEntry ? styles["mwl-entry--even"] : ""
			}`}
			key={rowData.dt}
		>
			<div
				className={`${styles["mwl-section"]} ${styles["mwl-section--time"]} owmf-ta-right`}
			>
				<div>{timeStr}</div>
			</div>
			<MWLIconSection
				rowData={rowData}
				rainAmount={rainAmount}
				snowAmount={snowAmount}
			/>
			<MWLTempSection rowData={rowData} />
			<div
				className={`${styles["mwl-section"]} ${styles["mwl-section--desc"]}`}
			>
				<div className="owmf-capitalize-first-letter">
					{rowData.weather[0].description}
				</div>
			</div>
			<MWLPrecipitationSection
				rowData={rowData}
				rainAmount={rainAmount}
				snowAmount={snowAmount}
			/>
			<MWLWindSection rowData={rowData} />
			<MWLMiscSection rowData={rowData} />
		</div>
	);
}

export default MainWeatherListEntry;

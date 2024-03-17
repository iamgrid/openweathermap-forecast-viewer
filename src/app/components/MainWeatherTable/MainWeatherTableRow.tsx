import { TOWM2Point5ForecastListEntry } from "@/app/page";
import { useMemo } from "react";
import MWTTempSection from "./MWTTempSection";
import MWTPrecipitationSection from "./MWTPrecipitationSection";
import MWTWindSection from "./MWTWindSection";
import MWTMiscSection from "./MWTMiscSection";
import MWTIconSection from "./MWTIconSection";
// import styles from "./MainWeatherTable.module.css";

interface TMainWeatherTableRowProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MainWeatherTableRow({ rowData }: TMainWeatherTableRowProps) {
	const timeStr = useMemo(() => {
		const currentDate = new Date(rowData.dt * 1000);
		return currentDate.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
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
		<tr key={rowData.dt}>
			<td className="owmf-ta-right">{timeStr}</td>
			<MWTIconSection
				rowData={rowData}
				rainAmount={rainAmount}
				snowAmount={snowAmount}
			/>
			<MWTTempSection rowData={rowData} />
			<td className="owmf-capitalize-first-letter">
				{rowData.weather[0].description}
			</td>
			<MWTPrecipitationSection
				rowData={rowData}
				rainAmount={rainAmount}
				snowAmount={snowAmount}
			/>
			<MWTWindSection rowData={rowData} />
			<MWTMiscSection rowData={rowData} />
		</tr>
	);
}

export default MainWeatherTableRow;

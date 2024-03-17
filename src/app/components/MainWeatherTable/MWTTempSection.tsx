import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "./MainWeatherTable.module.css";
import { roundTemperature } from "@/helpers";

interface TMWTTempSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWTTempSection({ rowData }: TMWTTempSectionProps) {
	return (
		<td className={styles["mwt-section"]}>
			<div className={styles["mwt-section__header"]}>Temperature</div>
			<div className={styles["mwt-section__contents"]}>
				<div className={styles["temp-section__main-temp"]}>
					{roundTemperature(rowData.main.temp)} °C
				</div>
				<div className={styles["temp-section__feels-like-temp"]}>
					Feels like <span>{roundTemperature(rowData.main.feels_like)} °C</span>
				</div>
			</div>
		</td>
	);
}

export default MWTTempSection;

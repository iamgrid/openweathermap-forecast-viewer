import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "../MainWeatherList.module.css";
import { roundTemperature } from "@/helpers";

interface TMWLTempSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWLTempSection({ rowData }: TMWLTempSectionProps) {
	return (
		<div className={`${styles["mwl-section"]} ${styles["mwl-section--temp"]}`}>
			<div className={styles["mwl-section__header"]}>Temperature</div>
			<div className={styles["mwl-section__contents"]}>
				<div className={styles["temp-section__main-temp"]}>
					{roundTemperature(rowData.main.temp)} °C
				</div>
				<div className={styles["temp-section__feels-like-temp"]}>
					Feels like <span>{roundTemperature(rowData.main.feels_like)} °C</span>
				</div>
				<div className={styles["temp-section__desc"]}>
					<div className="owmf-capitalize-first-letter">
						{rowData.weather[0].description}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MWLTempSection;

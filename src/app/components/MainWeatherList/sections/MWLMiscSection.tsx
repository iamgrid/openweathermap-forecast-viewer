import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "../MainWeatherList.module.css";
import { renderWindDirection, roundSpeed } from "@/helpers";

interface TMWLMiscSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWLMiscSection({ rowData }: TMWLMiscSectionProps) {
	return (
		<div
			className={`${styles["mwl-section"]} ${styles["mwl-section--misc"]} ${styles["mwl-section--less-important"]}`}
		>
			<div className={styles["mwl-section__header"]}>Misc.</div>
			<div className={styles["mwl-section__contents"]}>
				<div className={styles["mwl-section__value-w-label"]}>
					Pressure: <span>{rowData.main.pressure} hPa</span>
				</div>
				<div className={styles["mwl-section__value-w-label"]}>
					Humidity: <span>{rowData.main.humidity} %</span>
				</div>
			</div>
		</div>
	);
}

export default MWLMiscSection;

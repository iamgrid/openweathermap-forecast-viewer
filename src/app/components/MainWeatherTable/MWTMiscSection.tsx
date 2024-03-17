import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "./MainWeatherTable.module.css";
import { renderWindDirection, roundSpeed } from "@/helpers";

interface TMWTMiscSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWTMiscSection({ rowData }: TMWTMiscSectionProps) {
	return (
		<td
			className={`${styles["mwt-section"]} ${styles["mwt-section--less-important"]}`}
		>
			<div className={styles["mwt-section__header"]}>Misc.</div>
			<div className={styles["mwt-section__contents"]}>
				<div className={styles["mwt-section__value-w-label"]}>
					Pressure: <span>{rowData.main.pressure} hPa</span>
				</div>
				<div className={styles["mwt-section__value-w-label"]}>
					Humidity: <span>{rowData.main.humidity} %</span>
				</div>
			</div>
		</td>
	);
}

export default MWTMiscSection;

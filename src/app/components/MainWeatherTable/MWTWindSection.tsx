import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "./MainWeatherTable.module.css";
import { renderWindDirection, roundSpeed } from "@/helpers";

interface TMWTWindSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWTWindSection({ rowData }: TMWTWindSectionProps) {
	return (
		<td
			className={`${styles["mwt-section"]} ${styles["mwt-section--less-important"]}`}
		>
			<div className={styles["mwt-section__header"]}>Wind</div>
			<div className={styles["mwt-section__contents"]}>
				<div className={styles["mwt-section__value-w-label"]}>
					Speed: <span>{roundSpeed(rowData.wind.speed * 3.6)} km/h</span>
				</div>
				<div className={styles["mwt-section__value-w-label"]}>
					Direction: <span>{renderWindDirection(rowData.wind.deg)}</span>
				</div>
				<div className={styles["mwt-section__value-w-label"]}>
					Gusts: <span>{roundSpeed(rowData.wind.gust * 3.6)} km/h</span>
				</div>
			</div>
		</td>
	);
}

export default MWTWindSection;

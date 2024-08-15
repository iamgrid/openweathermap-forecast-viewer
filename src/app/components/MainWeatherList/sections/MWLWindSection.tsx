import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "../MainWeatherList.module.css";
import { renderWindDirection, roundSpeed } from "@/helpers";

interface TMWLWindSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
}

function MWLWindSection({ rowData }: TMWLWindSectionProps) {
	return (
		<div
			className={`${styles["mwl-section"]} ${styles["mwl-section--wind"]} ${styles["mwl-section--less-important"]}`}
		>
			<div className={styles["mwl-section__header"]}>Wind</div>
			<div className={styles["mwl-section__contents"]}>
				<div className={styles["mwl-section__value-w-label"]}>
					Speed: <span>{roundSpeed(rowData.wind.speed * 3.6)} km/h</span>
				</div>
				<div className={styles["mwl-section__value-w-label"]}>
					Direction: <span>{renderWindDirection(rowData.wind.deg)}</span>
				</div>
				<div className={styles["mwl-section__value-w-label"]}>
					Gusts: <span>{roundSpeed(rowData.wind.gust * 3.6)} km/h</span>
				</div>
			</div>
		</div>
	);
}

export default MWLWindSection;

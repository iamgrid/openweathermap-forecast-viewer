import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "../MainWeatherList.module.css";

interface TMWLPrecipitationSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
	rainAmount: number;
	snowAmount: number;
}

function MWLPrecipitationSection({
	rowData,
	rainAmount,
	snowAmount,
}: TMWLPrecipitationSectionProps) {
	return (
		<div
			className={`${styles["mwl-section"]} ${styles["mwl-section--precipitation"]}`}
		>
			<div className={styles["mwl-section__header"]}>Precipitation</div>
			<div className={styles["mwl-section__contents"]}>
				<div className={styles["mwl-section__value-w-label"]}>
					Rain:{" "}
					<span className={rainAmount === 0 ? "owmf-na-value" : ""}>
						{rainAmount !== 0 ? `${rainAmount} mm/h` : "-"}
					</span>
				</div>
				<div className={styles["mwl-section__value-w-label"]}>
					Snow:{" "}
					<span className={snowAmount === 0 ? "owmf-na-value" : ""}>
						{snowAmount !== 0 ? `${snowAmount} mm/h` : "-"}
					</span>
				</div>
			</div>
		</div>
	);
}

export default MWLPrecipitationSection;

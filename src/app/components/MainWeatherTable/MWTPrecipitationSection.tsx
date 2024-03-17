import { TOWM2Point5ForecastListEntry } from "@/app/page";
import styles from "./MainWeatherTable.module.css";

interface TMWTPrecipitationSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
	rainAmount: number;
	snowAmount: number;
}

function MWTPrecipitationSection({
	rowData,
	rainAmount,
	snowAmount,
}: TMWTPrecipitationSectionProps) {
	return (
		<td className={styles["mwt-section"]}>
			<div className={styles["mwt-section__header"]}>Precipitation</div>
			<div className={styles["mwt-section__contents"]}>
				<div className={styles["mwt-section__value-w-label"]}>
					Rain:{" "}
					<span className={rainAmount === 0 ? "owmf-na-value" : ""}>
						{rainAmount !== 0 ? `${rainAmount} mm/h` : "-"}
					</span>
				</div>
				<div className={styles["mwt-section__value-w-label"]}>
					Snow:{" "}
					<span className={snowAmount === 0 ? "owmf-na-value" : ""}>
						{snowAmount !== 0 ? `${snowAmount} mm/h` : "-"}
					</span>
				</div>
			</div>
		</td>
	);
}

export default MWTPrecipitationSection;

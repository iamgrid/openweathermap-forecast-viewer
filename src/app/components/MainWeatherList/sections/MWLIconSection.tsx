import { TOWM2Point5ForecastListEntry } from "@/app/page";
import Image from "next/image";
import styles from "../MainWeatherList.module.css";
import {
	// getWeatherIconUrl,
	displayPrecipitation,
	getCustomWeatherIconUrl,
} from "@/helpers";

interface TMWLIconSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
	rainAmount: number;
	snowAmount: number;
}

function MWLIconSection({
	rowData,
	rainAmount,
	snowAmount,
}: TMWLIconSectionProps) {
	const snowClass =
		snowAmount > 0 ? styles["icon-section__precipitation-display--snow"] : "";
	let isNightTime = false;
	if (
		rowData.weather[0] instanceof Object &&
		"icon" in rowData.weather[0] &&
		typeof rowData.weather[0].icon === "string"
	) {
		if (rowData.weather[0].icon.endsWith("n")) {
			isNightTime = true;
		}
	}

	return (
		<div className={`${styles["mwl-section"]} ${styles["mwl-section--icon"]}`}>
			<div className={styles["icon-section__wrapper"]}>
				{/* <div className={styles["icon-section__icon"]}>
				<Image
					alt={rowData.weather[0].description}
					src={getWeatherIconUrl(rowData.weather[0].icon)}
					width={50}
					height={50}
				/>
			</div> */}
				<div
					className={`${styles["icon-section__custom-icon"]} ${
						isNightTime ? styles["icon-section__custom-icon--night"] : ""
					}`}
				>
					<Image
						alt={rowData.weather[0].description}
						src={getCustomWeatherIconUrl(rowData.weather[0].id)}
						width={40}
						height={40}
					/>
				</div>
				<div
					className={`${styles["icon-section__precipitation-display"]} ${
						snowAmount > 0
							? styles["icon-section__precipitation-display--snow"]
							: ""
					}`}
				>
					{displayPrecipitation(rainAmount, snowAmount)}
				</div>
			</div>
		</div>
	);
}

export default MWLIconSection;

import { TOWM2Point5ForecastListEntry } from "@/app/page";
import Image from "next/image";
import styles from "./MainWeatherTable.module.css";
import { getWeatherIconUrl, displayPrecipitation } from "@/helpers";

interface TMWTIconSectionProps {
	rowData: TOWM2Point5ForecastListEntry;
	rainAmount: number;
	snowAmount: number;
}

function MWTIconSection({
	rowData,
	rainAmount,
	snowAmount,
}: TMWTIconSectionProps) {
	return (
		<td>
			<div className={styles["icon-section__icon"]}>
				<Image
					alt={rowData.weather[0].description}
					src={getWeatherIconUrl(rowData.weather[0].icon)}
					width={50}
					height={50}
				/>
			</div>
			<div className={styles["icon-section__precipitation-display"]}>
				{displayPrecipitation(rainAmount, snowAmount)}
			</div>
		</td>
	);
}

export default MWTIconSection;

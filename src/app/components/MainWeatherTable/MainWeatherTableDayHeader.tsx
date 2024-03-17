import styles from "./MainWeatherTable.module.css";

interface TMainWeatherTableDayHeaderProps {
	colSpan: number;
	dayName: string;
}

function MainWeatherTableDayHeader({
	colSpan,
	dayName,
}: TMainWeatherTableDayHeaderProps) {
	return (
		<tr>
			<td colSpan={colSpan} className={styles["day-header"]}>
				{dayName}
			</td>
		</tr>
	);
}

export default MainWeatherTableDayHeader;

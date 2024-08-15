import styles from "./MainWeatherList.module.css";

interface TMainWeatherListDayHeaderProps {
	dayName: string;
}

function MainWeatherListDayHeader({ dayName }: TMainWeatherListDayHeaderProps) {
	return <div className={styles["day-header"]}>{dayName}</div>;
}

export default MainWeatherListDayHeader;

"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { tokens } from "../tokens";
import { defaultCoordinates } from "@/constants";
import MainWeatherTable from "./components/MainWeatherTable/MainWeatherTable";

export interface TOWM2Point5ForecastListEntry {
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		sea_level: number;
		grnd_level: number;
		humidity: number;
		temp_kf: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	clouds: {
		all: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	visibility: number;
	pop: number;
	sys: {
		pod: string;
	};
	dt_txt: string;
	rain: {
		"3h": number;
	};
	snow: {
		"3h": number;
	};
}

export interface TOWM2Point5ForecastCity {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface TOWM2Point5ForecastResponse {
	cod: string;
	list: TOWM2Point5ForecastListEntry[];
	city: TOWM2Point5ForecastCity;
}

export default function Home() {
	const {
		data: weatherData,
		isLoading,
		isError,
		error,
	} = useQuery<TOWM2Point5ForecastResponse>({
		queryKey: ["WEATHER_DATA"],
		queryFn: async () => {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${defaultCoordinates.latitude}&lon=${defaultCoordinates.longitude}&units=metric&appid=${tokens.openWeatherMap}`
			);
			const data = await response.json();
			return data;
		},
	});

	if (isLoading) {
		return <main className={styles["main--loading"]}>Fetching data...</main>;
	}

	if (isError) {
		console.error("Endpoint returned with an error response:", {
			weatherData,
			error,
		});
		return <main className={styles["main--errored"]}>Errored</main>;
	}

	if (!weatherData) {
		return <main className={styles["main--errored"]}>No data</main>;
	}

	return (
		<main className={styles.main}>
			<h1 className={styles["page-header"]}>
				Weather forecast for {weatherData.city.name}, {weatherData.city.country}
			</h1>
			<MainWeatherTable weatherData={weatherData.list} />
		</main>
	);
}

import { basePath } from "./constants";

const CHAR_RAIN = "💧";
const CHAR_SNOW = "❄️";

export function roundTemperature(temperature: number): number {
	return Math.round(temperature);
}

export function roundSpeed(temperature: number): number {
	return Math.round(temperature);
}

export function displayPrecipitation(rain: number, snow: number): string {
	var reply = " ";

	if (rain > 0 && rain <= 2) reply = CHAR_RAIN.repeat(1);
	if (rain > 2 && rain <= 10) reply = CHAR_RAIN.repeat(2);
	if (rain > 10 && rain <= 20) reply = CHAR_RAIN.repeat(3);
	if (rain > 20 && rain <= 30) reply = CHAR_RAIN.repeat(4);
	if (rain > 30) reply = CHAR_RAIN.repeat(5);

	if (snow > 0 && snow <= 2) reply = CHAR_SNOW.repeat(1);
	if (snow > 2 && snow <= 10) reply = CHAR_SNOW.repeat(2);
	if (snow > 10 && snow <= 20) reply = CHAR_SNOW.repeat(3);
	if (snow > 20 && snow <= 30) reply = CHAR_SNOW.repeat(4);
	if (snow > 30) reply = CHAR_SNOW.repeat(5);

	return reply;
}

const customIconsExistFor: number[] = [
	200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311,
	312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600,
	601, 602, 611, 612, 613, 615, 616, 620, 621, 622, 701, 711, 721, 731, 741,
	751, 761, 800, 801, 802, 803, 804,
];

export function getCustomWeatherIconUrl(weatherId: number): string {
	let iconStr: string = "na";
	if (customIconsExistFor.includes(weatherId)) {
		iconStr = String(weatherId);
	}

	return `${basePath}/static/custom_weather_icons/${iconStr}.png`;
}

// export function getWeatherIconUrl(icon: string): string {
// 	return `https://openweathermap.org/img/wn/${icon}.png`;
// }

export function renderWindDirection(deg: number): string {
	if (deg >= 0 && deg < 11.25) {
		return "North";
	} else if (deg >= 12.25 && deg < 33.75) {
		return "North/Northeast";
	} else if (deg >= 33.75 && deg < 56.25) {
		return "Northeast";
	} else if (deg >= 56.25 && deg < 78.75) {
		return "East/Northeast";
	} else if (deg >= 78.75 && deg < 101.25) {
		return "East";
	} else if (deg >= 101.25 && deg < 123.75) {
		return "East/Southeast";
	} else if (deg >= 123.75 && deg < 146.25) {
		return "Southeast";
	} else if (deg >= 146.25 && deg < 168.75) {
		return "South/Southeast";
	} else if (deg >= 168.75 && deg < 191.25) {
		return "South";
	} else if (deg >= 191.25 && deg < 213.75) {
		return "South/Southwest";
	} else if (deg >= 213.75 && deg < 236.25) {
		return "Southwest";
	} else if (deg >= 236.25 && deg < 258.75) {
		return "West/Southwest";
	} else if (deg >= 258.75 && deg < 281.25) {
		return "West";
	} else if (deg >= 281.25 && deg < 303.75) {
		return "West/Northwest";
	} else if (deg >= 303.75 && deg < 326.25) {
		return "Northwest";
	} else if (deg >= 326.25 && deg < 348.75) {
		return "North/Northwest";
	} else {
		return "North";
	}
}

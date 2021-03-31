export function getWeekName(number) {
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            break;
    }
}

export function getIconForWeather(weather) {
    switch (weather) {
        case "Rain":
            return "weather-pouring";
        case "Clouds":
            return "weather-cloudy";
        case "Fog":
            return "weather-fog";
        case "Clear":
            return "white-balance-sunny";
        case "Snow":
            return "snowflake";
        default:
            return "cloud";
    }
}

export function getCorrectDateString(date) {
    let day = date.getUTCDate();
    if (day < 10) {
        day = "0" + day;
    }
    let month = date.getUTCMonth();
    if (month < 10) {
        month = "0" + month;
    }
    let year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
}

export function getCorrectTimeString(date, style) {
    let hours = date.getUTCHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = date.getUTCMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = date.getUTCSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (style == "short") {
        return `${hours}:${minutes}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}
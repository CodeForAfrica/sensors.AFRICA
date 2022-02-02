const HUMIDITY_READING = "humidity";
const TEMPERATURE_READING = "temperature";
const P2_READING = "P2";

const formatAirStats = (data, isPm2 = false) => {
  const formatted = {};
  ["average", "maximum", "minimum"].forEach((stat) => {
    const parsed = Number.parseFloat(data[stat]);
    if (isPm2 && stat === "average") {
      formatted.averageDescription = `measurements not recorded`;
      if (!Number.isNaN(parsed)) {
        let difference = 25.0 - parsed;
        let position = "below";
        if (parsed > 25.0) {
          difference = parsed - 25.0;
          position = "above";
        }
        const percentage = ((difference / 25.0) * 100).toFixed(2);
        formatted.averageDescription = `${percentage}% ${position} the safe level`;
      }
    }
    formatted[stat] = Number.isNaN(parsed) ? "--" : parsed.toFixed(2);
  });
  return formatted;
};

const getFormattedStats = (data, reading) => {
  let statData = {};
  if (data && data.count === 1) {
    statData = data.results[0][reading];
  }
  return formatAirStats(statData, reading === P2_READING);
};

const getFormattedHumidityStats = (data) => {
  return getFormattedStats(data, HUMIDITY_READING);
};

const getFormattedP2Stats = (data) => {
  return getFormattedStats(data, P2_READING);
};

const getFormattedTemperatureStats = (data) => {
  return getFormattedStats(data, TEMPERATURE_READING);
};

const DATE_FMT_OPTIONS = {
  timeZone: "UTC",
  weekday: "short",
  day: "numeric",
  month: "short",
};

const formatWeeklyP2Stats = (data) => {
  const stats = [];
  // Start with the oldest value
  for (let i = data.length - 1; i >= 0; i -= 1) {
    let averagePM = Number.parseFloat(data[i].average);
    if (Number.isNaN(averagePM)) {
      averagePM = 0.0;
    }
    const date = new Date(data[i].start_datetime).toLocaleDateString(
      "en-US",
      DATE_FMT_OPTIONS
    );
    stats.push({ date, averagePM });
  }
  return stats;
};

const getFormattedWeeklyP2Stats = (data) => {
  const statData =
    (data && data.count === 1 && data.results[0][P2_READING]) || [];
  return formatWeeklyP2Stats(statData);
};

const CITIES_LOCATION = {
  nairobi: {
    slug: "nairobi",
    latitude: "-1.2709",
    longitude: "36.8169",
    name: "Nairobi",
    country: "Kenya",
    label: "Nairobi, Kenya",
    zoom: "12",
    center: "-1.2709,36.8169",
    twitterHandle: "@nairobicitygov",
  },
  nakuru: {
    slug: "nakuru",
    latitude: "-0.303099",
    longitude: "36.080025",
    name: "Nakuru",
    country: "Kenya",
    label: "Nakuru, Kenya",
    zoom: "12",
    center: "-0.303099,36.080025",
    twitterHandle: "@nairobicitygov",
  },
  kisumu: {
    slug: "kisumu",
    latitude: "-0.091702",
    longitude: "34.767956",
    name: "Kisumu",
    country: "Kenya",
    label: "Kisumu, Kenya",
    zoom: "12",
    center: "-0.091702,34.767956",
    twitterHandle: "@nairobicitygov",
  },
  lagos: {
    slug: "lagos",
    latitude: "6.4552",
    longitude: "3.4198",
    name: "Lagos",
    country: "Nigeria",
    label: "Lagos, Nigeria",
    zoom: "12",
    center: "6.4552,3.4198",
    twitterHandle: "@followlasg",
  },
  "dar-es-salaam": {
    slug: "dar-es-salaam",
    latitude: "-6.7846",
    longitude: "39.2669",
    name: "Dar es Salaam",
    country: "Tanzania",
    label: "Dar-es-salaam, Tanzania",
    zoom: "12",
    center: "-6.7846,39.2669",
    twitterHandle: "#DarEsSalaam",
  },
};

const API = {
  getAirData(city) {
    return fetch(`https://api.sensors.africa/v2/data/air/?city=${city}`);
  },
  getWeeklyP2Data(city) {
    const fromDate = new Date(Date.now() - 7 * 24 * 3600 * 1000)
      .toISOString()
      .substring(0, 10);
    return fetch(
      `https://api.sensors.africa/v2/data/air/?city=${city}&from=${fromDate}&interval=day&value_type=P2`
    );
  },
};

export {
  CITIES_LOCATION,
  getFormattedHumidityStats,
  getFormattedP2Stats,
  getFormattedTemperatureStats,
  getFormattedWeeklyP2Stats,
};

export default API;

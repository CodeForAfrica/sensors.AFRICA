const formatCurrentP2Stats = (data, isPm2 = false) => {
  const formatted = {};
  ['average', 'maximum', 'minimum'].forEach(stat => {
    const parsed = Number.parseFloat(data[stat]);
    if (isPm2 && stat === 'average') {
      formatted.averageDescription = `measurements not recorded`;
      if (!Number.isNaN(parsed)) {
        let difference = 25.0 - parsed;
        let position = 'below';
        if (parsed > 25.0) {
          difference = parsed - 25.0;
          position = 'above';
        }
        const percentage = ((difference / 25.0) * 100).toFixed(2);
        formatted.averageDescription = `${percentage}% ${position} the safe level`;
      }
    }
    formatted[stat] = Number.isNaN(parsed) ? '--' : parsed.toFixed(2);
  });
  return formatted;
};

const DATE_FMT_OPTIONS = {
  timeZone: 'UTC',
  weekday: 'short',
  day: 'numeric',
  month: 'short'
};

const formatWeeklyP2Stats = data => {
  const stats = [];
  // Start with the oldest value
  for (let i = data.length - 1; i >= 0; i -= 1) {
    let averagePM = Number.parseFloat(data[i].average);
    if (Number.isNaN(averagePM)) {
      averagePM = 0.0;
    }
    const date = new Date(data[i].start_datetime).toLocaleDateString(
      'en-US',
      DATE_FMT_OPTIONS
    );
    stats.push({ date, averagePM });
  }
  return stats;
};

const CITIES_LOCATION = {
  nairobi: {
    latitude: '-1.',
    longitude: '36.',
    name: 'Nairobi',
    country: 'Kenya',
    label: 'Nairobi, Kenya',
    location: '12/-1.2709/36.8169',
    twitterHandle: '@nairobicitygov'
  },
  lagos: {
    latitude: '6.',
    longitude: '3.',
    name: 'Lagos',
    country: 'Nigeria',
    label: 'Lagos, Nigeria',
    location: '12/6.4552/3.4198',
    twitterHandle: '@followlasg'
  },
  'dar-es-salaam': {
    latitude: '-6.',
    longitude: '39.',
    name: 'Dar es Salaam',
    country: 'Tanzania',
    label: 'Dar-es-salaam, Tanzania',
    location: '12/-6.8555/39.1518',
    twitterHandle: '#DarEsSalaam'
  }
};

const API = {
  getCurrentAirData(city, callback) {
    fetch(`https://api.sensors.africa/v2/data/air/?city=${city}`)
      .then(data => data.json())
      .then(json => callback(json));
  },
  getOneWeekAirData(city, callback) {
    const fromDate = new Date(Date.now() - 7 * 24 * 3600 * 1000)
      .toISOString()
      .substr(0, 10);
    fetch(
      `https://api.sensors.africa/v2/data/air/?city=${city}&from=${fromDate}&value_type=P2`
    )
      .then(data => data.json())
      .then(json => callback(json));
  }
};

export { API, formatCurrentP2Stats, formatWeeklyP2Stats, CITIES_LOCATION };

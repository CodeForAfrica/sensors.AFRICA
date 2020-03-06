const URLS = {
  HOME: '/',
  ABOUT: '/about',

  AIR: {
    LOCATE_ME: '/locate-me',
    HOME: '/air',
    ABOUT: '/air/about',
    DATA: '/air/data',
    // Redirect /air/city to /air/city/nairobi
    CITY_HOME: '/air/city',
    CITY_DEFAULT: '/air/city/nairobi',
    CITY: '/air/city/:city(nairobi|dar-es-salaam|lagos)',
    HOW_SENSORS_WORK: '/air/how-sensors-work',
    IMPACT: '/air/health-and-climate-impact',
    JOIN: '/air/join-network'
  },
  WATER: {
    HOME: '/water'
  },
  SOUND: {
    HOME: '/sound'
  },
  NOT_FOUND: '*'
};

export { URLS };

export default [
  {
    url: URLS.HOME,
    title: 'sensors.AFRICA | Home',
    color: 'black'
  },
  {
    url: URLS.ABOUT,
    title: 'sensors.AFRICA | ABOUT',
    color: 'black'
  },
  {
    url: URLS.AIR.DATA,
    title: 'sensors.AFRICA | Air | DATA',
    color: 'green'
  },
  {
    url: URLS.AIR.HOME,
    title: 'sensors.AFRICA | Air | Home',
    color: 'green'
  },
  {
    url: URLS.AIR.ABOUT,
    title: 'sensors.AFRICA | Air | About',
    color: 'green'
  },
  {
    url: URLS.AIR.JOIN,
    title: 'sensors.AFRICA | Air | Join Network',
    color: 'green'
  },
  {
    url: URLS.AIR.HOW_SENSORS_WORK,
    title: 'sensors.AFRICA | Air | How Sensors Work',
    color: 'green'
  },
  {
    url: URLS.AIR.IMPACT,
    title: 'sensors.AFRICA | Air | Health and Climate Impacts',
    color: 'green'
  },
  {
    url: URLS.AIR.CITY,
    title: 'sensors.AFRICA | Air | City',
    color: 'green'
  },
  {
    url: URLS.WATER.HOME,
    title: 'sensors.AFRICA | Water | Coming Soon',
    color: 'blue'
  },
  {
    url: URLS.SOUND.HOME,
    title: 'sensors.AFRICA | Sound | Coming Soon',
    color: 'purple'
  },
  {
    url: URLS.NOT_FOUND,
    title: 'sensors.AFRICA | Page Not Found',
    color: 'black'
  }
];

const URLS = {
  HOME: "/",
  ABOUT: "/about",

  AIR: {
    HOME: "/air",
    ABOUT: "/air/about",
    DATA: "/air/data",
    // Redirect /air/city to /air/city/nairobi
    CITY_HOME: "/air/city",
    CITY_DEFAULT: "/air/city/nairobi",
    CITY_DSM: "/air/city/dar-es-salaam",
    CITY_LAGOS: "/air/city/lagos",
    CITY_NAIROBI: "/air/city/nairobi",
    CITY_NAKURU: "/air/city/nakuru",
    CITY_KISUMU: "/air/city/kisumu",
    HOW_SENSORS_WORK: "/air/how-sensors-work",
    IMPACT: "/air/health-and-climate-impact",
    JOIN: "/air/join-network",
    MONTHLY_REPORT:
      "https://lookerstudio.google.com/u/2/reporting/9ad1ed61-1af5-4828-8cac-cea5cce4ed23/page/Su9vC",
  },
  WATER: {
    HOME: "/water",
  },
  SOUND: {
    HOME: "/sound",
  },
  RADIATION: {
    HOME: "/radiation",
  },
  NOT_FOUND: "*",
};

export { URLS };

export default [
  {
    url: URLS.HOME,
    title: "sensors.AFRICA | Home",
    color: "black",
  },
  {
    url: URLS.ABOUT,
    title: "sensors.AFRICA | ABOUT",
    color: "black",
  },
  {
    url: URLS.AIR.DATA,
    title: "sensors.AFRICA | Air | DATA",
    color: "green",
  },
  {
    url: URLS.AIR.HOME,
    title: "sensors.AFRICA | Air | Home",
    color: "green",
  },
  {
    url: URLS.AIR.ABOUT,
    title: "sensors.AFRICA | Air | About",
    color: "green",
  },
  {
    url: URLS.AIR.JOIN,
    title: "sensors.AFRICA | Air | Join Network",
    color: "green",
  },
  {
    url: URLS.AIR.HOW_SENSORS_WORK,
    title: "sensors.AFRICA | Air | How Sensors Work",
    color: "green",
  },
  {
    url: URLS.AIR.IMPACT,
    title: "sensors.AFRICA | Air | Health and Climate Impacts",
    color: "green",
  },
  {
    url: URLS.AIR.CITY_DSM,
    title: "sensors.AFRICA | Air | Dar es Salaam",
    color: "green",
  },
  {
    url: URLS.AIR.CITY_LAGOS,
    title: "sensors.AFRICA | Air | Lagos",
    color: "green",
  },
  {
    url: URLS.AIR.CITY_NAIROBI,
    title: "sensors.AFRICA | Air | Nairobi",
    color: "green",
  },
  {
    url: URLS.RADIATION.HOME,
    title: "sensors.AFRICA | Radiation | Coming Soon",
    color: "orange",
  },
  {
    url: URLS.SOUND.HOME,
    title: "sensors.AFRICA | Sound | Coming Soon",
    color: "purple",
  },
  {
    url: URLS.WATER.HOME,
    title: "sensors.AFRICA | Water | Coming Soon",
    color: "blue",
  },
  {
    url: URLS.NOT_FOUND,
    title: "sensors.AFRICA | Page Not Found",
    color: "black",
  },
];

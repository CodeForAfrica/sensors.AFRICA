import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Router from 'next/router';

import { Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import API, {
  CITIES_LOCATION,
  formatCurrentP2Stats,
  formatWeeklyP2Stats
} from 'api';

// import DocumentHead from 'components/DocumentHead';
import Navbar from 'components/Header/Navbar';
import PartnerLogos from 'components/PartnerLogos';
import Footer from 'components/Footer';
import SensorMap from 'components/SensorMap';
import CityHeader from 'components/City/Header/CityHeader';
import CallToAction from 'components/City/CallToAction';
import PollutionStats from 'components/City/PollutionStats';
import QualityStats from 'components/City/SensorsQualityStats';
import HostSensorsButton from 'components/City/HostSensors/HostSensorButtons';
import QualityStatsGraph from 'components/City/QualityStatsGraph';

const DEFAULT_CITY = 'nairobi';
const CITIES_POLLUTION_STATS = {
  nairobi: {
    deathCount: '19,112',
    childDeathCount: '6,672',
    topIllness: 'Acute Lower',
    annualAverage: '17',
    percent: '70% more'
  },
  lagos: {
    deathCount: '290,456',
    childDeathCount: '98,001',
    topIllness: 'Lower',
    annualAverage: '122',
    percent: '170% more'
  },
  'dar-es-salaam': {
    deathCount: '41,251',
    childDeathCount: '11,440',
    topIllness: 'Lower',
    annualAverage: '23',
    percent: '130% more'
  }
};
const AQ_COLOR = [
  '#5fbf82',
  '#34b86f',
  '#299a5c',
  '#ce8e4e',
  '#cf7d4e',
  '#d45f4b',
  '#ce4c34',
  '#b72025',
  '#2A2A2B'
];
const DEFAULT_AQ_INDEX = 8;
function aqIndex(aq) {
  if (aq < 10) {
    return 0;
  }
  if (aq < 20) {
    return 1;
  }
  if (aq < 30) {
    return 2;
  }
  if (aq < 40) {
    return 3;
  }
  if (aq < 50) {
    return 4;
  }
  if (aq < 60) {
    return 5;
  }
  if (aq < 120) {
    return 6;
  }
  if (aq <= 150) {
    return 7;
  }
  return 8;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,

    // TODO(kilemensi): This is hack to force the page to be 100% wide w/o
    //                  horizontal scrollbars.
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
  }
});

const AIR_CITY_PATHNAME = '/air/city';

function City({ city: citySlug, data, ...props }) {
  const classes = useStyles(props);
  const [city, setCity] = useState(citySlug);
  const [cityP2Stats, setCityP2Stats] = useState({
    average: '--',
    averageDescription: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [cityP2WeeklyStats, setCityP2WeeklyStats] = useState({});
  const [cityTemperatureStats, setCityTemperatureStats] = useState({});
  const [cityHumidityStats, setCityHumidityStats] = useState({});
  const [aqColor, setAqColor] = useState(AQ_COLOR[DEFAULT_AQ_INDEX]);

  const updateAirQualityStats = json => {
    let updatedCityP2Stats = {};
    let updatedCityTemperatureStats = {};
    let updatedCityHumidityStats = {};
    if (json.count === 1) {
      updatedCityHumidityStats = json.results[0].humidity || {};
      updatedCityTemperatureStats = json.results[0].temperature || {};
      updatedCityP2Stats = json.results[0].P2 || {};
    }
    setCityHumidityStats(formatCurrentP2Stats(updatedCityHumidityStats));
    setCityTemperatureStats(formatCurrentP2Stats(updatedCityTemperatureStats));
    setCityP2Stats(formatCurrentP2Stats(updatedCityP2Stats, true));
  };

  const updateP2IntervalQualityStats = json => {
    let updatedCityP2WeeklyStats = [];
    if (json.count === 1) {
      updatedCityP2WeeklyStats = formatWeeklyP2Stats(json.results[0].P2 || []);
    }
    setCityP2WeeklyStats(updatedCityP2WeeklyStats);
  };

  useEffect(() => {
    const { air, intervalP2 } = data;
    updateAirQualityStats(air);
    updateP2IntervalQualityStats(intervalP2);
  }, [data]);

  useEffect(() => {
    let aqColorIndex = DEFAULT_AQ_INDEX;
    if (cityP2Stats.average !== '--') {
      aqColorIndex = aqIndex(cityP2Stats.average);
    }
    setAqColor([AQ_COLOR[aqColorIndex]]);
  }, [cityP2Stats]);

  // if !data, 404

  const fetchCurrentAirQualityStats = forCity => {
    setCityP2Stats({ average: '--', averageDescription: 'loading' });
    setCityTemperatureStats({});
    setCityHumidityStats({});
    return API.getAirData(forCity).then(updateAirQualityStats);
  };

  const fetchP2IntervalQualityStats = forCity => {
    return API.getP2IntervalData(forCity).then(updateP2IntervalQualityStats);
  };

  const fetchAirQualityStats = forCity => {
    setIsLoading(true);
    fetchCurrentAirQualityStats(forCity)
      .then(() => fetchP2IntervalQualityStats(forCity))
      .then(() => setIsLoading(false));
  };

  const handleSearch = option => {
    const searchedCity = (option && option.value) || DEFAULT_CITY;
    if (searchedCity !== city) {
      setCity(searchedCity);
      const url = `${AIR_CITY_PATHNAME}/[id]`;
      const as = `${AIR_CITY_PATHNAME}/${searchedCity}`;
      Router.push(url, as, { shallow: true });
      fetchAirQualityStats(searchedCity);
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      {/* <DocumentHead url={url} /> */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        {isLoading && <LinearProgress />}

        <CityHeader
          city={CITIES_LOCATION[city]}
          airPol={cityP2Stats.average}
          airPolDescription={cityP2Stats.averageDescription}
          aqColor={aqColor}
          handleSearch={handleSearch}
        />
      </Grid>
      <Grid item xs={12}>
        <HostSensorsButton city={CITIES_LOCATION[city]} />
      </Grid>
      <Grid item xs={12}>
        <PollutionStats
          pollutionStats={CITIES_POLLUTION_STATS[city]}
          city={CITIES_LOCATION[city]}
        />
      </Grid>
      <Grid item xs={12} id="map">
        <SensorMap
          zoom={CITIES_LOCATION[city].zoom}
          latitude={CITIES_LOCATION[city].latitude}
          longitude={CITIES_LOCATION[city].longitude}
        />
      </Grid>
      <Grid item xs={12}>
        <QualityStats
          cityHumidityStats={cityHumidityStats}
          cityP2Stats={cityP2Stats}
          cityTemperatureStats={cityTemperatureStats}
        />
      </Grid>
      <Grid item xs={12}>
        {cityP2WeeklyStats.length && (
          <QualityStatsGraph data={cityP2WeeklyStats} />
        )}
      </Grid>
      <Grid item xs={12}>
        <CallToAction />
      </Grid>
      <Grid item xs={12}>
        <PartnerLogos />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

City.propTypes = {
  city: PropTypes.string,
  data: PropTypes.shape({
    air: PropTypes.shape({}).isRequired,
    intervalP2: PropTypes.shape({}).isRequired
  })
};

City.defaultProps = {
  city: undefined,
  data: undefined
};

export async function getServerSideProps({ params: { id: city } }) {
  // Fetch data from external API
  const air = await API.getAirData(city);
  const intervalP2 = await API.getP2IntervalData(city);
  const data = air && intervalP2 && { air, intervalP2 };

  // Pass data to the page via props
  return { props: { city, data } };
}

export default City;

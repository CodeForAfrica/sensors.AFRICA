import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Router from 'next/router';

import { Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import API, {
  CITIES_LOCATION,
  getFormattedHumidityStats,
  getFormattedP2Stats,
  getFormattedTemperatureStats,
  getFormattedWeeklyP2Stats
} from 'api';

import DocumentHead from 'components/DocumentHead';
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

import NotFound from 'pages/404';

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

function City({ city: citySlug, data, errorCode, ...props }) {
  const classes = useStyles(props);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(citySlug);
  const { air, weeklyP2 } = data;
  const [cityHumidityStats, setCityHumidityStats] = useState(
    getFormattedHumidityStats(air)
  );
  const [cityP2Stats, setCityP2Stats] = useState(getFormattedP2Stats(air));
  const [cityP2WeeklyStats, setCityP2WeeklyStats] = useState(
    getFormattedWeeklyP2Stats(weeklyP2)
  );
  const [cityTemperatureStats, setCityTemperatureStats] = useState(
    getFormattedTemperatureStats(air)
  );

  // if !data, 404
  if (!CITIES_LOCATION[city] || errorCode >= 400) {
    return <NotFound />;
  }

  const getAqColor = () => {
    let aqColorIndex = DEFAULT_AQ_INDEX;
    if (cityP2Stats.average !== '--') {
      aqColorIndex = aqIndex(cityP2Stats.average);
    }
    return [AQ_COLOR[aqColorIndex]];
  };

  useEffect(() => {
    if (isLoading) {
      setCityP2Stats({ average: '--', averageDescription: 'loading' });
      setCityTemperatureStats({});
      setCityHumidityStats({});
      API.getAirData(city)
        .then(res => res.json())
        .then(json => {
          setCityHumidityStats(getFormattedHumidityStats(json));
          setCityP2Stats(getFormattedP2Stats(json));
          setCityTemperatureStats(getFormattedTemperatureStats(json));
        })
        .then(() =>
          API.getWeeklyP2Data(city)
            .then(res => res.json())
            .then(json => setCityP2WeeklyStats(getFormattedWeeklyP2Stats(json)))
        )
        .then(() => setIsLoading(false));
    }
  }, [isLoading]);

  const handleSearch = option => {
    const searchedCity = (option && option.value) || DEFAULT_CITY;
    if (searchedCity !== city) {
      setCity(searchedCity);
      const cityUrl = `${AIR_CITY_PATHNAME}/[id]`;
      const cityAs = `${AIR_CITY_PATHNAME}/${searchedCity}`;
      Router.push(cityUrl, cityAs, { shallow: true });
      setIsLoading(true);
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <DocumentHead url={`${AIR_CITY_PATHNAME}/${city}`} />
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        {isLoading && <LinearProgress />}

        <CityHeader
          city={CITIES_LOCATION[city]}
          airPol={cityP2Stats.average}
          airPolDescription={cityP2Stats.averageDescription}
          aqColor={getAqColor()}
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
    weeklyP2: PropTypes.shape({}).isRequired
  }),
  errorCode: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

City.defaultProps = {
  city: undefined,
  data: undefined,
  errorCode: false
};

export async function getServerSideProps({ params: { id: city } }) {
  // Fetch data from external API
  const airRes = await API.getAirData(city);
  const weeklyP2Res = await API.getWeeklyP2Data(city);
  let errorCode = airRes.statusCode > 200 && airRes.statusCode;
  errorCode =
    !errorCode && weeklyP2Res.statusCode > 200 && weeklyP2Res.statusCode;
  const air = (!errorCode && (await airRes.json())) || {};
  const weeklyP2 = (!errorCode && (await weeklyP2Res.json())) || {};
  const data = { air, weeklyP2 };

  // Pass data to the page via props
  return { props: { errorCode, city, data } };
}

export default City;

import airPollution from '../../assets/images/Showcase/airpollution.jpg';
import sensors from '../../assets/images/Showcase/sensor.png';
import airquality from '../../assets/images/Showcase/airquality.png';
import mediumStory from '../../assets/images/Showcase/sensorMedium.png';
import children from '../../assets/images/Showcase/children.jpg';
import toxic from '../../assets/images/Showcase/toxic.jpg';
import london from '../../assets/images/Showcase/london.jpg';

const data = [
  {
    index: 0,
    image:
      'https://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2018/11/07/1844003.jpg?itok=bR8u_WoP',
    date: '21 Nov 2019',
    title: 'Mukuru fumes put 60 asthma patients a month in hospital',
    body:
      'As we wait to be let into Maendeleo Learning Centre, smoke drifts over from the chimney of a factory next door...',
    link:
      'https://www.the-star.co.ke/news/2018/11/07/mukuru-fumes-put-60-asthma-patients-a-month-in-hospital_c1843071'
  },
  {
    index: 1,
    image:
      'https://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2018/11/07/1601063.jpg?itok=n4FtkFhm',
    date: '21 Nov 2019',
    title: 'We emit no smoke and have Nema approval — factory director',
    body:
      'Mukuru kwa Reuben slum residents have long complained of chest pains and asthma....',
    link:
      'https://www.the-star.co.ke/news/2018/11/07/we-emit-no-smoke-and-have-nema-approval-factory-director_c1846413'
  },
  {
    index: 2,
    image: mediumStory,
    date: '9 May 2018',
    title:
      'Measuring Nairobi’s air quality using locally assembled low-cost sensors',
    body:
      'How low cost sensors are tracking air quality in East Africa’s largest city....',
    link:
      'https://medium.com/code-for-africa/measuring-nairobis-air-quality-using-locally-assembled-low-cost-sensors-94a356885120'
  },
  {
    index: 3,
    image:
      'https://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2018/06/07/1768335.jpg?itok=DjfwMOdN',
    date: 'Jun. 07, 2018',
    title: 'Fumes pupils inhale akin to smoking two cigarettes in a day',
    body:
      'As we wait to be let into Maendeleo Learning Centre, smoke drifts over from the chimney of a factory next door....',
    link:
      'https://www.the-star.co.ke/news/2018/06/07/fumes-pupils-inhale-akin-to-smoking-two-cigarettes-in-a-day_c1768330'
  },
  {
    index: 4,
    image: sensors,
    date: 'Jun 3, 2015',
    title: 'Opening Air Quality Data',
    body:
      'Air pollution is a leading cause of death across the globe, and contributes to stroke, heart disease, lung cancer, and other respiratory illness....',
    link: 'https://medium.com/devseed/opening-up-air-quality-data-ab56fc2099af'
  },
  {
    index: 5,
    image: airPollution,
    date: '9 Jun 2016 ',
    title: 'Air pollution now major contributor to stroke, global study finds',
    body:
      'Scientists say finding is alarming, and shows that harm caused by air pollution to the lungs, heart and brain has been underestimated....',
    link:
      'https://www.theguardian.com/science/2016/jun/09/air-pollution-now-major-contributor-to-stroke?CMP=Share_iOSApp_Other'
  },
  {
    index: 6,
    image:
      'http://www.designindaba.com/sites/default/files/styles/large/public/node/news/22257/gallery/buggyairkit11.jpg?itok=XepjELQt',
    date: '21 Nov 2019',
    title: 'BuggyAir: A mobile air pollution tracker',
    body:
      'This air pollution testing kit helps parents make informed decisions about the type of environments they expose their children to....',
    link:
      'http://www.designindaba.com/articles/creative-work/buggyair-mobile-air-pollution-tracker'
  },
  {
    index: 7,
    image:
      'http://www.niemanlab.org/images/Hindustan-Times-air-quality-map-990x595.png',
    date: 'May 18, 2016',
    title:
      'The Hindustan Times is working to build the definitive online source of real-time air quality in all of India',
    body:
      'In addition to pulling in data from government stations for its map, the organization is deploying and testing its own air quality sensors across the country...',
    link:
      'http://www.niemanlab.org/2016/05/the-hindustan-times-is-working-to-build-the-definitive-online-source-of-real-time-air-quality-in-all-of-india/'
  },
  {
    index: 8,
    image: airquality,
    date: 'September 7, 2016',
    title: 'How important is air quality in cities?',
    body:
      'What is a smart city? Clearly describing a smart city can prove somewhat technical, but its goal is clear: improving the quality of life for its residents through technology...',
    link:
      'https://www.linkedin.com/pulse/how-important-air-quality-cities-ziv-lautman'
  },
  {
    index: 9,
    image:
      'http://media.bizj.us/view/img/3196721/durhamlabsmobileairsensorcreditannielangan.jpg',
    date: 'Jul 15, 2014',
    title: 'City partners with local engineers on air-quality initiative',
    body:
      'When Louisville-Jefferson County Metro Government officials wanted to monitor the air quality across Louisville, it needed a product...',
    link:
      'https://www.the-star.co.ke/news/2018/11/07/mukuru-fumes-put-60-asthma-patients-a-month-in-hospital_c1843071'
  },
  {
    index: 10,
    image: children,
    date: 'Oct 21, 2016',
    title:
      '300 million children live in areas with extreme air pollution, data reveals',
    body:
      'Global study reveals huge number of children breathing toxic fumes more than six times over safe limits, while billions are affected by air pollution that exceeds guidelines...',
    link:
      'https://www.theguardian.com/environment/2016/oct/31/300-million-children-live-in-areas-with-extreme-air-pollution-data-reveals?CMP=Share_iOSApp_Other'
  },
  {
    index: 11,
    image: toxic,
    date: 'Sept 5, 2016',
    title: 'Toxic air pollution particles found in human brains',
    body:
      'Detection of ‘abundant’ magnetite particles raises concerns because of suggested links to Alzheimer’s disease...',
    link:
      'https://www.theguardian.com/environment/2016/sep/05/toxic-air-pollution-particles-found-in-human-brains-links-alzheimers?CMP=Share_iOSApp_Other'
  },
  {
    index: 12,
    image: london,
    date: 'Jul 1, 2016',
    title:
      'Children at nearly 90 London secondary schools exposed to dangerous air pollution',
    body:
      'Children at nearly 90 London secondary schools exposed to dangerous air pollution Westminster, Tower Hamlets and Southwark have highest number of secondaries in breach of legal limits of NO2, new research for the mayor reveals...',
    link:
      'https://www.theguardian.com/environment/2016/jul/01/children-at-nearly-90-london-secondary-schools-exposed-to-dangerous-air-pollution?CMP=Share_iOSApp_Other'
  }
];

export default data;

import {
  latLonToAddress,
  getElevation,
  gsiReverseGeocoder,
} from '../dist/index.modern.mjs';

const run = async () => {
  console.log('Test open reverse geocoder');
  const lat = 34.710896;
  const lon = 137.72594;

  console.log('Test get elevation');
  console.time('getElevation');
  const elevation = await getElevation({
    lat,
    lon,
  });
  console.log(elevation);
  console.timeEnd('getElevation');

  console.time('latLonToAddress');

  const result = await latLonToAddress({
    lat,
    lon,
  });
  console.log(result);
  console.timeEnd('latLonToAddress');

  // gsiReverseGeocoder
  console.log('Test gsi reverse geocoder');
  console.time('gsiReverseGeocoder');
  const gsiResult = await gsiReverseGeocoder({
    lat,
    lon,
  });
  console.log(gsiResult);
  console.timeEnd('gsiReverseGeocoder');
};

run();

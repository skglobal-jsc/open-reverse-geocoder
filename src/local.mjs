import { openReverseGeocoder } from "../dist/index.modern.mjs";

const run = async () => {
  console.log('Test open reverse geocoder');
  console.time('openReverseGeocoder');
  const result = await openReverseGeocoder([139.7673068, 35.6809591])
  console.log(result);
  console.timeEnd('openReverseGeocoder');
};

run();

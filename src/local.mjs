import { openReverseGeocoder } from "../dist/index.modern.mjs";

const run = async () => {
  console.log('Test open reverse geocoder');
  console.time('openReverseGeocoder');
  const result = await openReverseGeocoder([137.725940, 34.710896])
  console.log(result);
  console.timeEnd('openReverseGeocoder');
};

run();

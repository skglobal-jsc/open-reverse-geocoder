import { lngLatToGoogle } from 'global-mercator';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { ReverseGeocodingOptions, ReverseGeocodingResult } from './interfaces';
import countryOptions from './countryOptions';
import { getTile, getTileResult, getCountryCode } from './utils';

type LngLat = [number, number];

const api = setupCache(
  axios.create({
    timeout: 2000,
  }),
  {
    ttl: 60 * 60 * 24 * 1000,
  }
);

const defaultOptions = countryOptions.DEFAULT;

const openReverseGeocoder = async (
  lnglat: LngLat,
  options?: ReverseGeocodingOptions
): Promise<ReverseGeocodingResult> => {
  const opt = { ...defaultOptions, ...options };
  const [x, y] = lngLatToGoogle(lnglat, opt.zoomBase);
  const tile = await getTile(x, y, opt, api);
  return getTileResult(tile, x, y, lnglat, opt);
};

export { openReverseGeocoder };

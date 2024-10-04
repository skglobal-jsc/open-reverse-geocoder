import {
  ReverseGeocodingOptions,
  ReverseGeocodingResultCountry,
  ReverseGeocodingResultJP,
} from './interfaces';

/**
 * vector tiles settings for each country
 */
const countryOptions: { [s: string]: ReverseGeocodingOptions } = {
  JP: {
    zoomBase: 10,
    tileUrl: `https://skglobal-jsc.github.io/open-reverse-geocoder/tiles/{z}/{x}/{y}.pbf`,
    layer: 'japanese-admins',
    getResult: function (feature: GeoJSON.Feature) {
      const res: ReverseGeocodingResultJP = {
        code:
          5 === String(feature.id).length
            ? String(feature.id)
            : `0${String(feature.id)}`,
        prefecture: feature.properties?.prefecture,
        city: feature.properties?.city,
      };
      return res;
    },
  },
};

// default country options
countryOptions.DEFAULT = countryOptions.JP;

export default countryOptions;

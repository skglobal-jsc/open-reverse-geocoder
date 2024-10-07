# @sk-global/open-reverse-geocoder

## Introduction

`@sk-global/open-reverse-geocoder` is a client library for APIs presented by the Geospatial Information Authority of Japan. This library provides functionalities to interact with various geospatial data services.

## Features

- Reverse Geocoding: Convert latitude and longitude to an address.
- Search for a location by address: Search for a location by address.

## Supported APIs

- Geocoding API - `GET https://msearch.gsi.go.jp/address-search/AddressSearch?q=XXXX`
- Reverse Geocoding API - `GET https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=XXXX&lon=XXXX`

## Installation

To install the library, use npm:

```sh
npm install @sk-global/open-reverse-geocoder
```

Ensure you have Node.js version 18.0.0 or higher.

## How to use

Import the library in your project and use the provided functions. Here is an example of how to use the openReverseGeocoder function:

```javascript
import { openReverseGeocoder } from '@sk-global/open-reverse-geocoder';

const lnglat = [139.6917, 35.6895];
const address = await openReverseGeocoder(lnglat);

console.log(address);
// Output:
// { code: '13101', city: 'Chiyoda-ku' }
```

## Examples

### Example 1: Reverse Geocoding

```javascript
import { openReverseGeocoder } from '@sk-global/open-reverse-geocoder';

async function getAddress() {
  const lnglat = [139.6917, 35.6895];
  const address = await openReverseGeocoder(lnglat);

  console.log(address);
  // Output:
  // { code: '13101', city: 'Chiyoda-ku' }
}

getAddress();
```

### Example 2: Search for a location by address

```javascript
import { searchAddress } from '@sk-global/open-reverse-geocoder';

async function searchLocation() {
  const q = '北海道';
  const searchResults = await searchAddress(q);
  console.log(searchResults);

  // Output:
  // [
  //   {
  //     geometry: { coordinates: [Array], type: 'Point' },
  //     type: 'Feature',
  //     properties: { addressCode: '', title: '北海道' }
  //   },
  //   ...
  // ]
}

searchLocation();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

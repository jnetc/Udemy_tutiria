const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
    address
  )}.json?access_token=pk.eyJ1IjoiZXRvam5ldGMiLCJhIjoiY2thZ3VucmV2MGE3bzJ3bnYxNGtoNjF4aiJ9.oQ0jl5CQCPP8r4M8AY1W5g`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

const forecast = (lat, lon, callback) => {
  const coordinates = `${lat}, ${lon}`;
  const url = `http://api.weatherstack.com/current?access_key=879a6092be7cf54e74cc7a146ca549db&query=${encodeURI(
    coordinates
  )}`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degress out. There is a ${body.current.precip}% chance of rain.`
      );
    }
  });
};

module.exports = { geocode, forecast };

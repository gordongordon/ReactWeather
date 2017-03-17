var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=6414fb29b9d79a34f1adc097408763e7&units=imperial";

module.exports = {
  getTemp: function  (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function( res ) {

      if ( res.data.cod && res.data.message ) {
      //  throw new Error(res.data.message);
        throw new Error('Unable to fetch weather for that location.');
      } else {
        return res.data.main.temp;
      }
    }, function( err ) {
//      throw new Error(res.data.message);
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}

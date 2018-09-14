var axios = require('axios');



const OPEN_WEATHER_MAP_URL  = 'https://samples.openweathermap.org/data/2.5/weather?&appid=aa4488bc448c90e3fb1a473bfe73a793';

// aa4488bc448c90e3fb1a473bfe73a793

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
  
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);

    });
  }
}

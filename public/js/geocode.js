const request = require('request')
    const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address +'.json?access_token=pk.eyJ1IjoibmlraGlsLWh1dHV0dSIsImEiOiJjanlpcWgwam8wNHdjM25vNng3ejVrM2M2In0.275wIhXuNU6n4AlyyzzPWw'
    request({ url: url, json: true }, (error, response) => {
        console.log("Response======"+" 111111111 "+response.body)  

    if (error) {
        callback('Unable to connect to location services!', undefined)
    } 
    else if (response.body.features === undefined || response.body.features.length === 0) {
        callback('Unable to find location. Try another search.',undefined)
    }
     else {
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
         })
        }
      })
   }
module.exports = geocode
const request = require('request')
    const forcast = (latitude,longitude,location,callback) => {
      console.log("latitude")  

    const url = 'https://api.darksky.net/forecast/0f9c5e86966e4fbb1b46b12cb9e92492/'+latitude+','+longitude+'?units=si'
    request({ url: url, json: true }, (error, response) => {
        console.log("Response====forcast=="+" 111111111 "+response.body)  

    if (error) {
        callback('Unable to connect to location services!', undefined)
    } 
    else if (response.body === 0) {
        callback('Unable to find Weather. Try another search.',undefined)
    }
     else {
        callback(undefined, {
            Response   : "Success",
            latitude   : latitude,
            longitude  : longitude,
            location   : location,
            summary    : response.body.daily.data[0].summary,
            temperature: response.body.currently.temperature,
            
         })
        }
      })
   }
module.exports = forcast
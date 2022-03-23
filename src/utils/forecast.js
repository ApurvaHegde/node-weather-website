const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2ca602203b691e4dc8351cb78fd98fea&query='+latitude+','+longitude

    request( { url, json: true }, (error, { body }) => {
        if(error) { 
            callback("Unable to connect to weather service", undefined)
        }
        else if (body.error) {
            callback("Unable to find location", callback)
        }
        else {
            // console.log(body)
            callback(undefined, body.current.weather_descriptions+". It is currently "+body.current.temperature+" degrees out. There is a "+body.current.precip+"% chance of rain. The wind direction is: "+ body.current.wind_dir+".")
        }
    } )
}

module.exports = forecast
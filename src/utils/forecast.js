const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = "https://api.darksky.net/forecast/167b7c2802450bc7c2b46d021c432014/37.8267,-122.4233";

    request({ url, json: true}, (error, { body })=>{
        if(error) {
            callback('Unable to connect to location srvices!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search.', undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature +
             ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + 
             body.daily.data[0].temperatureLow + '. There is a  ' +  body.currently.precipProbability + '% chanse of rain. '
            )
        }
    })
   // console.log('Error', error)
    ///console.log('Data', data)
  }

  module.exports = forecast
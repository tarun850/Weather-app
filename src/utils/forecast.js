const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=1e5a06d0a603c133a7992f0cc280af21&query='+latitude+','+longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Weather Description : ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. But it feels like ' + body.current.feelslike + ' degrees out there.')
        }
    })
}

module.exports = forecast
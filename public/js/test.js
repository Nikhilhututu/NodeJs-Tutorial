
// const request = require('request')
// console.log('Starting')
// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)
// console.log('Stopping')
// const URL = "https://api.darksky.net/forecast/0f9c5e86966e4fbb1b46b12cb9e92492/37.8267,-122.4233"
// request({ url: URL,json: true}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log("@@@@@@@@@@@ "+response.body+"   "+data.latitude)
// })
// request({ url: URL, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' +
//     response.body.currently.temperature + ' degrees out. There is a ' +
//     response.body.currently.precipProbability + '% chance of rain.')
// })
const geocode  = require('./geocode')
const forecast = require('./forcast')
    geocode('Madhya Pradesh', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
    forecast(data.latitude, data.longitude, (error, forecastData) =>{
        if(error){
            return console.log(error)         
        } 
         console.log(data.location)        
         console.log(forecastData)     
    })
})

// const name = 'Andrew'
// const userAge = 27
// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// }
// console.log(user)

// const user = {
//     name: 'Andrew',
//     age: 27,
//     location: 'Philadelphia'
//  }
//     // The line below uses destructuring
// const { age, location:address } = user
// console.log(age)
// console.log(address)

// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined,
//     rating: 4.2
//     }
//     const transaction = (type, { label, stock }) => {
//     console.log(type, label, stock)
//     }
// transaction('order', product)



// const https = require('https')
// const url = "https://api.darksky.net/forecast/0f9c5e86966e4fbb1b46b12cb9e92492/37.8267,-122.4233"
// const request = https.request(url, (response) => {
//     let data = '' 
//         response.on('data', (chunk) => { 
//         data = data + chunk.toString()
//         console.log("Nikhllll       "+chunk.toString())    
//     }) 
//      response.on('end', () => {
//         const body = JSON.parse(data) 
//         // console.log(body)    
//      }) 
// }) 
//  request.on('error', (error) => {
//     console.log('An error', error)
//  }) 
// request.end() 




const path     = require('path') 
 const https   = require('https')
const express  = require('express') 
const hbs      = require('hbs') 
const geocode  = require('./geocode')
const forecast = require('./forcast')
const fetch    = require("node-fetch");
const app     = express()
app.set('view engine', 'hbs') 
const publicDirectoryPath = path.join(__dirname, '..') 
console.log("#######   "+publicDirectoryPath);
// app.get('', (req, res) => { 
//       res.send('Hello express!') 
//  }) 
// app.get('/weather', (req, res) => {
//       res.send('Your weather')
//  })

// app.get('', (req, res) => {    
//  res.send('<h1>Weather12</h1>') 
// }) 
// app.get('/weather', (req, res) => {   
//     res.send({forecast: 'It is snowing',
//              location: 'Philadelphia'     
//     }) 
// })


// app.get('/', (req, res) => {
//     res.render('index', {
//     title: 'My title',
//     name: 'Andrew Mead'
//    })
//  })


app.get('/webservice', (req, res) => {  
    geocode(req.query.address,(error, data) =>{
        console.log('Error', error)
        console.log('Data', data)
        if(error === undefined)
          res.send(data) 
        else 
          res.send('Not Found') 
    })
   
 }) 
//  app.get('/webservice2', (req, res) => {  

//     console.log("   4444  "+req.query.greeter+"   "+res)
//     res.send(greeter(req.query.greeter))
//     // geocode(req.query.address,(error, data) =>{
//     //     console.log('Error', error)
//     //     console.log('Data', data)
//     //     if(error === undefined)
//     //       res.send(data) 
//     //     else 
//     //       res.send('Not Found') 
//     // })
   
//  }) 
// app.use(express.static(publicDirectoryPath)) 
app.listen(3000, () =>
{ 
    console.log('Server is up on port 3000.') 
})

// const greeter = (name,age) =>
//  {
//      console.log("Output======== "+name)
//      if(name ==='')
//         return "user"
//      else
//         return name
// }

 fetch('http://localhost:3000/webservice?address=Boston').then((response) => {
    response.json().then((data) => {
    if (data.error) {
      console.log("############"+data.error)
    } else {
      console.log("1111111111"+data.location)
      console.log("222222222"+data.forecast)
    }
    })
})

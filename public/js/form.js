// const testHTML =  `
// <!DOCTYPE html>
// <html>
//     <form>
//         <input placeholder="Location">
//         <button>Search</button>
//     </form>
// </html>
// `;
let testHTML
// const jsdom     = require("jsdom");
// const { JSDOM } = jsdom;
const geocode  = require('./geocode')
const forecast = require('./forcast')
const fetch    = require("node-fetch");
const express  = require('express') 
const path     = require('path') 
const app      = express()
app.listen(3001, () =>
{ 
   console.log('Server is up on port 3001.') 
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,  '../index.html'))
})
app.get('/webservice', (req, res)=>{  
    geocode(req.query.address,(error, data)=>{
        console.log('Error', error)
        console.log('Data', data)

    if(data === undefined)
    {
      res.send({ Response:'Fail'})
      return
    }
    
    forecast(data.latitude, data.longitude, data.location, (error, forecastData) =>{
        if(error){
           return console.log(error)         
        } 
        //  console.log(data.location)        
        //  console.log(forecastData)   
         res.send(forecastData )   
     })
   })
 }) 



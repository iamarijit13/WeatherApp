
request = require('request');
geocode = require('./utils/geocode.js');
weather = require('./utils/weatherInfo.js');

const address = process.argv[2];

if(!address){
    console.log("\n\nPrevide a location name.\n");
}else{
    geocode(address, (error, {longitude, latitude, location}={})=>{
        if(error){
            console.log(error);
        }else{
         const address ={
             longitude,
             latitude
         }
         //weather(address,(error, data)=>{
         weather(address,(error, {day, time, currentTemparature, feelsLike, description, windSpeed, humidity, visibility, pressure}={})=>{
             if(error){
                 console.log(error);
             }else{
     
                 //console.log("\n\nLocation : "+currentLocation+", "+region+", "+country);
                 console.log("\n\nLocation : "+location);
                 console.log("\nLatitude : "+latitude+", Longitude : "+longitude);
                 console.log((day === "yes")? "\nDay / Night : Day" : "\nDay / Night : Night"); 
                 console.log("\nDate and Time : "+time);
                 console.log("\nTemparature : "+currentTemparature+" degree celcious.");
                 console.log("\nFeels Like : "+feelsLike+" degree celcious.");
                 console.log("\nDescription : "+description);
                 console.log("\nWind Speed : "+windSpeed+" km/h.");
                 console.log("\nHumidity : "+humidity+" %");
                 console.log("\nVisibility : "+visibility);
                 console.log("\nWind Pressure : "+pressure);
                 console.log("\n\n");
     
             }
         })
        }
     })
}




//currentTemparature: response.body.current.temperature,
// feelsLike: response.body.current.feelslike,
// currentLocation: response.body.location.name,
// description: response.body.current.weather_descriptions[0],
// windSpeed: response.body.current.wind_speed,
// pressure: response.body.current.pressure,
// humidity: response.body.current.humidity,
// visibility: response.body.current.humidity,
// day: response.body.current.is_day,
// time: response.body.location.localtime,
// country: response.body.location.country,
// region: response.body.location.region
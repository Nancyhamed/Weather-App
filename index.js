const apiKey= "9a562217199fcabe416b754c7224b6aa";
const apiUrl=  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search-part input");
const searchBtn=document.querySelector(".search-part button");
const imgState= document.querySelector(".weather-state");

async function checkWeather(city){
    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data= await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km";

    if(data.weather[0].min==="Clear")
    {
        imgState.src= "images/clear.png";
    }else if (data.weather[0].min==="Clouds")
    {
        imgState.src= "images/clouds.png";
    }else if (data.weather[0].min==="Rain")
    {
        imgState.src= "images/rain.png";
    }else if (data.weather[0].min==="Drizzle")
    {
        imgState.src= "images/Drizzle.png";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
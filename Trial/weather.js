const API_KEY = "cab6fd41dd3ea83e0301e3b73364aaa6"

function Geolo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(Response=>Response.json()).then(data=>{
        const weather = document.querySelector("#weather");
        weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp} 도`;
    })
}

function geoError(){
    alert("Please set your location");
}
navigator.geolocation.getCurrentPosition(Geolo, geoError);
// Weather application project created by Mohammad Afsari

class UI {
    //List elements that will have stuff inserted into it
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.sunset = document.getElementById('w-sunset');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} (Celsius)`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.pressure.textContent = `Relative pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}mph`;
        this.sunset.textContent = getTime(weather.sys.sunset);
    }
}

function getTime(time) {
    let hours = new Date(time).getHours();
    let minutes = new Date(time).getMinutes();
    let suffix = 'AM';

    if(hours > 12 && hours <= 23){
        suffix = "PM";
    }

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    return `Sunset: ${hours}:${minutes}${suffix}`;
}
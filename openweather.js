// Weather application project created by Mohammad Afsari

// API KEY: df4c33c9856adfe81107f30528f0e02a

class Openweather {
    constructor(city, countryCode) {
        this.key = 'df4c33c9856adfe81107f30528f0e02a';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=metric&appid=${this.key}`);

        const responseData = await response.json();
        
        return responseData;
        
    }

        changeLocation(city, countryCode) {
            this.city = city;
            this.countryCode = countryCode;
        }
    }

// Weather application project created by Mohammad Afsari

// Instantiate weather
const weather = new Openweather('Manchester', 'uk');
const ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;

    weather.changeLocation(city, countryCode);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
        .then(data => {
            ui.paint(data);
        })
        .catch(err => console.log(err));
}

# WeatherInsight

This is a weather app that displays the current weather status along with upcoming 5-day forecast. The project is built using HTML, CSS, and JavaScript and is fully responsive.

## Features

- Current weather status: Get the current weather conditions, including temperature, humidity, wind speed, and weather description.
- 5-day forecast: View the weather forecast for the next 5 days, including temperature and weather description for each day.
- Responsive design: The app is optimized to work on different devices and screen sizes, ensuring a seamless user experience.


## Screenshots

![Screenshot 2023-06-19 005149](https://github.com/imSyntn/WeatherInsight/assets/134107725/964a327b-a5f1-4d5e-a9d0-b9535bc0fb4f)
![Screenshot 2023-06-19 005315](https://github.com/imSyntn/WeatherInsight/assets/134107725/153d7dfc-ed6b-4747-bfde-6542a63eddff)


## Installation

To run the weather app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/imSyntn/WeatherInsight.git`
2. Open the index.html file in your preferred web browser.

## API Usage

The Weather App utilizes two APIs to fetch weather data:
- **weatherapi**: Visit [weatherapi.com](https://www.weatherapi.com/) to sign up and obtain an API key. Replace `api_key_current` with your actual API key.
- **tomorrow**: Visit [tomorrow.io](https://www.tomorrow.io/) to sign up and obtain an API key. Replace `api_key_Future` with your actual API key.

```javascript
// Replace 1 and 2 with your actual API key
1. const api_key_current = 'YOUR_API_KEY';
2. const api_key_Future = 'YOUR_API_KEY';
let current_status = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key_current}&q=${search_val}&aqi=yes`); //line 138
let realtime_others = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${search_val}&apikey=${api_key_Future}`, options); //line 142

```
Make sure to configure the APIs correctly to fetch the weather data.

## Contributing

Contributions to the Weather App are welcome! If you have suggestions, bug reports, or want to add new features, feel free to open an issue or submit a pull request.

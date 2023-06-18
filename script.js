let name_picker = prompt("What's your first name?");
document.querySelector(".name").innerText = `${name_picker}`;

let hello = document.querySelector(".hello");
let hour = new Date().getHours();
if (hour>=5 && hour<12) {
    hello.innerHTML = ' morning';
} else if (hour>=12 && hour<18) {
    hello.innerHTML = ' afternoon';
} else if (hour>=18 && hour<22) {
    hello.innerHTML = ' evening';
} else {
    hello.innerHTML = ' night';
};

setInterval(() => {
    let time_print = document.querySelector(".time");
    let time = new Date();
    let twoDigit = time.toLocaleString([], {hour: '2-digit', minute: '2-digit'});
    time_print.innerHTML = `${twoDigit}`;
}, 1000);

let day_print = document.querySelector(".day");
let day = new Date().getDay();
let dayInWord = '';
switch (day) {
    case 1:
        dayInWord = 'Monday';
        break;
    case 2:
        dayInWord = 'Tuesday';
        break;
    case 3:
        dayInWord = 'Wednesday';
        break;
    case 4:
        dayInWord = 'Thursday';
        break;
    case 5:
        dayInWord = 'Friday';
        break;
    case 6:
        dayInWord = 'Saturday';
        break;
    case 0:
        dayInWord = 'Sunday';
        break;

    default:
        dayInWord = 'Unavailable';
        break;
}
day_print.innerHTML = `${dayInWord},`;
 
let date_print = document.querySelector(".date");
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
if (date<10) date = `0${date}`;
if (month<10) month = `0${month}`;
date_print.innerHTML = `${date}-${month}-${year}`;

let date_plus_zero = document.querySelector(".slidebar-date-plus-zero");
let date_plus_one = document.querySelector(".slidebar-date-plus-one");
let date_plus_two = document.querySelector(".slidebar-date-plus-two");
let date_plus_three = document.querySelector(".slidebar-date-plus-three");
let date_plus_four = document.querySelector(".slidebar-date-plus-four");

let date_plus_zero_val = new Date().getDate();
let date_plus_one_val = new Date().getDate() + 1;
let date_plus_two_val = new Date().getDate() + 2;
let date_plus_three_val = new Date().getDate() + 3;
let date_plus_four_val = new Date().getDate() + 4;

date_plus_zero.innerHTML = `${date_plus_zero_val}`;
date_plus_one.innerHTML = `${date_plus_one_val}`;
date_plus_two.innerHTML = `${date_plus_two_val}`;
date_plus_three.innerHTML = `${date_plus_three_val}`;
date_plus_four.innerHTML = `${date_plus_four_val}`;

let slidebar_month_print = document.querySelectorAll(".slidebar-month");
let slidebar_month = new Date().getMonth();
let month_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (let i=0; i<5; i++) {
    slidebar_month_print[i].innerHTML = month_array[slidebar_month];
}

let threeBar = document.getElementById("three-bar");
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let slide_bar = document.querySelector(".left-slidebar")
let day_btn = document.querySelectorAll(".day-btn")
function toggleHide() {
    document.getElementById("three-bar").classList.toggle('active');
    one.classList.toggle('active');
    two.classList.toggle('active');
    three.classList.toggle('active');
    slide_bar.classList.toggle("active");
}

let search = document.getElementById("search-box");
let search_icon = document.getElementById("search-icon");

search.addEventListener('keypress', (event)=> {
    if (event.key == 'Enter') {
        let search_val = search.value;
        console.log(search_val);
        fetchData(search_val);
        containerAnimation();
        let animation_temporary = document.querySelector(".switchAnimation-temporary");
        animation_temporary.style.display = "block";
        animation_temporary.style.zIndex = 1;
        setTimeout(() => {
            animation_temporary.style.display = "none";
            animation_temporary.style.zIndex = 0;
        }, 3000);
    }
})
search_icon.addEventListener("click", ()=> {
        let search_val = search.value;
        console.log(search_val);
        fetchData(search_val);
        containerAnimation();
        let animation_temporary = document.querySelector(".switchAnimation-temporary");
        animation_temporary.style.display = "block";
        animation_temporary.style.zIndex = 1;
        setTimeout(() => {
            animation_temporary.style.display = "none";
            animation_temporary.style.zIndex = 0;
        }, 3000);
});

async function fetchData(search_val) {
    let api_key_current = "19493db597fb4254b30144812231306";
    let api_key_Future = "7ZvZ4ARNH8x3CxNZwW1MYTesVaQbO4Xk";
    document.getElementById("searchedCity").innerHTML = search_val;
    try {
        let current_status = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key_current}&q=${search_val}&aqi=yes`);
        let res_one = await current_status.json();
        console.log(res_one);
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        let realtime_others = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${search_val}&apikey=${api_key_Future}`, options);
        let res_two = await realtime_others.json();
        console.log(res_two);
        fillData_one(res_one, res_two);
    } catch (error) {
        console.log(error);
        alert('Enter a valid location');
    }
}

function fillData_one(res_one, res_two) {
    let conditionImage = document.getElementById("conditionImage");
    let condition = document.querySelector(".condition");
    let temp_c = document.querySelector(".temp-c");
    let temp_f = document.querySelector(".temp-f");
    let feels_like_c = document.querySelector(".feels-like-c");
    let feels_like_f = document.querySelector(".feels-like-f");
    let humidity = document.querySelector(".humidity");
    let wind_kmph = document.querySelector(".wind-kmph");
    let wind_mph = document.querySelector(".wind-mph");
    let wind_dir = document.querySelector(".wind-dir");
    let wind_degree = document.querySelector(".wind-degree");
    let pressure = document.querySelector(".pressure-mb");
    let cloud = document.querySelector(".cloud");
    let uv = document.querySelector(".uv");
    let co = document.querySelector(".co");
    let no2 = document.querySelector(".no2");
    let o3 = document.querySelector(".o3");
    let so2 = document.querySelector(".so2");
    let pm25 = document.querySelector(".pm25");
    let pm10 = document.querySelector(".pm10");

    let temp_max_c = document.querySelector(".temp-max-c");
    let temp_max_f = document.querySelector(".temp-max-f");
    let temp_min_c = document.querySelector(".temp-min-c");
    let temp_min_f = document.querySelector(".temp-min-f");
    let sunrise = document.querySelector(".sunrise");
    let sunset = document.querySelector(".sunset");
    let moonrise = document.querySelector(".moonrise");
    let moonset = document.querySelector(".moonset");
    let rain_intensity = document.querySelector(".rain-intensity");


    let temp_max_c_to_f = Number(((res_two.timelines.daily[0].values.temperatureMax)*9/5)+32).toFixed(2);
    let temp_min_c_to_f = Number(((res_two.timelines.daily[0].values.temperatureMin)*9/5)+32).toFixed(2);

    const timeZone = 'Asia/Kolkata';

    let sunrise_val = new Date(res_two.timelines.daily[0].values.sunriseTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let sunset_val = new Date(res_two.timelines.daily[0].values.sunsetTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let moonrise_val = new Date(res_two.timelines.daily[0].values.moonriseTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let moonset_val = new Date(res_two.timelines.daily[0].values.moonsetTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });

    temp_max_c.innerHTML = `${res_two.timelines.daily[0].values.temperatureMax} &deg;C/`;
    temp_max_f.innerHTML = `${temp_max_c_to_f} &deg;F`;
    temp_min_c.innerHTML = `${res_two.timelines.daily[0].values.temperatureMin} &deg;C/`;
    temp_min_f.innerHTML = `${temp_min_c_to_f} &deg;F`;
    sunrise.innerHTML = sunrise_val;
    sunset.innerHTML = sunset_val;
    moonrise.innerHTML = moonrise_val;
    moonset.innerHTML = moonset_val;
    rain_intensity.innerHTML = res_two.timelines.daily[0].values.rainIntensityAvg;


    conditionImage.src = res_one.current.condition.icon;
    condition.innerHTML = res_one.current.condition.text;
    temp_c.innerHTML = `${res_one.current.temp_c} &deg;C/`;
    temp_f.innerHTML = `${res_one.current.temp_f} &deg;F`;
    feels_like_c.innerHTML = `${res_one.current.feelslike_c} &deg;C/`;
    feels_like_f.innerHTML = `${res_one.current.feelslike_f} &deg;F`;
    humidity.innerHTML = res_one.current.humidity;
    wind_kmph.innerHTML = `${res_one.current.wind_kph}kmph/`;
    wind_mph.innerHTML = `${res_one.current.wind_mph}mph`;
    wind_dir.innerHTML = res_one.current.wind_dir;
    wind_degree.innerHTML = res_one.current.wind_degree;
    pressure.innerHTML = res_one.current.pressure_mb;
    cloud.innerHTML = res_one.current.cloud;
    uv.innerHTML = res_one.current.uv;

    let co_val = `${Number(res_one.current.air_quality.co).toFixed(2)} μg/m3`;
    let no2_val = `${Number(res_one.current.air_quality.no2).toFixed(2)} μg/m3`;
    let o3_val = `${Number(res_one.current.air_quality.o3).toFixed(2)} μg/m3`;
    let so2_val = `${Number(res_one.current.air_quality.so2).toFixed(2)} μg/m3`;
    let pm2_5_val = `${Number(res_one.current.air_quality.pm2_5).toFixed(2)} μg/m3`;
    let pm10_val = `${Number(res_one.current.air_quality.pm10).toFixed(2)} μg/m3`;

    co.innerHTML = co_val;
    no2.innerHTML = no2_val;
    o3.innerHTML = o3_val;
    so2.innerHTML = so2_val;
    pm25.innerHTML = pm2_5_val;
    pm10.innerHTML = pm10_val;
    otherDatesData(res_two);
}

function otherDatesData(res_two) {
    let buttons = document.querySelectorAll(".day-btn");
    for (let i = 0; i < 5; i++) {
    buttons[i].addEventListener('click',() => {
        let btn = document.querySelectorAll(".-btn");
        btn.forEach((button)=>{
            if (button.classList.contains("activeSlidebar")) {
                button.classList.remove("activeSlidebar");
            }
        })
        buttons[i].classList.add("activeSlidebar");        
        let animation = document.querySelector(".switchAnimation");
        animation.classList.add('active');
        setTimeout(() => {
            document.getElementById('other-dates').innerHTML = `${new Date().getDate() + i}, ${month_array[slidebar_month]}` //line 92
            displayOtherDatedata(res_two, i);
            animation.classList.remove('active');
        }, 300);
    
        let resultLeft = document.querySelector(".result-left");
        let resultRight = document.querySelector(".result-right");
    
        if (i>0) {
            setTimeout(() => {
                resultLeft.style.display = 'none';
            }, 300);
            setTimeout(() => {
                resultRight.style.display = 'block';
            }, 300);
        } else {
            setTimeout(() => {
                resultLeft.style.display = 'block';
            }, 300);
            resultRight.style.display = 'none';
        }
    })
    }
}

function displayOtherDatedata(res_two, i) {
    console.log(i);
    let temp_max_c_right = document.querySelector(".temp-max-c-right");
    let temp_max_f_right = document.querySelector(".temp-max-f-right");
    let temp_min_c_right = document.querySelector(".temp-min-c-right");
    let temp_min_f_right = document.querySelector(".temp-min-f-right");
    let sunrise_right = document.querySelector(".sunrise-right");
    let sunset_right = document.querySelector(".sunset-right");
    let moonrise_right = document.querySelector(".moonrise-right");
    let moonset_right = document.querySelector(".moonset-right");
    let rain_intensity_right = document.querySelector(".rain-intensity-right");
    let pressure_right = document.querySelector(".pressure-mb-right");
    let humidity_right = document.querySelector(".humidity-right");
    let cloud_right = document.querySelector(".cloud-right");
    let uv_right = document.querySelector(".uv-right");

    const timeZone = 'Asia/Kolkata';
    
    let temp_max_c_to_f = Number(((res_two.timelines.daily[i].values.temperatureMax)*9/5)+32).toFixed(2);
    let temp_min_c_to_f = Number(((res_two.timelines.daily[i].values.temperatureMin)*9/5)+32).toFixed(2);
    let sunrise_val = new Date(res_two.timelines.daily[i].values.sunriseTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let sunset_val = new Date(res_two.timelines.daily[i].values.sunsetTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let moonrise_val = new Date(res_two.timelines.daily[i].values.moonriseTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });
    let moonset_val = new Date(res_two.timelines.daily[i].values.moonsetTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone });

    temp_max_c_right.innerHTML = `${res_two.timelines.daily[i].values.temperatureMax} &deg;C/`;
    temp_max_f_right.innerHTML = `${temp_max_c_to_f} &deg;F`;
    temp_min_c_right.innerHTML = `${res_two.timelines.daily[i].values.temperatureMin} &deg;C/`;
    temp_min_f_right.innerHTML = `${temp_min_c_to_f} &deg;F`;
    sunrise_right.innerHTML = sunrise_val;
    sunset_right.innerHTML = sunset_val;
    moonrise_right.innerHTML = moonrise_val;
    moonset_right.innerHTML = moonset_val;
    rain_intensity_right.innerHTML = res_two.timelines.daily[i].values.rainIntensityAvg;
    pressure_right.innerHTML = res_two.timelines.daily[i].values.pressureSurfaceLevelAvg;
    humidity_right.innerHTML = res_two.timelines.daily[i].values.humidityAvg;
    cloud_right.innerHTML = res_two.timelines.daily[i].values.cloudCoverAvg;
    uv_right.innerHTML = res_two.timelines.daily[i].values.uvIndexAvg;
}

function containerAnimation() {
    let body = document.querySelector(".body");
    let container = document.querySelector(".container");
    body.classList.add("active");
    container.classList.add("active");
    document.querySelector(".bar-background").style.opacity = 1;
}

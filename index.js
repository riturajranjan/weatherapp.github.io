const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7d005b0bdmsh7daec79c314cf82p13234ejsn64942bee17ea",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeatherdata = (city)=>{   

    cityName.innerHTML = city

    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
        options
)
.then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeatherdata(city.value)
})

getWeatherdata("Muzaffarpur");


const getPatna= ()=>{   

    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna',
        options
)
.then((response) => response.json())
  .then((response) => {
    console.log(response);
    // p_cloud_pct.innerHTML = response.cloud_pct;
    p_temp.innerHTML = response.temp;
    p_feels_like.innerHTML = response.feels_like;
    p_humidity.innerHTML = response.humidity;
    p_min_temp.innerHTML = response.min_temp;
    p_max_temp.innerHTML = response.max_temp;
    p_wind_speed.innerHTML = response.wind_speed;
    p_wind_degrees.innerHTML = response.wind_degrees;
    p_sunrise.innerHTML = response.sunrise;
    p_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getPatna();

const getDelhi= ()=>{   

    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',
        options
)
.then((response) => response.json())
  .then((response) => {
    console.log(response);
    // D_cloud_pct.innerHTML = response.cloud_pct;
    D_temp.innerHTML = response.temp;
    D_feels_like.innerHTML = response.feels_like;
    D_humidity.innerHTML = response.humidity;
    D_min_temp.innerHTML = response.min_temp;
    D_max_temp.innerHTML = response.max_temp;
    D_wind_speed.innerHTML = response.wind_speed;
    D_wind_degrees.innerHTML = response.wind_degrees;
    D_sunrise.innerHTML = response.sunrise;
    D_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getDelhi();


const getMuz= ()=>{   

    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Muzaffarpur',
        options
)
.then((response) => response.json())
  .then((response) => {
    console.log(response);
    // m_cloud_pct.innerHTML = response.cloud_pct;
    m_temp.innerHTML = response.temp;
    m_feels_like.innerHTML = response.feels_like;
    m_humidity.innerHTML = response.humidity;
    m_min_temp.innerHTML = response.min_temp;
    m_max_temp.innerHTML = response.max_temp;
    m_wind_speed.innerHTML = response.wind_speed;
    m_wind_degrees.innerHTML = response.wind_degrees;
    m_sunrise.innerHTML = response.sunrise;
    m_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getMuz();


const getBihar= ()=>{   

    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore',
        options
)
.then((response) => response.json())
  .then((response) => {
    console.log(response);
    // b_cloud_pct.innerHTML = response.cloud_pct;
    b_temp.innerHTML = response.temp;
    b_feels_like.innerHTML = response.feels_like;
    b_humidity.innerHTML = response.humidity;
    b_min_temp.innerHTML = response.min_temp;
    b_max_temp.innerHTML = response.max_temp;
    b_wind_speed.innerHTML = response.wind_speed;
    b_wind_degrees.innerHTML = response.wind_degrees;
    b_sunrise.innerHTML = response.sunrise;
    b_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
getBihar();
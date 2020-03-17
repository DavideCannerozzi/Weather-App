const container = document.getElementById('container')
const getTemp = document.querySelector('.temperature')
const getDescription = document.getElementsByClassName('description')[0]
const getCity = document.getElementsByClassName('city')[0]
const getCountry = document.querySelector('.country')
const getIcon = document.querySelector('.icon')
const getHumidity = document.querySelector('.humidity')
const getDate = document.querySelector('.date')
const getWind = document.querySelector('.wind')
let myDate = moment().format("MMMM D, YYYY hh:mm A")
let lat
let long

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        lat = position.coords.latitude
        long = position.coords.longitude

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1716b6af74413659aba4a82cfc1c92a4`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            getCity.textContent = `${data.name}`
            getCountry.textContent = `${data.sys.country}`
            getDescription.textContent = `${data.weather[0].main}`
            getTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg`
            getIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>` 
            getHumidity.innerHTML = `Humidity: ${data.main.humidity}%`
            getDate.textContent = `${myDate}`
            getWind.textContent = `Wind:${Math.floor(data.wind.speed * 3.6)}km/h`
        })
    })
}


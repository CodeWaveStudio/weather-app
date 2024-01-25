const searchCity=document.getElementById('serch-text');
const searchBtn=document.querySelector('.search-img');
const apikey='0e39cc312a8f946780ae6e6b712c7543';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(searchCity){
    const response=await fetch(apiUrl + searchCity +`&appid=${apikey}`);
    const data=await response.json();
    console.log(data); 

    if(response.status==200){
        if(data.weather[0].main=='Clouds'){
            document.querySelector('.icon-img').src='images/clouds.png'
        }
        else if(data.weather[0].main=='Clear'){
            document.querySelector('.icon-img').src='images/clear.png'
        }
        else if(data.weather[0].main=='Drizzle'){
            document.querySelector('.icon-img').src='images/drizzle.png'
        }
        else if(data.weather[0].main=='Mist'){
            document.querySelector('.icon-img').src='images/mist.png'
        }
        else if(data.weather[0].main=='Smoke'){
            document.querySelector('.icon-img').src='images/clear.png'
        }
        else if(data.weather[0].main=='Rain'){
            document.querySelector('.icon-img').src='images/rain.png'
        }
        else if(data.weather[0].main=='Snow'){
            document.querySelector('.icon-img').src='images/snow.png'
        }
        document.querySelector('.weather h1').innerHTML=data.main.temp + '°C';
        document.querySelector('.weather h2').innerHTML=data.name;
        document.querySelector('.humidity-txt h1').innerHTML=data.main.humidity + '%';
        document.querySelector('.wind-txt h1').innerHTML=data.wind.speed + 'k/hr';
        document.querySelector('.error').style.display='none';
        document.querySelector('.weather').style.display='flex';
    }
    else{
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
}

searchBtn.addEventListener('click',function(){
    checkWeather(searchCity.value);
})
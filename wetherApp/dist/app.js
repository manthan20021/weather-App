


//function for get the weather data on submit event
function getTemp() {
  let apiKey = "48b8dec5955eef20b86f30d21fc25454";
  const city = document.getElementById("locetion").value;
  const mantemp = document.getElementById("tamp");
  const wether = document.getElementById("wether");
  const description = document.getElementById("discription");

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lon={lon}&appid=${apiKey}`
  )
    .then((Response) => Response.json())
    .then((data) => {
      const howWasWether = `${data.list[0].weather[0].main}`;

      mantemp.innerHTML = `${Math.round(data.list[0].main.temp - 273.15)} °`;
      wether.innerHTML = ` ${howWasWether}`;
      description.innerHTML = `The skies will be mostly ${howWasWether}. The high will be ${Math.round(
        data.list[0].main.temp_max - 273.15
      )}°`;
      document.querySelector("#icons").src =
        "https://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        ".png";
      document.getElementById("time").innerHTML = `${data.list[0].dt_txt}`;
      document.getElementById(
        "Wind"
      ).innerHTML = `<h5>wind</h5> ${data.list[0].wind.speed} km/h`;
      document.getElementById(
        "Humidity"
      ).innerHTML = `<h5>Humidity<h5> ${data.list[0].main.humidity}%`;
      document.getElementById(
        "visibility"
      ).innerHTML = `<h5>visibility<h5> ${data.list[0].visibility}m`;
      document.getElementById(
        "pressure"
      ).innerHTML = `<h5>pressure<h5> ${data.list[0].main.pressure}mb`;
      document.getElementById("tem-mini").innerHTML = `${Math.round(
        data.list[0].main.temp - 273.15
      )} °`;
      document.getElementById("cityhed2").innerHTML = city;
      document.getElementById("cityHeding").innerHTML = city;

      for (let i = 0; i < 5; i++) {
        document.getElementById(
          "day" + (i + 1) + "min"
        ).innerHTML = `${Math.round(data.list[i].main.temp_min - 273.15)} °`;
      }

      for (let i = 0; i < 5; i++) {
        document.getElementById(
          "day" + (i + 1) + "max"
        ).innerHTML = `${Math.round(data.list[i].main.temp_max - 273.15)} °`;
      }

      for (let i = 0; i < 5; i++) {
        document.getElementById("fi" + (i + 1)).src =
          "https://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
    })
    .catch((error) => {
      if (city == "") {
        alert("pleases enter the city name");
      } else {
        alert("incorrect City Name plies enter the valid city name");
      }
    });
}


//function for get wether data bydefault, only for location (delhi);

function byDefaultTemp() {
  let apiKey = "48b8dec5955eef20b86f30d21fc25454";
  const city2 = "Delhi";
  const mantemp = document.getElementById("tamp");
  const wether = document.getElementById("wether");
  const description = document.getElementById("discription");
  

  document.getElementById("cityhed2").innerHTML = "Delhi";
  document.getElementById("cityHeding").innerHTML = "Delhi";

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city2}&lon={lon}&appid=${apiKey}`
  )
    .then((Response) => Response.json())
    .then((data) => {
      mantemp.innerHTML = `${Math.round(data.list[0].main.temp - 273.15)} °`;
      wether.innerHTML = `${data.list[0].weather[0].main}`;
      description.innerHTML = `The skies will be mostly ${
        data.list[0].weather[0].main
      }. The high will be ${Math.round(data.list[0].main.temp_max - 273.15)}°`;
      document.querySelector("#icons").src =
        "https://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        ".png";
      document.getElementById("time").innerHTML = `${data.list[0].dt_txt}`;
      document.getElementById(
        "Wind"
      ).innerHTML = `<h5>wind</h5> ${data.list[0].wind.speed} km/h`;
      document.getElementById(
        "Humidity"
      ).innerHTML = `<h5>Humidity<h5> ${data.list[0].main.humidity}%`;
      document.getElementById(
        "visibility"
      ).innerHTML = `<h5>visibility<h5> ${data.list[0].visibility}m`;
      document.getElementById(
        "pressure"
      ).innerHTML = `<h5>pressure<h5> ${data.list[0].main.pressure}mb`;
      document.getElementById("tem-mini").innerHTML = `${Math.round(
        data.list[0].main.temp - 273.15
      )} °`;


      //for the 5 days forecasting.



      //to get the minimum temperature.
       for (let i = 0; i < 5; i++) {
        document.getElementById(
          "day" + (i + 1) + "min"
        ).innerHTML = `${Math.round(data.list[i].main.temp_max - 273.15)}°`;

        }


      

      //to get the maximum temperature.
      for (let i = 0; i < 5; i++) {
        document.getElementById(
          "day" + (i + 1) + "max"
        ).innerHTML = `${Math.round(data.list[i].main.temp_max - 273.15)}°`;
      }

      //to get the img/icon according to current weather.
      for (let i = 0; i < 5; i++) {
        document.getElementById("fi" + (i + 1)).src =
          "https://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
    })
    .catch((error) => {
      alert("please tray aegean");
    });

    //creating the arr to display the "days" for forecasting.
  let wekDays = new Date();
  let dayArr = [
    "sunday",
    "monday",
    "tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


    //function to display the "days" for forecasting.
  function wDays(day) {
    if (day + wekDays.getDay() > 6) {
      return day + wekDays.getDay() - 7;
    } else {
      return day + wekDays.getDay();
    }
  }

  for (let i = 0; i < 5; i++) {
    document.getElementById("t" + (i + 1)).innerHTML = dayArr[wDays(i)];
  }
}


window.addEventListener("load", function () {
  byDefaultTemp();
});


document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  getTemp();
});





// canvas///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// canvas 




    // Sample weather data (you should replace this with actual weather data)
    const weatherData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [
          {
              label: 'Temperature (°C)',
              data: [20,40, 24, 21, 19],
              borderColor: "#13213A",
              borderWidth: 2,
              fill: false,
          },
      ],
  };

  // Get the canvas element and create a chart
  const ctx = document.getElementById('weatherChart').getContext('2d');
  const weatherChart = new Chart(ctx, {
      type: 'line',
      data: weatherData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
      },
  });

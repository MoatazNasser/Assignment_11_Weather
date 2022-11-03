//Test Apis before showing Data
var test1 = false;
var allBody = document.getElementById("allBody");

// Get Background from Api
var bgImg = document.getElementById("mainSec");

// to get todays Names
var today; //
var tomorrow; //
var afterTomorrow; //
var currentHour; //

//input variable
var searchInput = document.getElementById("searchInput");

//------------------------------------------------------
// variables we need from weather Api

var etodayTemp_c = document.getElementById("todayTemp_c"); //
var elocationCountry = document.getElementById("locationCountry"); //
var elocationName = document.getElementById("locationName"); //
var etodayHumidity = document.getElementById("todayHumidity"); //
var etadayWind = document.getElementById("tadayWind"); //
var etadayWindDir = document.getElementById("tadayWindDir"); //
var etodayPicNum = document.getElementById("todayPicNum"); //
var etodayCondition = document.getElementById("todayCondition"); //
var etodayDateFormat = document.getElementById("todayDateFormat"); //
var etodayTimeFormat = document.getElementById("todayTimeFormat"); //
var etomMaxTemp_c = document.getElementById("tomMaxTemp_c"); //
var etomMinTemp_c = document.getElementById("tomMinTemp_c"); //
var etomHumidity = document.getElementById("tomHumidity"); //
var etomWind = document.getElementById("tomWind"); //
var etomPicNum = document.getElementById("tomPicNum"); //
var etomCondition = document.getElementById("tomCondition"); //
var etomDateFormat = document.getElementById("tomDateFormat"); //
var eaftTomMaxTemp_c = document.getElementById("aftTomMaxTemp_c"); //
var eaftTomMinTemp_c = document.getElementById("aftTomMinTemp_c"); //
var eaftTomHumidity = document.getElementById("aftTomHumidity"); //
var eaftTomWind = document.getElementById("aftTomWind"); //
var eaftTomPicNum = document.getElementById("aftTomPicNum"); //
var eaftTomCondition = document.getElementById("aftTomCondition"); //
var eaftTomDateFormat = document.getElementById("aftTomDateFormat"); //
var etoday = document.getElementById("today"); //
var etomorrow = document.getElementById("tomorrow"); //
var eafterTomorrow = document.getElementById("afterTomorrow"); //
//------------------------------------------------
var todayTemp_c; //
var locationCountry; //
var locationName; //
var todayHumidity; //
var tadayWind; //
var tadayWindDir; //
var todayPicNum; //
var todayCondition; //
var todayDateFormat; //
var todayTimeFormat; //
var tomMaxTemp_c; //
var tomMinTemp_c; //
var tomHumidity; //
var tomWind; //
var tomPicNum; //
var tomCondition; //
var tomDateFormat; //
var aftTomMaxTemp_c; //
var aftTomMinTemp_c; //
var aftTomHumidity; //
var aftTomWind; //
var aftTomPicNum; //
var aftTomCondition; //
var aftTomDateFormat; //
//----------------------------------------------

async function getWeatherData(input) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=eddb8e5a9f144f738da220506220311&q=${input}&days=3`
  );
  var weatherData = await response.json();
  var test = JSON.stringify(weatherData);
  // console.log(weatherData);
  // to test Api before showing data
  if (test.includes(`code":1006,"message":"No matching location found.`)) {
    test1 = true;
  }
  todayTemp_c = weatherData.current.temp_c;
  locationCountry = weatherData.location.country;
  locationName = weatherData.location.name;
  todayHumidity = weatherData.current.humidity;
  tadayWind = weatherData.current.wind_kph;
  tadayWindDir = weatherData.current.wind_dir;
  todayPicNum = weatherData.current.condition.icon;
  todayPicNum = todayPicNum.slice(-7, -4);
  todayCondition = weatherData.current.condition.text;
  todayDateFormat = weatherData.current.last_updated;
  todayDateFormat = todayDateFormat.slice(0, -6);
  todayTimeFormat = weatherData.location.localtime;
  todayTimeFormat = todayTimeFormat.slice(11);
  currentHour = todayTimeFormat.slice(-5, -3);
  //-----------------------------------------------------
  // console.log(todayTemp_c);
  // console.log(locationCountry);
  // console.log(locationName);
  // console.log(todayHumidity);
  // console.log(tadayWind);
  // console.log(tadayWindDir);
  // console.log(todayPicNum);
  // console.log(todayCondition);
  // console.log(todayDateFormat);
  // console.log(todayTimeFormat);
  // console.log(currentHour);
  //---------------------------------------------------
  tomMaxTemp_c = weatherData.forecast.forecastday[1].day.maxtemp_c;
  tomMinTemp_c = weatherData.forecast.forecastday[1].day.mintemp_c;
  tomHumidity = weatherData.forecast.forecastday[1].day.avghumidity;
  tomWind = weatherData.forecast.forecastday[1].day.maxwind_kph;
  tomPicNum = weatherData.forecast.forecastday[1].day.condition.icon;
  tomPicNum = tomPicNum.slice(-7, -4);
  tomCondition = weatherData.forecast.forecastday[1].day.condition.text;
  tomDateFormat = weatherData.forecast.forecastday[1].date;
  //-----------------------------------------------------
  // console.log("-------------------");
  // console.log(tomMaxTemp_c);
  // console.log(tomMinTemp_c);
  // console.log(tomHumidity);
  // console.log(tomWind);
  // console.log(tomPicNum);
  // console.log(tomCondition);
  // console.log(tomDateFormat);
  //-----------------------------------------------------
  aftTomMaxTemp_c = weatherData.forecast.forecastday[2].day.maxtemp_c;
  aftTomMinTemp_c = weatherData.forecast.forecastday[2].day.mintemp_c;
  aftTomHumidity = weatherData.forecast.forecastday[2].day.avghumidity;
  aftTomWind = weatherData.forecast.forecastday[2].day.maxwind_kph;
  aftTomPicNum = weatherData.forecast.forecastday[2].day.condition.icon;
  aftTomPicNum = aftTomPicNum.slice(-7, -4);
  aftTomCondition = weatherData.forecast.forecastday[2].day.condition.text;
  aftTomDateFormat = weatherData.forecast.forecastday[2].date;
  //-----------------------------------------------------
  // console.log("-------------------");
  // console.log(aftTomMaxTemp_c);
  // console.log(aftTomMinTemp_c);
  // console.log(aftTomHumidity);
  // console.log(aftTomWind);
  // console.log(aftTomPicNum);
  // console.log(aftTomCondition);
  // console.log(aftTomDateFormat);
  //-----------------------------------------------------
}

//to get pic for every country and search
async function getCountryPic(input) {
  //https://api.unsplash.com/search/photos/?client_id=ydDBJ3beUNAxPlUk215EMPOLVxUuwXqupl18JckELtQ&query=cars
  var response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=ydDBJ3beUNAxPlUk215EMPOLVxUuwXqupl18JckELtQ&query=${input}`
  );
  var picData = await response.json();
  // console.log(picData);
  var test = picData.results.length;
  if (test == 0) {
    console.log("Alert: faild to load background we keep default background");
    return;
  } else {
    bgImg.style.backgroundImage = `url(${picData.results[0].urls.regular})`;
    // console.log(picData.results[0].urls.regular);
  }
}

// te get date data
function setDayName() {
  var dayNum = new Date().getDay();
  // var dayHour = new Date().getHours();
  var days = [
    "Sunday", //0
    "Monday", //1
    "Tuesday", //2
    "Wednesday", //3
    "Thursday", //4
    "Friday", //5
    "Saturday", //6
  ];
  today = days[dayNum];
  if (dayNum == 5) {
    tomorrow = days[dayNum + 1];
    afterTomorrow = days[0];
  } else if (dayNum == 6) {
    tomorrow = days[0];
    afterTomorrow = days[1];
  } else {
    tomorrow = days[dayNum + 1];
    afterTomorrow = days[dayNum + 2];
  }
}

// sequence of running site
async function runSite() {
  await setDayName();
  await getWeatherData("Egypt");
  await getCountryPic("Egypt");
  // if the server down
  if (test1) {
    allBody.innerHTML = `
    <div class=" w-100 bg-dark bg-opacity-75 rounded-5 min-h">
                <p class="text-info fs-2 text-center">Sorry, Server Maybe Down now<br> Try again Later...</p>
            </div>
    `;
  } else {
    // sequence of runing
    displayData();
    searchInput.onkeyup = function f() {
      inputValue = searchInput.value;
      if (inputValue.length < 3) {
        currentInput = "Egypt";
        runagain(currentInput);
        // displayData();
        // console.log("less than 3 " + currentInput);
      } else {
        currentInput = searchInput.value;
        runagain(currentInput);
        // console.log("greater than 3 " + currentInput);
      }
      // console.log(inputValue.length);
    };
    var itemReg = /^.{3,16}$/;
    // add items to local storage
    btnSave.onclick = function () {
      var currentInputValue = searchInput.value;
      var loc = {
        name: currentInputValue,
      };
      if (userArr.length < 10 && itemReg.test(currentInputValue)) {
        userArr.push(loc);
      }
      localStorage.setItem("savedLocation", JSON.stringify(userArr));
      displayLocalStorage();
    };
  }
}
runSite();

var currentInput = "";
var inputValue = "";

// to re retrive data and show it again
async function runagain(input) {
  await getWeatherData(input);
  await getCountryPic(input);
  displayData();
}

// to display data in corrent fields
function displayData() {
  etodayTemp_c.innerText = todayTemp_c; //
  elocationCountry.innerText = locationCountry; //
  elocationName.innerText = locationName; //
  etodayHumidity.innerText = todayHumidity; //
  etadayWind.innerText = tadayWind; //
  etadayWindDir.innerText = tadayWindDir; //

  etodayPicNum.src = `image/weather/64x64/${defineDayorNight()}/${todayPicNum}.png`; //

  etodayCondition.innerText = todayCondition; //
  etodayDateFormat.innerText = todayDateFormat; //
  etodayTimeFormat.innerText = todayTimeFormat; //
  etomMaxTemp_c.innerText = tomMaxTemp_c; //
  etomMinTemp_c.innerText = tomMinTemp_c; //
  etomHumidity.innerText = tomHumidity; //
  etomWind.innerText = tomWind; //
  etomCondition.innerText = tomCondition; //

  etomPicNum.src = `image/weather/64x64/day/${tomPicNum}.png`; //

  etomDateFormat.innerText = tomDateFormat; //
  eaftTomMaxTemp_c.innerText = aftTomMaxTemp_c; //
  eaftTomMinTemp_c.innerText = aftTomMinTemp_c; //
  eaftTomHumidity.innerText = aftTomHumidity; //
  eaftTomWind.innerText = aftTomWind; //

  eaftTomPicNum.src = `image/weather/64x64/day/${aftTomPicNum}.png`; //

  eaftTomCondition.innerText = aftTomCondition; //
  eaftTomDateFormat.innerText = aftTomDateFormat; //

  etoday.innerText = today; //
  etomorrow.innerText = tomorrow; //
  eafterTomorrow.innerText = afterTomorrow; //
}

// to define night or day to get correct condition image
function defineDayorNight() {
  if (currentHour > 17 || currentHour < 5) {
    // console.log("night");
    return "night";
  } else {
    // console.log("day");
    return "day";
  }
}

// to hide and show local storage slide
var slider = document.getElementById("slider");
slider.style.left = "-180px";
slider.onmouseenter = function () {
  slider.style.left = "0%";
};
slider.onmouseleave = function () {
  slider.style.left = "-180px";
};

//---------------------LocalStorage setup-----------------
var userArr = [];
var LS = document.getElementById("LS");
var btnSave = document.getElementById("btnSave");
var closeBtn = document.getElementsByClassName("close");
var getLocalSText = document.getElementsByClassName("getText");
var currentIndex;
var currentText = "";

// to check localstorage
if (JSON.parse(localStorage.getItem("savedLocation")) != null) {
  userArr = JSON.parse(localStorage.getItem("savedLocation"));
  displayLocalStorage();
}

// to get index of row then delete it
slider.addEventListener("click", function (e) {
  // every click we can get element id
  currentIndex = e.target.id;
  // console.log(currentIndex);

  // we have two conditions (delet by clicking close or get text)

  // if user cliicked inside the row not close
  if (!currentIndex.startsWith("C", 0)) {
    // console.log("iamhere");
    // if he clicked on text
    if (currentIndex.startsWith("T", 0)) {
      currentText = e.target.innerText;
      searchInput.value = currentText;
      runagain(currentText);
    }
    // if he clicked inside row but not in text
    else {
      currentTarget = e.target.firstElementChild.id;
      // console.log("iamhere");
      // console.log(currentTarget);
      currentText = e.target.firstElementChild.innerText;
      searchInput.value = currentText;
      runagain(currentText);
    }
  }

  // if he clicked on X to close
  if (currentIndex.startsWith("C", 0)) {
    currentIndex = e.target.id.slice(1);
    deleteFromLocalS(currentIndex);
    displayLocalStorage();
    // console.log(currentIndex);
  }
});

// delete row by index
function deleteFromLocalS(index) {
  userArr.splice(index, 1);
  localStorage.setItem("savedLocation", JSON.stringify(userArr));
}

// to display local storage data
function displayLocalStorage() {
  var temp = `<p class=" mt-2 mb-0 text-center fw-semibold text-light"> 10 slots Available<br><span class="fs-10 text-info">"Type + Press Save"
  </span></p>`;
  if (userArr.length == 0) {
    LS.innerHTML = temp;
    return;
  }
  for (let i = 0; i < userArr.length; i++) {
    temp += `
    <div class="curs col-12  bg-btn  py-2 my-2 rounded-3 animate__animated animate__fadeInDown">
                        <div  class=" d-flex justify-content-between align-items-center">
                            <p id='T${i}' class="getText  p-0 m-0 text-center text-light fw-semibold overflow-hidden">${userArr[i].name}</p>
                            <div id='C${i}'
                                class="close w-small position-absolute floating-C zIndex1 bg-dark bg-opacity-50 p-0 m-0 d-flex justify-content-center align-items-center">
                            </div>
                            <i  class="fa-solid fa-xmark text-light text-opacity-75 fs-5 p-0 me-3"></i>
                        </div>
                    </div>
    `;
    LS.innerHTML = temp;
  }
}

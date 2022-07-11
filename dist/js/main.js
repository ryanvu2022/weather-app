import { setLocationObject } from "./dataFunctions.js"
import { addSpinner, displayError } from "./domFunctions.js"
import CurrentLocation from "./CurrentLocation.js"
const currentLoc = new CurrentLocation()

const initApp = () => {
  // add listeners
  const geoButton = document.getElementById("getLocation")
  geoButton.addEventListener("click", getGeoWeather)

  // set up 

  // load weather
}

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
  if (event) {
    if (event.type === "click") {
      // add spinner
      const mapIcon = document.querySelector(".fa-map-marker-alt")
      addSpinner(mapIcon)
    }
  }
  if (!navigator.geolocation) {
    return geoError();
  }
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}

const geoError = (errObj) => {
  errMsg = errObj ? errObj.message : "Geolocation not supported"
  displayError(errMsg, errMsg)
}

const geoSuccess = (position) => {
  const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    name: `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
  }
  setLocationObject(currentLoc, myCoordsObj)
  updateDataAndDisplay(currentLoc)
}

const updateDataAndDisplay = async (locationObj) => {
  // const weatherJson = await getWeatherFromCoords(locationObj)
  // if (weatherJson) updateDisplay(weatherJson, locationObj)
}
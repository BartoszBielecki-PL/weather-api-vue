<template>
  <the-header title="Weather App Vue"></the-header>
  <find-city></find-city>
  <main>
    <city-weather-info
      v-if="typeof weather.main != 'undefined'"
      :weatherDescription="weatherDescription"
      :cityName="cityName"
      :temperature="weather.main.temp"
      :sunrise="sunrise"
      :sunset="sunset"
    ></city-weather-info>
    <city-search-history
      v-if="historyIsNotEmpty"
      :citySearchHistory="citySearchHistory"
    ></city-search-history>
  </main>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import FindCity from "./components/FindCity.vue";
import CityWeatherInfo from "./components/CityWeatherInfo.vue";
import CitySearchHistory from "./components/CitySearchHistory";

export default {
  components: { TheHeader, FindCity, CityWeatherInfo, CitySearchHistory },
  data() {
    return {
      weather: {},
      cityName: "",
      weatherDescription: "",
      sunrise: "",
      sunset: "",
      citySearchHistory: [],
      historyIsNotEmpty: false,
    };
  },
  provide() {
    return {
      getWeatherParameters: this.getWeatherParameters,
    };
  },
  methods: {
    getWeatherParameters(cityName) {
      const apiKey = "c4c8854fb0426dd04df7f7f0d3bab41c";
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric
    `;
      fetch(API)
        .then((res) => res.json())
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      this.cityName = results.name;
      this.weatherDescription = results.weather.main;
      this.sunrise = new Date(results.sys.sunrise * 1000).toLocaleTimeString();
      this.sunset = new Date(results.sys.sunset * 1000).toLocaleTimeString();
      this.citySearchHistory.unshift(this.cityName);
      console.log(this.citySearchHistory);
      if (this.citySearchHistory.length > 0) {
        this.historyIsNotEmpty = true;
      }
      if (this.citySearchHistory.length > 10) {
        this.citySearchHistory.splice(11, 1);
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
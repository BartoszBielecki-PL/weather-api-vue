<template>
  <base-card>
    <header>
      <h1>{{ cityName }}</h1>
    </header>
    <div class="weatherData">
      <p>Weather Description: {{ weatherDescription }}</p>
      <p>Temperature: {{ temperature }}</p>
      <p>Sunrise: {{ sunrise }}</p>
      <p>Sunset: {{ sunset }}</p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["cityName", "weatherDescription", "temperature", "sunrise", "sunset"],
};
</script>
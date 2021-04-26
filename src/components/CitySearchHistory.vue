<template>
  <base-card>
    <h2>City Search History</h2>
    <ul>
      <li v-for="(city, index) in citySearchHistory" :key="index">
        {{ city }}
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  props: ["citySearchHistory"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
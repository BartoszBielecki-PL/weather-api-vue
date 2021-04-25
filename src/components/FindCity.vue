<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input">
    <template #default>
      <p>Unfortunately, You provided wrong City name.</p>
    </template>
    <template #actions>
      <button @click="confirmError">OK!</button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="cityName">Enter City Name</label>
        <input id="cityName" name="title" type="text" ref="cityNameInput" />
      </div>
      <div>
        <button type="submit">Check The Weather</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["getWeatherParameters"],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredCityName = this.$refs.cityNameInput.value;
      if (enteredCityName) {
        this.getWeatherParameters(enteredCityName);
      } else {
        this.inputIsInvalid = true;
      }
      this.$refs.cityNameInput.value = "";
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

button {
  background-color: white;
  padding: 10px 20px;
  font-family: "Roboto", sans-serif;
  transition: 0.3s;
  border-radius: 12px;
}

button:hover {
  color: white;
  background-color: black;
}
</style>
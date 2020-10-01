<template>
  <q-page class="flex column">
    <div class="col q-pt-lg q-px-md">
      <q-input v-model="search" dark placeholder="Search" borderless>
        <template v-slot:before>
          <q-icon name="my_location" />
        </template>

        <template v-slot:append>
          <q-btn @click="getLocation()" round dense flat icon="search" />
        </template>
      </q-input>
    </div>

    <template v-if="weatherData"
      ><div class="col text-white text-center">
        <div class="text-h4 text-weight-light">Janga</div>
        <div class="text-h6 text-weight-light">Chuvoso</div>
        <div class="text-h1 text-weight-thin">
          <span>8</span> <span>&deg;</span>
        </div>
      </div>

      <div class="col text-center">
        <img src="https://www.fillmurray.com/100/100" alt="Bill" />
      </div>
    </template>

    <template v-else>
      <div class="col column text-center text-white">
        <div class="col text-h2 text-weight-thin">
          Quasar <br />
          Weather
        </div>
        <q-btn @click="getLocation()" class="col" flat>
          <q-icon left size="3em" name="my_location" />
          <div>Label</div>
        </q-btn>
      </div>
    </template>

    <div class="col skyline"></div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: () => ({
    search: "",
    weatherData: false,
    latitude: null,
    longitude: null,
    urlApi: "api.openweathermap.org/data/2.5/weather",
  }),
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("posição: " + position.coords.latitude);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeatherByCoords();
      });
    },
    getWeatherByCoords() {
      this.$axios.get(
        `?lat=${this.latitude}&lon=${this.longitude}&appid=375261709f7e858e5b413ba326b6de0f&units=metric`
      ).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

 <style lang="sass">
.grau
  font-size: 49px
  position: absolute
  margin-top: -11px

.skyline
  flex: 0 0 100px
  background: url(../statics/cidade.png)
  background-size: contain
  background-position: center bottom

.city-img
  width: 100%
  height: 120px
  position: absolute
  bottom: 0
  left: 0
  object-fit: cover

.q-page
  background: linear-gradient(to bottom, #267871, #136a8a)
</style>

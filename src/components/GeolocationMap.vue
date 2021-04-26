<template>
  <base-card>
    <div>
      <p>{{ lat }}</p>
      <p>{{ lon }}</p>
    </div>
    <div>
      <GmapMap
        :center="{ lat: 10, lng: 10 }"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["lat", "lon"],
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 1.38, lng: 103.8 });
    });
  },
};
</script>

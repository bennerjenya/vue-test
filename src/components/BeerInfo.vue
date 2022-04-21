<template>
  <div class="info" v-if="beer">
    <span class="info__title">We recommend</span>
    <span class="info__beer">🍺 {{ beer.brand }}, {{ beer.alcohol }}</span>
    <button @click="getBeer()">Another beer</button>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      beer: null,
    };
  },
  methods: {
    getBeer() {
      api.fetchBeer().then((data) => (this.beer = data));
    },
  },
  mounted() {
    this.getBeer();
  },
};
</script>

<style lang="scss" scoped>
.info {
  min-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 21px;
  }
  &__beer {
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 37px;
  }
}
button {
  width: 221px;
  height: 46px;
  background: #ff5858;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 0 auto;
  outline: 0;
  border: 0;
}
</style>

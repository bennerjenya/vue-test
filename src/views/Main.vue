<template>
  <div class="main">
    <Profile />
    <BeerInfo />
  </div>
</template>

<script>
import BeerInfo from "@/components/BeerInfo.vue";
import Profile from "@/components/Profile.vue";
export default {
  components: {
    BeerInfo,
    Profile,
  },
};
</script>

<style lang="scss" scoped>
.main {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    height: 100vh;
    padding: 82px 24px;
}
</style>

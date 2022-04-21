<template>
  <div class="profile" v-if="user">
    <div class="profile__image">
      <img v-if="user.avatar" :src="user.avatar" alt="" />
      <img v-else :src="require('../assets/no-image.png')" alt="" />
    </div>
    <div class="profile__userInfo">
      <div class="profile__general">
        <span
          >{{ user.first_name }} {{ user.last_name }}, age
          {{ getAge(user.date_of_birth) }}</span
        >
      </div>
      <div class="profile__employe">
        <span>{{ user.employment.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getUser() {
      api.fetchUser().then((data) => (this.user = data));
    },
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  &__image {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: #C4C4C4;
    margin-bottom: 46px;
  }
  &__userInfo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    line-height: 24px;
  }
  &__general {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 9px;
  }
  &__employe {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #9c9c9c;
    margin: 0 auto;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

<template>
  <div class="h-max">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div v-for="img in mainImg" :key="img.id">
        <div>
          <img :src="img.image" alt="image" class="w-100" />
        </div>
        <div v-if="img.display_on" class="container mt-3">
          <p
            class="smalingl-text"
            :class="{
              'f-italic': img.font === 'К',
              'f-bold': img.font === 'Ж',
              'f-bold f-italic': img.font === 'ЖК',
            }"
          >
            {{ img.description_site }}
          </p>
        </div>
      </div>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import FooterRithual from "@/components/FooterRithual.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";

export default {
  name: "HomeView",
  components: {
    FooterRithual,
    HeaderRithual,
  },
  data() {
    return {
      navigator: navigator(),
      mainImg: null,
      navValue: 0,
      namePage: null,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getMainPage().then(() => this.getNamePage());
    },
    async getMainPage() {
      // Get image for main page
      this.mainImg = await fetch(
        `${this.$store.getters.getServerUrl}/main_img/`
      )
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    getNamePage() {
      this.namePage = this.navigator[this.navValue].text;
    },
  },
};
</script>

<style scoped>
</style>
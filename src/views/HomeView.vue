<template>
  <div class="h-max">
    <HeaderRithual :valueNav="navValue" :headerImg="headerImage" />
    <div class="w-100">
      <div v-for="img in mainImg" :key="img.id">
        <div v-if="img.display_on" class="pos_desc_abs container mt-3">
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
        <div>
          <img :src="img.image" alt="image" class="w-100 blur-img" />
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
      headerImage: null,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getMainPage()
        .then(() => this.getNamePage())
        .then(() => this.getHeaderImage());
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
    getHeaderImage() {
      // Return header image
      this.headerImage = this.mainImg[0].header_image;
    },
  },
};
</script>

<style scoped>
</style>
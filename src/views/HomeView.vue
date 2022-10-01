<template>
  <div class="h-max">
    <div class="col-not-reverse" v-if="ifLoad">
      <HeaderRithual :valueNav="navValue" />

      <div class="w-100 bg_gray_gradient pt-3 mb-5">
        <div v-for="img in mainImg" :key="img.id">
          <div v-if="img.display_on" class="bg_block_reverse_double pb-5">
            <div
              class="container lead pd-10"
              :class="{
                'f-italic': img.font === 'К',
                'f-bold': img.font === 'Ж',
                'f-bold f-italic': img.font === 'ЖК',
              }"
            >
              <hr />
              <blockquote class="pb-5 pt-5">
                {{ img.description_site }}
              </blockquote>
              <hr />
            </div>
          </div>
          <div>
            <img :src="img.image" alt="image" class="w-100" />
          </div>
          <div v-if="img.display_on_list" class="bg_block">
            <div
              class="container"
              :class="{
                'f-italic': img.font === 'К',
                'f-bold': img.font === 'Ж',
                'f-bold f-italic': img.font === 'ЖК',
              }"
              v-html="img.header_image"
            ></div>
          </div>
        </div>
      </div>
      <hr />
      <FooterRithual />
    </div>
    <div v-else>
      <SpinnerComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import FooterRithual from "@/components/FooterRithual.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";
import SpinnerComponent from "@/components/spinners/SpinnerComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterRithual,
    HeaderRithual,
    SpinnerComponent,
  },
  data() {
    return {
      navigator: navigator(),
      mainImg: null,
      navValue: 0,
      namePage: null,
      headerImage: null,
      ifLoad: false,
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
        .then(() => this.getHeaderImage())
        .then((this.ifLoad = true));
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
.main-screen__images {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
}
</style>
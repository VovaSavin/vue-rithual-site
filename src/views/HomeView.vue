<template>
  <div class="h-max">
    <div v-if="ifLoad">
      <HeaderRithual :valueNav="navValue" />

      <!-- <div class="w-100">
        <img
          class="w-100 h-25"
          src="https://zakhidritual.com.ua/wp-content/themes/zritual/img/main-screen-image.jpg"
          alt="oo"
        />
        <img
          class="cloud cloud-small w-50"
          src="https://zakhidritual.com.ua/wp-content/themes/zritual/img/cloud-big.png"
          alt="pp"
        />
      </div> -->

      <div class="w-100 bg_gray_gradient pt-3 mb-5">
        <div v-for="img in mainImg" :key="img.id">
          <div v-if="img.display_on" class="bg_block_reverse_double h-500">
            <div
              class="container lead pd-10"
              :class="{
                'f-italic': img.font === 'К',
                'f-bold': img.font === 'Ж',
                'f-bold f-italic': img.font === 'ЖК',
              }"
            >
              <blockquote>
                {{ img.description_site }}
              </blockquote>
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
    doingDuringAnimation() {},
    moveCloud(to) {
      let cloud = document.querySelector(".cloud-small");
      let start = Date.now(); // запомнить время начала

      let timer = setInterval(function () {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 95 * 100) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          return;
        }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);
      }, 20);

      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      let tempPx;
      if (to == "r") {
        tempPx = 15;
      } else if (to == "l") {
        tempPx = -15;
      }
      function draw(timePassed) {
        cloud.style.left = timePassed / tempPx + "px";
      }
    },
  },
};
</script>

<style scoped>
.cloud-small {
  top: 75%;
  left: 10%;
  transition: left 5s cubic-bezier(0, 0, 1, 1);
}
.cloud {
  position: absolute;
}
</style>
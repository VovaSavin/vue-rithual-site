<template>
  <div id="bg_gradient" class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <div v-if="!statusColOrRow" class="bg_gray_gradient_once_about pt-5 w-100">
      <div class="pt-5 mb-5 name_page">
        <h4>
          <b class="space-between-letters">
            {{ namePage }}
          </b>
        </h4>
      </div>
      <div v-for="w in we" :key="w.id" class="col_custom">
        <div
          class="col-6 l-text w-100"
          :class="{ 'align-self-end ': w.id % 2 == 0 }"
        >
          <div class="row w-100 mt-3 mb-3 desc_picture" v-if="w.id % 2 != 0">
            <div class="row width-45 desc_picture_inner">
              <div class="mb-3 text-center">
                <b class="bigger-text">
                  {{ w.name }}
                </b>
              </div>
              <div class="m-auto">
                <p
                  class="lead text_write"
                  :class="{
                    'f-italic': w.font === 'К',
                    'f-bold': w.font === 'Ж',
                    'f-bold f-italic': w.font === 'ЖК',
                  }"
                >
                  {{ w.description }}
                </p>
              </div>
            </div>
            <div class="parent-for-img outer-img w-50">
              <img class="w-img shadow-dr" :src="w.picture" alt="" />
            </div>
          </div>
          <div class="row w-100 mr-0 mt-3 mb-3 desc_picture_2" v-else>
            <div class="parent-for-img-not-rev outer-img w-50">
              <img class="w-img shadow-dr" :src="w.picture" alt="" />
            </div>
            <div class="row width-45-mr desc_picture_inner">
              <div class="mb-3 text-center">
                <b class="bigger-text">
                  {{ w.name }}
                </b>
              </div>
              <div>
                <p
                  class="left-txt lead text_write r-text"
                  :class="{
                    'f-italic': w.font === 'К',
                    'f-bold': w.font === 'Ж',
                    'f-bold f-italic': w.font === 'ЖК',
                  }"
                >
                  {{ w.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <div v-else class="bg_gray_gradient_once_about pt-5 w-100">
      <div class="pt-5 mb-5 name_page">
        <b>
          {{ namePage }}
        </b>
      </div>
      <div v-for="w in we" :key="w.id" class="col">
        <div class="col-6 w-100" :class="{ 'align-self-end ': w.id % 2 == 0 }">
          <div class="col w-100 m-auto desc_picture" v-if="w.id % 2 != 0">
            <div class="row w-100 desc_picture_inner mt-4">
              <div class="mb-3 text-center">
                <b class="bigger-text">
                  {{ w.name }}
                </b>
              </div>
              <div class="m-auto">
                <p
                  class="lead text_write"
                  :class="{
                    'f-italic': w.font === 'К',
                    'f-bold': w.font === 'Ж',
                    'f-bold f-italic': w.font === 'ЖК',
                  }"
                >
                  {{ w.description }}
                </p>
              </div>
            </div>
            <div class="parent-for-img-mobile outer-img">
              <img
                class="w-img-mobile shadow-dr m-2 border-15"
                :src="w.picture"
                alt=""
              />
            </div>
          </div>
          <div class="col w-100 m-auto desc_picture_2" v-else>
            <div class="row w-100 desc_picture_inner mt-4">
              <div class="mb-3 text-center">
                <b class="bigger-text">
                  {{ w.name }}
                </b>
              </div>
              <div>
                <p
                  class="left-txt lead text_write"
                  :class="{
                    'f-italic': w.font === 'К',
                    'f-bold': w.font === 'Ж',
                    'f-bold f-italic': w.font === 'ЖК',
                  }"
                >
                  {{ w.description }}
                </p>
              </div>
            </div>
            <div class="parent-for-img-mobile outer-img">
              <img
                class="w-img-mobile shadow-dr m-2 border-15"
                :src="w.picture"
                alt=""
              />
            </div>
          </div>
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
  name: "ServicesView",
  components: {
    FooterRithual,
    HeaderRithual,
  },
  data() {
    return {
      navigator: navigator(),
      navValue: 3,
      namePage: null,
      we: null,
      statusColOrRow: false,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getAboutUs()
        .then(() => this.getNamePage())
        .then(() => this.runnerListenResizeWindow());
    },
    async runnerListenResizeWindow() {
      // Run listener for resize window
      this.listenResizeWindow();
      this.changeStatusDisplayBlocks();
    },
    listenResizeWindow() {
      // Прослушивает изменение окна браузера
      window.addEventListener("resize", this.changeStatusDisplayBlocks);
    },
    changeStatusDisplayBlocks() {
      // Change statusColOrRow
      let tempSize = document.querySelector("body").offsetWidth;
      if (tempSize < 1000) {
        this.statusColOrRow = true;
      } else {
        this.statusColOrRow = false;
      }
    },
    async getAboutUs() {
      // Get info about owner site
      this.we = await fetch(`${this.$store.getters.getServerUrl}/about/`)
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
.nav-pills {
  --bs-nav-pills-border-radius: 0.375rem;
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #d6d7d8;
}
.show_bl {
  display: block;
}
.border_around {
  border: 1px solid gray;
  border-radius: 7px;
}
.bg_gray {
  background-color: #e6eff8;
}
.pos_absolute {
  position: absolute;
  height: max-content;
  z-index: 999;
}
.a_non_style {
  text-decoration: none !important;
  padding: 1rem;
  color: #444444;
}
.a_non_style:hover {
  color: rgb(197, 156, 81);
}
.border_gr {
  box-shadow: 5px 5px 5px;
  border: 1px solid gray;
  border-radius: 7px;
}
.main_nav {
  font-size: 16px;
  font-weight: 400;
  font-family: "Droid Serif", sans-serif;
  text-transform: uppercase;
  color: #444444;
  cursor: pointer;
}
.w_nav_main {
  width: 203px !important;
  min-width: max-content;
}
.active_main {
  color: rgb(109, 109, 201);
}
</style>

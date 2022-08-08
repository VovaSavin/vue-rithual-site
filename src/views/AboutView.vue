<template>
  <div id="bg_gradient" class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="mb-5 name_page">
        <b>
          {{ namePage }}
        </b>
      </div>
      <div v-for="w in we" :key="w.id" class="col_custom">
        <div
          class="col-6 l-text w-100"
          :class="{ 'align-self-end ': w.id % 2 == 0 }"
        >
          <div class="row mt-3 mb-3 desc_picture" v-if="w.id % 2 != 0">
            <div class="row width-45 desc_picture_inner">
              <div class="mb-3 text-center">
                <b class="bigger-text">
                  {{ w.name }}
                </b>
              </div>
              <div>
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
              <img
                class="pad-2 pad-1 w-img shadow-dr"
                :src="w.picture"
                alt=""
              />
            </div>
          </div>
          <div class="row mt-3 mb-3 desc_picture_2" v-else>
            <div class="outer-img w-50">
              <img class="pad-2 w-img shadow-dr" :src="w.picture" alt="" />
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
        .then(() => this.listenLoad())
        .then(() => this.listenResize());
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
    getSizeBlock() {
      if (
        document.querySelector("#bg_gradient") &&
        document.querySelector("#bg_gradient").offsetWidth < 1020
      ) {
        this.instancesClasses("div.desc_picture", "row", "col-not-reverse");
        this.instancesClasses(
          "div.desc_picture_inner",
          ["width-45", "row"],
          ["w-100", "pad-2"]
        );
        this.instancesClasses("div.desc_picture_2", "row", "col-reverse");
        this.instancesClasses("img.pad-2", "nothing-class", "ml-auto");
        this.instancesClasses("div.outer-img", "w-50", "ml-auto");

        document.querySelector("p.left-txt").classList.remove("r-text");
      } else if (
        document.querySelector("#bg_gradient") &&
        document.querySelector("#bg_gradient").offsetWidth >= 1020
      ) {
        this.instancesClasses("div.desc_picture", "col-not-reverse", "row");
        this.instancesClasses(
          "div.desc_picture_inner",
          ["w-100", "pad-2"],
          ["width-45", "row"]
        );
        this.instancesClasses("div.desc_picture_2", "col-reverse", "row");
        this.instancesClasses("img.pad-2", "ml-auto", "nothing-class");
        this.instancesClasses("div.outer-img", "ml-auto", "w-50");

        document.querySelector("p.left-txt").classList.add("r-text");
      }
    },
    listenResize() {
      window.addEventListener("resize", this.getSizeBlock);
    },
    listenLoad() {
      window.addEventListener("scroll", this.getSizeBlock);
    },
    instancesClasses(querySelectors, removes, adds) {
      // Instance and remove class on selector
      if (typeof removes == "string") {
        document.querySelectorAll(querySelectors).forEach((elem) => {
          elem.classList.remove(removes);
          elem.classList.add(adds);
        });
      } else {
        document.querySelectorAll(querySelectors).forEach((elem) => {
          elem.classList.remove(removes[0], removes[1]);
          elem.classList.add(adds[0], adds[1]);
        });
      }
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

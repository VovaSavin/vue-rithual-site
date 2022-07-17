<template>
  <div class="bg_gray_gradient">
    <header class="d-flex justify-content-center py-3 header-main">
      <ul class="nav">
        <li class="nav-item m-2" v-for="nav in navigator" :key="nav.value">
          <div class="w_nav_main">
            <span
              class="nav-link main_nav border_around"
              :class="{ active_main: nav.value == navValue }"
              @mouseenter="showAndHide(nav.value)"
              @mouseleave="showAndHide(nav.value)"
              @click="goToPage(nav.link)"
            >
              {{ nav.text }}
            </span>
          </div>
          <div
            v-if="nav.value == 1"
            :id="setId(nav.value, 'nav')"
            class="pos_absolute w_nav_main mt-1"
            :class="{ border_gr: show == true, bg_gray: show == true }"
            @mouseenter="show = true"
            @mouseleave="show = false"
          >
            <div>
              <div v-for="serv in rithualServices" :key="serv.id" class="m-1">
                <a href="#" v-if="show" class="a_non_style">
                  {{ serv.name }}
                </a>
              </div>
            </div>
          </div>
          <div
            v-else-if="nav.value == 2"
            class="pos_absolute w_nav_main mt-1"
            :class="{ border_gr: show_2 == true, bg_gray: show_2 == true }"
            @mouseenter="show_2 = true"
            @mouseleave="show_2 = false"
          >
            <div>
              <div v-for="goods in rithualGoods" :key="goods.id" class="m-1">
                <a href="#" v-if="show_2" class="a_non_style">
                  {{ goods.name }}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </header>
    <hr />
    <div class="w-100">
      <div class="mb-3 name_page">
        <b>
          {{ namePage }}
        </b>
      </div>
      <div v-for="w in we" :key="w.id">
        <div class="mb-3">
          <b>
            {{ w.name }}
          </b>
        </div>
        <p class="text_write">
          {{ w.description }}
        </p>
        <hr />
      </div>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import FooterRithual from "@/components/FooterRithual.vue";

export default {
  name: "ServicesView",
  components: {
    FooterRithual,
  },
  data() {
    return {
      navigator: navigator(),
      rithualServices: null,
      rithualGoods: null,
      show: false,
      show_2: false,
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
      this.getServices()
        .then(() => this.getGoods())
        .then(() => this.getAboutUs())
        .then(() => this.getNamePage());
    },
    async getServices() {
      // Get data of rithual services
      this.rithualServices = await fetch(
        `${this.$store.getters.getServerUrl}/rith_services/`
      )
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    async getGoods() {
      // Get data of rithual goods
      this.rithualGoods = await fetch(
        `${this.$store.getters.getServerUrl}/rith_goods/`
      )
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    async getAboutUs() {
      // Get info about owner site
      this.we = await fetch(`${this.$store.getters.getServerUrl}/about/`)
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    setId(vle, text) {
      // Set id for each element
      return text + "_" + vle;
    },
    showAndHide(value) {
      // Show or hide block services or goods
      if (value == 1) {
        this.show = !this.show;
      } else if (value == 2) {
        this.show_2 = !this.show_2;
      }
    },
    goToPage(links) {
      this.$router.push({ name: links });
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

<template>
  <div class="bg_gray_gradient">
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
          class="col-6 l-text width-45"
          :class="{ 'align-self-end ': w.id % 2 == 0 }"
        >
          <div class="mb-3">
            <b>
              {{ w.name }}
            </b>
          </div>
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
      this.getAboutUs().then(() => this.getNamePage());
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

<template>
  <div class="h-100">
    <div v-if="statusSideMenu">
      <SideNavigatorComponent
        :checkSideMenu="showSideMenu"
        :innerSideStatus="statusSideMenu"
      />
      <div class="under-side-border"></div>
    </div>
    <div v-else :class="{ 'pb-3': !statusSideMenu }">
      <div>
        <ContactsView :whoParent="headerComp" />
        <div class="under-side-border"></div>
        <header class="pos_fix d-flex justify-content-center py-3 w-100">
          <ul class="nav_t stick_follow">
            <li
              class="nav-item h-min-c marg-for-head"
              v-for="nav in navigator"
              :key="nav.value"
            >
              <div>
                <div class="w_nav_main">
                  <span
                    class="nav-link main_nav border_around f-bold"
                    :class="{ active_main: nav.value == valueNavigate }"
                    @mouseenter="showAndHide(nav.value)"
                    @mouseleave="showAndHide(nav.value)"
                    @click="goToPage(nav.link, nav.value, valueNavigate)"
                  >
                    {{ nav.text }}
                  </span>
                </div>
                <div
                  v-if="nav.value == 1"
                  :id="setId(nav.value, 'nav')"
                  class="pos_absolute w_nav_main"
                  :class="{ border_gr: show == true, bg_gray: show == true }"
                  @mouseenter="show = true"
                  @mouseleave="show = false"
                >
                  <div>
                    <div
                      v-for="serv in rithualServices"
                      :key="serv.id"
                      @click="getDataAndGoTo(serv.id, 'service')"
                      class="m-1 pointer hov_link_wrapper"
                    >
                      <a
                        href="#"
                        @click="getDataAndGoTo(serv.id, 'service')"
                        v-if="show"
                        class="a_non_style f-decor bigger-text"
                      >
                        {{ serv.name }}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  v-else-if="nav.value == 2"
                  class="pos_absolute w_nav_main"
                  :class="{
                    border_gr: show_2 == true,
                    bg_gray: show_2 == true,
                  }"
                  @mouseenter="show_2 = true"
                  @mouseleave="show_2 = false"
                >
                  <div>
                    <div
                      v-for="goods in rithualGoods"
                      :key="goods.id"
                      class="m-1 pointer hov_link_wrapper"
                    >
                      <a
                        href="#"
                        @click="getDataAndGoTo(goods.id, 'goods')"
                        v-if="show_2"
                        class="a_non_style f-decor bigger-text"
                      >
                        {{ goods.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </header>
        <div class="pos_absolute change_position">
          <p class="f-decor c-white space-between-letters">
            Ритуальні послуги
            <br />
            та
            <br />
            Ритуальні товари
          </p>
        </div>
        <div class="w-100">
          <img
            v-for="head in headerData"
            :key="head.id"
            :src="head.image"
            :alt="head.name"
            class="w-100"
            height="500"
          />
        </div>
        <div class="w-100 h-25 low_display_head_img"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import ContactsView from "./contacts/ContactsView.vue";
import SideNavigatorComponent from "./sideNavigator/SideNavigatorComponent.vue";

export default {
  name: "HeaderRithual",
  components: {
    SideNavigatorComponent,
    ContactsView,
  },
  props: {
    valueNav: Number,
  },
  data() {
    return {
      navigator: navigator(),
      mainImg: null,
      headerData: null,
      rithualServices: null,
      rithualGoods: null,
      show: false,
      show_2: false,
      valueNavigate: this.valueNav,
      myId: this.newId,
      onePositon: null,
      statusSideMenu: false,
      headerComp: "headerComponent",
      statusShowNavigator: false,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getImageHeader()
        .then(() => this.getServices())
        .then(() => this.getGoods())
        .then(() => this.runnerListenResizeWindow());
    },
    async getImageHeader() {
      // Get data of header
      this.headerData = await fetch(
        `${this.$store.getters.getServerUrl}/headers/`
      )
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
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
    goToPage(links, navId, nValue) {
      if (navId != nValue) {
        this.$router.push({ name: links });
      }
    },
    async getDetailData(id, vName) {
      // Get data about service or goods
      if (vName == "service") {
        this.onePositon = await fetch(
          `${this.$store.getters.getServerUrl}/rith_services/${id}`
        )
          .then((response) => response.json())
          .catch(function (error) {
            console.log(error);
          });
      } else if (vName == "goods") {
        this.onePositon = await fetch(
          `${this.$store.getters.getServerUrl}/rith_goods/${id}`
        )
          .then((response) => response.json())
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    async goToDetailService(id, parameter, vName) {
      // Go to detail page
      localStorage.removeItem("detail");
      localStorage.setItem("detail", JSON.stringify(parameter));
      let temp = localStorage.getItem("detail");
      if (this.$route.name != "Detail") {
        this.$router.push({
          name: "Detail",
          params: { id: id, dataDetail: JSON.parse(temp), vueName: vName },
        });
      } else if (this.$route.name == "Detail") {
        this.$router.push({ name: "home" });
        this.$router.push({
          name: "Detail",
          params: { id: id, dataDetail: JSON.parse(temp), vueName: vName },
        });
      }
    },
    async getDataAndGoTo(id, vName) {
      this.getDetailData(id, vName).then(() =>
        this.goToDetailService(id, this.onePositon, vName)
      );
    },
    async runnerListenResizeWindow() {
      // Run listener for resize window
      this.listenResizeWindow();
      this.changeNavigator();
    },
    listenResizeWindow() {
      // Прослушивает изменение окна браузера
      window.addEventListener("resize", this.changeNavigator);
    },
    changeNavigator() {
      // Меняет верхнюю навигацию сайта
      let tempSize = document.querySelector("body").offsetWidth;
      if (tempSize < 830) {
        this.statusSideMenu = true;
      } else {
        this.statusSideMenu = false;
      }
    },
    showSideMenu() {
      // Открывает боковое меню
      if (this.statusSideMenu) {
        this.statusSideMenu = !this.statusSideMenu;
      }
    },
    showOrHideNavigation() {
      this.statusShowNavigator = !this.statusShowNavigator;
    },
  },
};
</script>

<style scoped>
.nav_t {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  height: 100%;
  width: 100%;
}
.back-color {
  background-color: #a1a1a198 !important;
}

.main_indx {
  z-index: 99999;
}
.pad-90 {
  padding-left: 90%;
}

.pad-90-on {
  padding-left: 10%;
}
.pad-t-20 {
  padding-top: 1rem;
}
.nav-pills {
  --bs-nav-pills-border-radius: 0.375rem;
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #d6d7d8;
}
.show_bl {
  display: block;
}
.border_around {
  border: 2px solid #fff;
  border-radius: 7px;
}
.bg_gray {
  background-color: #eff7ff;
}
.pos_stick {
  position: sticky;
  height: max-content;
  top: 5px;
  z-index: 999;
}

.pos_absolute {
  position: absolute;
}

.change_position {
  top: 55%;
  left: 25%;
  z-index: 998;
  font-size: 52px;
}

.a_non_style {
  text-decoration: none !important;
  color: #444444;
}

.border_gr {
  box-shadow: 5px 5px 5px;
  border: 1px solid rgb(255, 254, 254);
  border-radius: 7px;
}
.main_nav {
  font-size: 16px;
  font-weight: 400;
  font-family: "Droid Serif", sans-serif;
  text-transform: uppercase;
  background: white;
  color: rgba(74, 71, 88, 0.836);
  cursor: pointer;
  opacity: 0.7;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.main_nav:hover {
  opacity: 1;
  background: #fff;
}
.border_around:hover {
  border: 2px solid rgb(211, 205, 205);
}

.w_nav_main {
  width: 203px !important;
  min-width: max-content;
}
.active_main {
  color: #2392be;
}

.hov_link_wrapper:hover {
  background-color: white;
  color: rgb(197, 156, 81);
}

.svg-span-header {
  vertical-align: baseline;
}
.low_display_head_img {
  height: 110% !important;
  position: absolute;
  top: 0px;
  z-index: 333;
  background: linear-gradient(
    #ffffff00,
    rgba(255, 255, 255, 0.712),
    #a5d6efe7,
    #a5d6ef,
    #efedf0
  );
}

.change_pos_top {
  top: 75px !important;
}

.change_pos_top_10 {
  top: 2rem !important;
}

.change_pos {
  left: 97%;
}
</style>
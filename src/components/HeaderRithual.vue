<template>
  <div class="pb-3">
    {{ statusSideMenu }}
    <div v-if="statusSideMenu">
      <SideNavigatorComponent :checkSideMenu="showSideMenu" />
    </div>
    <div v-else>
      <div v-for="cnt in contacts" :key="cnt.id" class="pt-1">
        <div v-if="cnt.our_address" class="parent-for-img c-blue">
          <span class="f-bold sm-text">
            {{ cnt.phone }}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-telephone svg-span-header"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            &nbsp;
          </span>
          <span class="f-bold sm-text">
            {{ cnt.our_address }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-geo-alt svg-span-header"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            &nbsp;
          </span>
        </div>
      </div>
      <hr />
      <header class="pos_absolute d-flex justify-content-center py-3 w-100">
        <ul class="nav">
          <li class="nav-item m-2" v-for="nav in navigator" :key="nav.value">
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
              class="pos_absolute w_nav_main mt-1"
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
                    class="a_non_style"
                  >
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
                <div
                  v-for="goods in rithualGoods"
                  :key="goods.id"
                  class="m-1 pointer hov_link_wrapper"
                >
                  <a
                    href="#"
                    @click="getDataAndGoTo(goods.id, 'goods')"
                    v-if="show_2"
                    class="a_non_style"
                  >
                    {{ goods.name }}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </header>
      <div class="w-100">
        <img
          v-for="head in headerData"
          :key="head.id"
          :src="head.image"
          :alt="head.name"
          class="w-100 blur-img"
        />
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import SideNavigatorComponent from "./sideNavigator/SideNavigatorComponent.vue";

export default {
  name: "HeaderRithual",
  components: {
    SideNavigatorComponent,
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
      contacts: JSON.parse(localStorage.getItem("contacts")),
      statusSideMenu: false,
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
      if (tempSize < 685) {
        this.statusSideMenu = true;
      } else {
        this.statusSideMenu = false;
      }
    },
    showSideMenu() {
      // Открывает боковое меню
      console.log("hrlllllll");
      if (this.sideMenu) {
        this.sideMenu = !this.sideMenu;
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
  border: 2px solid #fff;
  border-radius: 7px;
}
.bg_gray {
  background-color: #a8afb6;
}
.pos_absolute {
  position: absolute;
  height: max-content;
  z-index: 999;
}
.a_non_style {
  text-decoration: none !important;
  color: #444444;
}
/* .a_non_style:hover {
  color: rgb(197, 156, 81);
} */
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
  background: rgb(211, 205, 205);
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
/* .hov_link_wrapper {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
} */

.hov_link_wrapper:hover {
  background-color: rgb(204, 202, 202);
  color: rgb(197, 156, 81);
}

.svg-span-header {
  vertical-align: baseline;
}
</style>
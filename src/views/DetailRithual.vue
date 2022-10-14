<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />

    <div class="w-100 pt-4">
      <!-- <div class="pos_desc_abs_detail c-white name_page" v-if="!statusSideMenu">
        <span class="f-decor">
          <h1 class="pointer name_hover">
            {{ chooseData().name }}
          </h1>
        </span>
      </div> -->
      <div class="margin-3">
        <div
          class="pos_desc_abs_detail c-white name_page"
          v-if="!statusSideMenu"
        >
          <span class="f-decor">
            <h1 class="pointer name_hover">
              {{ chooseData().name }}
            </h1>
          </span>
        </div>
        <img
          height="350"
          :src="chooseData().picture"
          :alt="chooseData().picture"
          class="w-100 border-15 margin-t-80"
        />
      </div>
      <div class="m-3">
        <div class="" v-html="chooseData().description"></div>
      </div>
      <section class="pb-3 prices">
        <div class="my-container">
          <div class="row m-0">
            <div class="prices-table">
              <table>
                <tbody>
                  <tr>
                    <td>{{ chooseData().name }}</td>
                    <td>
                      від <b>{{ chooseData().price_of }}</b> грн
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterRithual from "@/components/FooterRithual.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";

export default {
  name: "DetailRithual",
  components: {
    FooterRithual,
    HeaderRithual,
  },
  props: {
    id: Number,
    vueName: String,
    dataDetail: Object,
  },
  data() {
    return {
      navValue: null,
      namePage: null,
      onePositon: this.dataDetail,
      localOnePosition: localStorage.getItem("detail"),
      statusSideMenu: false,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.onePositon = JSON.parse(this.localOnePosition);
      this.runnerListenResizeWindow();
    },
    chooseData() {
      // Choose getter detatil data for goods or service
      window.scrollTo(0, 500);
      if (this.dataDetail) {
        return this.dataDetail;
      } else {
        return this.onePositon;
      }
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
  },
  computed: {},
};
</script>

<style scoped>
.pos_desc_abs,
.pos_desc_abs_detail {
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 20%;
  text-align: right;
  padding: 2rem;
}

.pos_desc_abs_detail,
.pos_desc_abs_detail_mob {
  top: 135%;
  left: 0;
  width: 100% !important;
}

.my-container {
  max-width: 1110px;
  margin: auto;
  padding: 0 15px;
}

.prices-table {
  width: 100%;
}

.prices-table table {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}
.prices-table table tr:nth-child(2n + 1) {
  background: #979797;
}
.prices-table table tr td:first-of-type {
  width: 58%;
  border-right: 1px solid #c4c4c4;
}
.prices-table table td {
  padding: 15px 20px;
}

.margin-t-80 {
  margin-top: 80px;
}

.name_hover:hover {
  font-size: calc(1.675rem + 1.5vw);
  background-color: rgba(129, 129, 129, 0.603);
  border-radius: 15px;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
</style>

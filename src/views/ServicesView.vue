<template>
  <div id="services_vue" class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <div class="bg_gray_gradient_prod_mobile pad-mob-top w-100">
      <div class="row row justify-content-end name_page">
        <div class="col-6 col-switch w-100">
          <h4>
            <b class="space-between-letters">
              {{ namePage }}
            </b>
          </h4>
        </div>
        <div class="col-switch">
          <SwitchButton
            :innerRowOrCol="rowOrCol"
            @checked="rowOrCol = !rowOrCol"
          />
        </div>
      </div>
      <!-- <div :class="{ row: !rowOrCol, 'my-col': rowOrCol }"> -->
      <div v-if="rowOrCol" class="my-col mt-5">
        <div
          v-for="service in rithualServices"
          :key="service.id"
          class="col-4 mb-4 pointer my-min-width"
          :class="{ 'm-my-auto': rowOrCol }"
          @click="getDataAndGoTo(service.id, 'service')"
        >
          <div>
            <img
              :src="service.picture"
              :alt="service.name"
              width="355"
              height="255"
              class="shadow-dr mb-1 border-15"
            />
          </div>
          <div class="">
            <a href="#" class="a_non_style text_write">
              <b class="bigger-text">
                {{ service.name }}
              </b>
            </a>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        v-else
        id="carouselExampleControls"
        class="bg_gray_gradient_prod_mobile carousel slide height-500"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner height-500">
          <div v-for="service in rithualServices" :key="service.id">
            <div
              class="carousel-item height-500 mt-5"
              :class="{
                active: service.id == someNumber,
                '': service.id != someNumber,
              }"
            >
              <div class="w-100 h-100">
                <div
                  class="
                    services__button
                    d-flex
                    align-center align-middle
                    border-15
                  "
                >
                  <a
                    href="#"
                    class="btn btn-white w-for-button"
                    @click="getDataAndGoTo(service.id, 'service')"
                  >
                    Дізнатися більше
                  </a>
                </div>
              </div>
              <div class="height-300">
                <img
                  :src="service.picture"
                  class="
                    d-block
                    w-75
                    ml-auto
                    mr-auto
                    border-15
                    padding-50
                    height-300
                    services__image
                    shadow-dr
                  "
                  :alt="service.name"
                  width="355"
                  height="255"
                />
              </div>
              <div class="goods_title pointer goods_visibility d-line-wrap">
                <h3
                  class="col-switch heading-3 w-100 d-line"
                  @click="getDataAndGoTo(service.id, 'service')"
                >
                  {{ service.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator, addSeparatorSpace } from "@/assets/data";
import FooterRithual from "@/components/FooterRithual.vue";
import SwitchButton from "@/components/SwitchButton.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";

export default {
  name: "ServicesView",
  components: {
    FooterRithual,
    SwitchButton,
    HeaderRithual,
  },
  data() {
    return {
      navigator: navigator(),
      rithualServices: null,
      navValue: 1,
      namePage: null,
      rowOrCol: null,
      onePositon: null,
      someNumber: 1,
      lenListRithual: null,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getServices()
        .then(() => this.getNamePage())
        .then(() => this.getLength(this.rithualServices));
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
    getNamePage() {
      this.namePage = this.navigator[this.navValue].text;
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
    getLength(list) {
      // Get length list
      this.lenListRithual = list.length;
    },
  },
};
</script>

<style scoped>
.a_non_style {
  text-decoration: none !important;
  padding: 1rem;
  color: #444444;
}
.a_non_style:hover {
  color: #2392be;
}
.wid-500 {
  height: 450px;
}

.goods_visibility {
  opacity: 0.6;
}

.goods_visibility:hover {
  opacity: 1;
}

.heading-3 {
  font-size: 30px;
  font-size: calc(22px + (30 - 22) * ((100vw - 300px) / (1900 - 300)));
  line-height: 1.3;
  font-family: PlayfairDisplay, sans-serif !important;
}

.services__image::before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.height-500 {
  min-height: 500px;
}

.height-300 {
  min-height: 350px;
}

.padding-50 {
  margin-top: 5rem;
}

.d-line-wrap {
  display: flex;
  flex-direction: column-reverse;
}

.services__button {
  position: absolute;
  left: 12.5%;
  top: 16%;
  width: 75%;
  height: 70%;
  opacity: 0;
  z-index: 10;
  background: transparent;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.services__button:hover {
  opacity: 1;
  background: rgba(70, 70, 70, 0.596);
}

.align-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.d-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  align-items: center;
}
.btn-white {
  height: 25%;
  background: rgb(132, 215, 229);
  color: #fff;
  opacity: 1;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.btn {
  font-size: 20px;
  border-radius: 100px;
  padding: 15px 40px;
  font-weight: 700;
  border: none;
  outline: 0;
  border: 2px solid transparent;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
</style>
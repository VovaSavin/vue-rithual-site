<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="row row justify-content-end mb-3 name_page">
        <div class="col-6">
          <b>
            {{ namePage }}
          </b>
        </div>
        <div class="col-3">
          <SwitchButton
            :innerRowOrCol="rowOrCol"
            @checked="rowOrCol = !rowOrCol"
          />
        </div>
      </div>
      <div :class="{ row: !rowOrCol, 'my-col': rowOrCol }">
        <div
          v-for="service in rithualServices"
          :key="service.id"
          class="col-4 mb-4"
          :class="{ 'm-my-auto': rowOrCol }"
        >
          <div>
            <img
              :src="service.picture"
              :alt="service.name"
              width="355"
              height="255"
            />
          </div>
          <div>
            <a
              href="#"
              @click="getDataAndGoTo(service.id, 'service')"
              class="a_non_style text_write"
            >
              <b>
                {{ service.name }}
              </b>
            </a>
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
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getServices().then(() => this.getNamePage());
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
  color: rgb(197, 156, 81);
}
</style>
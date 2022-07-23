<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="mb-5 name_page f-bold">
        {{ dataDetail.name }}
      </div>
      <div class="m-3">
        <img
          :src="dataDetail.picture"
          :alt="dataDetail.picture"
          class="w-100"
        />
      </div>
      <div class="m-3">
        <p class="f-italic">
          {{ dataDetail.description }}
        </p>
      </div>
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
      onePositon: null,
    };
  },
  created() {},
  methods: {
    runApp() {
      // Run
      this.getDetailData().then(() => this.returnOnePosition());
    },
    returnOnePosition() {
      return this.onePositon;
    },
    async getDetailData() {
      // Get data about service or goods
      if (this.vueName == "service") {
        this.onePositon = await fetch(
          `${this.$store.getters.getServerUrl}/rith_services/${this.id}`
        )
          .then((response) => response.json())
          .catch(function (error) {
            console.log(error);
          });
      } else if (this.vueName == "goods") {
        this.onePositon = await fetch(
          `${this.$store.getters.getServerUrl}/rith_goods/${this.id}`
        )
          .then((response) => response.json())
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    setDelImiter(someText) {
      // Includ spaces in to the string if length this string > 105 symbols
      // if (someText.length > 10 && someText.indexOf(" ") == -1) {
      //   Array(someText).splice(someText[10], 1, " ");
      //   console.log(someText);
      // } else {
      //   console.log(someText);
      // }
      // console.log(someText);
    },
  },
};
</script>

<style scoped>
</style>

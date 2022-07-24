<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div>
      {{ onePositon.name }}
    </div>
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
      onePositon: this.dataDetail,
    };
  },
  created() {},
  methods: {
    runApp() {
      // Run
    },
  },
};
</script>

<style scoped>
</style>

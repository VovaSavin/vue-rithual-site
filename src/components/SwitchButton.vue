<template>
  <div class="form-check form-switch w-50 place_check_coeff">
    <input
      class="form-check-input pointer size_check_coeff"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="myRowOrCol"
    />
    <span v-if="myRowOrCol" class="small lh-125"> Колона </span>
    <span v-else class="small lh-125"> Ряд </span>
  </div>
</template>
<script>
export default {
  name: "SwitchButton",
  components: {},
  props: {
    innerRowOrCol: Boolean,
  },
  data() {
    return {
      myRowOrCol: this.innerRowOrCol,
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.form-check-input {
  border-color: #ecedee;
  color: #ecedee;
}
.form-check-input:checked {
  background-color: #b3b3b4;
  border-color: #d6d7d8;
}
</style>
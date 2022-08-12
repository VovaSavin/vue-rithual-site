<template>
  <div class="wrapper_side w-100">
    <transition name="slide-fade">
      <div v-if="!statusInnerSideMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="black"
          id="show_hide_side_navi"
          class="bi bi-list"
          viewBox="0 0 16 16"
          @click="changeStatusInnerSideMenu()"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div v-else class="u-custom-menu u-nav-container-collapse w-100 h-100">
        <div class="w-100 fix">
          <div class="u-menu-close mt-3">
            <svg
              id="close_btn"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="gainsboro"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              @click="changeStatusInnerSideMenu()"
            >
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>

          <ul class="u-align-center">
            <li v-for="nav in navigator" :key="nav.value" class="u-nav-item">
              <a
                class="u-button-style u-nav-link active"
                href="#"
                style="padding: 10px 2px"
                @click="goToPage(nav.link)"
              >
                {{ nav.text }}
              </a>
            </li>
          </ul>
          <ContactsView :whoParent="headerComp" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { navigator } from "@/assets/data";
import ContactsView from "../contacts/ContactsView.vue";

export default {
  name: "SideNavigatorComponent",
  components: {
    ContactsView,
  },
  props: {
    checkSideMenu: Function,
    innerSideStatus: Boolean,
  },
  data() {
    return {
      navigator: navigator(),
      statusInnerSideMenu: false,
      contacts: JSON.parse(localStorage.getItem("contacts")),
      headerComp: "sideComponent",
    };
  },
  created() {},
  methods: {
    changeStatusInnerSideMenu() {
      // Change statusInnerSideMenu
      this.statusInnerSideMenu = !this.statusInnerSideMenu;
    },
    goToPage(goPage) {
      // Go to page
      if (this.$route.name != goPage) {
        this.$router.push({ name: goPage });
      }
    },
  },
};
</script>

<style scoped>
.wrapper_side {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 1rem;
  min-height: 35px;
}
.u-nav-container-collapse {
  text-align: left;
  overflow: auto;
  position: fixed !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000ea !important;
  z-index: 99;
  min-height: 100vh;
}
.u-align-center {
  display: table;
  font-size: 1.25rem;
  /* margin: 20px auto 0; */
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: 80px;
  text-align: left;
  list-style: none;
  padding: 0;
  position: relative;
  min-width: 120px;
  white-space: nowrap;
  line-height: 1.6;
}
.u-nav-item {
  display: block;
  height: auto;
  position: relative;
  padding: 0;
}
.u-nav-link {
  padding-left: 0 !important;
  padding-right: 0 !important;
  background: transparent;
  color: gainsboro;
  white-space: normal;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  display: block;
  font-style: inherit;
  font-weight: inherit;
  text-decoration: none;
  border: 0 none transparent;
  outline-width: 0;
  background-color: transparent;
  margin: 0;
}
svg {
  cursor: pointer;
  font-weight: bold;
}
svg:hover {
  fill: #2392be;
}
.u-nav-link:hover {
  color: rgb(255, 255, 255);
}
.u-menu-close {
  content: "\2715";
  font-size: 28px !important;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  margin-right: 1px;
}
.fix {
  position: fixed;
  left: -55px;
  top: 0;
  z-index: 555;
}
</style>
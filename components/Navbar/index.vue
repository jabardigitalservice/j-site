<template>
  <nav class="theme-navbar flex justify-between fixed top-0 left-0 right-0 backdrop-blur-md px-[50px] py-[13px] z-10">
    <a href="/" class="hover:cursor-pointer">
      <img
        src="@/assets/logo.svg"
        alt="Logo Jabarprov"
        width="228" 
        height="38"
      >
    </a>
    <ul class="flex items-center gap-2 font-lato text-white text-base">
      <li
        v-for="(menu, index) in listMenu"
        :key="index"
        @click="toggle(menu, index)"
      >
        <NavbarItem
          :menu="menu"
          :show-children="index === currentIndex"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [],
      currentIndex: null
    }
  },
  async fetch() {
    // @todo: change API URL source to the real one
    const res = await this.$axios.$get('https://63e4a965c04baebbcda92684.mockapi.io/menus')
    this.listMenu = res
    this.$store.dispatch('settings/setNavigationMenu', res)
  },
  fetchOnServer: true,
  methods: {
    toggle(menu, index) {
      this.currentIndex = this.currentIndex === index && menu.childMenu.length
        ? null
        : index
    }
  }
}
</script>

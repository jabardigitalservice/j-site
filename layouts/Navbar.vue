<template>
  <div class="theme-navbar flex justify-between fixed top-0 left-0 right-0 backdrop-blur-md px-[50px] py-[13px]">
    <a href="/" class="hover:cursor-pointer">
      <img src="@/assets/logo.svg" alt="Logo" width="228" height="38">
    </a>
    <ul class="flex items-center gap-2">
      <li v-for="(menu, index) in listMenu" :key="index" class="px-2 py-[6px] hover:cursor-pointer">
        <div class="flex relative">
          <a :href="menu.to">
            {{ menu.page }}
          </a>
          <img v-if="menu.childMenu.length" src="@/assets/icons/chevron-down.svg" alt="Chevron Down" class="ml-4">
        </div>
        <ul v-if="menu.childMenu.length" class="absolute bg-black w-full rounded-lg p-3">
          <li v-for="(child, childIndex) in menu.childMenu" :key="childIndex">
            <a :href="child.to">
              {{ child.page }}
            </a>
          </li>
        </ul>
      </li>
      <li class="px-2 py-[6px] hover:cursor-pointer">
        <div>
          <a href="/settings">
            Settings
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        'Home',
        'Gallery',
        'About'
      ]
    }
  },
  async fetch() {
    this.listMenu = await this.$axios.$get('https://63e4a965c04baebbcda92684.mockapi.io/menus')
  },
  fetchOnServer: true
}
</script>

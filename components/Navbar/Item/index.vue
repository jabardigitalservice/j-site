<template>
  <div class="px-2 py-[6px] hover:cursor-pointer relative">
    <!-- Parent Menu -->
    <div class="flex relative">
      <button v-if="menu.childMenu.length">
        {{ menu.page }}
      </button>
      <a v-else :href="menu.to">
        {{ menu.page }}
      </a>
      <img
        v-if="menu.childMenu.length"
        src="@/assets/icons/chevron-down.svg"
        aria-hidden="true"
        class="ml-4"
      >
    </div>
    <!-- Child Menu -->
    <ul
      v-if="menu.childMenu.length"
      v-show="showChildren"
      class="absolute backdrop-blur-md w-full rounded-lg p-3 bg-gray-700 mt-2"
    >
      <li
        v-for="(child, childIndex) in menu.childMenu"
        :key="childIndex"
        :class="{
        'border-b border-gray-600 pb-3 mb-3': childIndex !== menu.childMenu.length-1
        }"
      >
        <a :href="child.to">
          {{ child.page }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => {}
    },
    showChildren: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: null
    }
  }
}
</script>

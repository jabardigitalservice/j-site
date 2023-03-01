<template>
  <div class="footer__sitemap flex w-full flex-col text-white">
    <div class="flex items-start gap-3">
      <img src="@/assets/icons/sitemap.svg" alt="Lokasi" width="18" height="18" class="py-1" />
      <div class="flex w-full min-h-0 flex-col gap-4">
        <h2 class="font-roboto font-bold leading-7">
          Sitemap
        </h2>

        <!-- Sitemap Details (Mobile Only) -->
        <section class="min-w-0 flex flex-col divide-y divide-green-400 -mt-4 lg:hidden">
          <details
            v-for="navigation in navigationMenus"
            :key="`details-${navigation.id}`"
            class="footer__sitemap__menu py-4"
          >
            <summary class="flex justify-between items-center">
              <h3 class="font-bold">
                {{ navigation.page }}
              </h3>
              <div class="footer__sitemap__button h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-600">
                <img src="@/assets/icons/chevron-down.svg" width="16" height="16" fill="white" class="cursor-pointer transition-transform ease-in duration-150" />
              </div>
            </summary>
            <ul class="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
              <li v-for="(item, index) in navigation.childMenu" :key="index">
                <a
                  :href="item.to"
                  class="text-sm font-normal leading-6"
                >
                  {{ item.page }}
                </a>
              </li>
            </ul>
          </details>
        </section>

        <!-- Sitemap Details (Large Screen)  -->
        <section
          class="min-w-0 w-full hidden justify-between
          lg:grid lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] lg:gap-y-8 lg:-ml-7"
        >
          <div
            v-for="navigation in navigationMenus"
            :key="`details-${navigation.id}`"
            class="px-7 border-r border-green-500 last-of-type:border-transparent"
          >
            <h3 class="font-roboto text-base leading-6 font-bold mb-2 whitespace-nowrap">
              {{ navigation.page }}
            </h3>
            <ul class="grid grid-flow-row gap-x-8 gap-y-2">
              <li v-for="(item, index) in navigation.childMenu" :key="index" class="min-w-[95px]">
                <a
                  :href="item.to"
                  class="text-sm font-normal leading-6"
                >
                  {{ item.page }}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('settings', [
      'navigationMenus'
    ])
  }
}
</script>

<style scoped>
/* Hide default details marker */
.footer__sitemap__menu summary::-webkit-details-marker {
  display:none;
}

.footer__sitemap__menu[open] .footer__sitemap__button > * {
  transform: rotate(-180deg);
}
</style>

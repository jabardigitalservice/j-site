<template>
  <div class="bg-white w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-[max-content] max-w-4xl mx-auto gap-4 md:gap-8 p-4 md:p-8">
    <div v-for="item in data" :key="item.id" class="max-h-max w-full rounded-lg">
      <div class="h-full w-full flex flex-col justify-center items-center">
        <div class="w-11 h-11">
          <img
            :src="item.url"
            :alt="`Ilustrasi logo ${item.name}`"
            width="40"
            height="40"
          >
        </div>
        <div v-if="item.name" class="text-gray-700 font-lato text-sm h-9 w-full text-center">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  async fetch() {
    // @todo: replace mock API with dedicated API
    this.data = await this.$axios.$get('https://63d0d0903f08e4a8ff8aa241.mockapi.io/api/v1/showcase')
  },
}
</script>

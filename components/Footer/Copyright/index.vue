<template>
  <div class="w-full py-4 lg:py-6 border-t border-green-500">
    <BaseContainer>
      <div class="flex flex-col items-center gap-5">
        <p class="font-lato text-sm font-normal leading-6 text-white text-center">
          Copyright © {{ year }} <br class="lg:hidden"> Pemerintah Daerah Provinsi Jawa Barat. All Right Reserved
        </p>
      </div>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

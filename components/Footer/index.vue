<template>
  <footer class="bg-[#16A75C] relative">
    <BaseContainer
      class="py-6 md:py-12 flex flex-col gap-6 md:gap-12 bg-no-repeat"
      :style="{ backgroundImage: `url('/footer-background.svg')`, backgroundPosition: '100% 100%' }"
    >
      <a link="/" class="w-[fit-content]">
        <img
          src="@/assets/logo.svg"
          width="228"
          height="38"
          alt="Logo Website"
        >
      </a>
      <FooterInfo />
      <FooterSitemap />
    </BaseContainer>
    <FooterCopyright />
  </footer>
</template>

<script>
export default {
}
</script>

<template>
  <div class="min-w-0 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-6 text-white">
    <!-- Location -->
    <div class="flex items-start gap-3">
      <Icon src="/icons/location.svg" alt="Lokasi" size="18px" class="py-1" />
      <div class="flex flex-col gap-1">
        <p class="font-roboto font-bold leading-7">
          Gedung Sate Bandung
        </p>
        <div class="flex flex-col text-sm leading-6">
          <p>Jl. Diponegoro No. 22, Citarum, Bandung Wetan,</p>
          <p>Kota Bandung, Jawa Barat 40115</p>
        </div>
      </div>
    </div>
    <!-- Mail -->
    <div class="flex items-start gap-3">
      <Icon src="/icons/email.svg" alt="Email" size="18px" class="py-1" />
      <div class="flex flex-col gap-1">
        <p class="font-roboto font-bold leading-7">
          Surel
        </p>
        <a href="mailto:info@jabarprov.go.id" class="text-sm leading-6">info@jabarprov.go.id</a>
      </div>
    </div>
    <!-- Feedback -->
    <div class="flex items-start gap-3">
      <Icon src="/icons/feedback.svg" alt="Umpan Balik" size="20px" class="py-1" />
      <div class="flex flex-col gap-1">
        <p class="font-bold">
          Umpan Balik
        </p>
        <button
          type="button"
          class="text-sm text-left leading-6"
          @click="clickFeedbackForm"
        >
          Isi survei performa situs web
        </button>
        <Feedback :show="isFeedbackFormOpen" />
      </div>
    </div>
    <!-- Social Media -->
    <div class="flex items-start gap-3">
      <Icon src="/icons/network.svg" alt="Lokasi" size="20px" class="py-1" />
      <div class="flex w-full flex-col gap-2">
        <p class="font-bold">
          Media Sosial
        </p>
        <div class="w-full flex justify-between md:justify-start gap-6">
          <a
            v-for="socialMediaSite in socialMediaSites"
            :key="socialMediaSite.id"
            :href="socialMediaSite.link"
            target="_blank"
            :aria-label="socialMediaSite.name"
            rel="noreferrer"
            class="p-2 flex justify-center items-center rounded border border-white border-opacity-20"
            @click="gtagFooterSocialMedia(socialMediaSite.name)"
          >
            <Icon :name="socialMediaSite.icon" size="18px" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isFeedbackFormOpen: false,
      socialMediaSites : [
        {
          id: 1,
          name: 'Facebook',
          icon: 'facebook',
          link: 'https://www.facebook.com/jabarprov'
        },
        {
          id: 2,
          name: 'Instagram',
          icon: 'instagram',
          link: 'https://www.instagram.com/jabarprovgoid'
        },
        {
          id: 3,
          name: 'Twitter',
          icon: 'twitter',
          link: 'https://twitter.com/jabarprovgoid'
        },
        {
          id: 4,
          name: 'YouTube',
          icon: 'youtube',
          link: 'https://www.youtube.com/channel/UCiDN1p49p87vtkhMC5BhdXA'
        }
      ]
    }
  },
  computed: {
    ...mapState('settings', ['navigationMenus'])
  }
}
</script>

<template>
  <MainNav />
  <MainProducts />
  <FooterSite />
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import MainProducts from '@/components/MainProducts.vue'
import FooterSite from '@/components/FooterSite.vue'

export default {
  name: 'HomeView',
  components: {
    MainProducts,
    FooterSite,
    MainNav
  }
}
</script>

<template>
  <div class="home">
    <DefaultLayout />
    <div class="container">
      <HeroLayout />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '@/components/DafaultLayout.vue'
import HeroLayout from '@/components/HeroLayout.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    HeroLayout
  }
}
</script>

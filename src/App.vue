<template>
  <div id="app">
    <router-view/>
    <FooterLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterLayout from '@/components/FooterLayout.vue';
export default {
  components: {
    FooterLayout
  }
}
</script>

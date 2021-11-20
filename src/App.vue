<template>
  <body>
    <div class="container">
      <app-layout />
      <router-view/>
    </div>
  </body>
</template>
<script>
import AppLayout from '@/components/AppLayout.vue'

export default {
  components: {
    AppLayout
  }
}
</script>

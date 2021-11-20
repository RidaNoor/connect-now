<template>
  <button class="btn" :class="'btn'+' '+bg" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>
    <span v-html="title"></span>
  </button>
</template>

<script>
export default {
  props: ['title', 'bg']
}
</script>

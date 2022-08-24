<template>
  <div>
    <menubook />
    <card />
  </div>
</template>

<script>
  import card from '../components/book/book.vue';
  import menubook from '../components/menu/menu.vue';

  export default {
    components: {
      card,
      menubook
    }
  }
</script>

<template>
  <div>
    <menubook />
    <list />
  </div>
</template>


<script>
  import list from '../components/favorite/favorite.vue';
  import menubook from '../components/menu/menu.vue';

  export default {
    components: {
      list,
      menubook
    }
  }
</script>

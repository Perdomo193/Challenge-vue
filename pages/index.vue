<template>
  <div>
    <menubook />
    <search />
    <list />
  </div>
</template>

<script>
  import search from '../components/home/search/search.vue';
  import list from '../components/home/list/list.vue';
  import menubook from '../components/menu/menu.vue';

  export default {
    components: {
      search,
      list,
      menubook
    }
  }
</script>

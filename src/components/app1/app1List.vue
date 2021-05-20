<template>
  <div class="anyName">
    <p>App 1 List Header</p>
    <div v-for="n in 5" v-bind:key="n">
      <app-1-item></app-1-item>
    </div>
  </div>
</template>
<script>
import app1Item from "./app1Item.vue";

export default {
  components: {
    app1Item,
  },
};
</script>

<style scoped>
.anyName {
  background-color: lightskyblue;
}
</style>
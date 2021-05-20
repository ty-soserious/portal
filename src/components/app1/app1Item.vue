<template>
  <p>App 1 List Item</p>
  <router-link :to="itemLink">View Item</router-link>
</template>
<script>
export default {
  computed: {
    itemLink() {
      return { name: "app1ItemDetail" };
      // return '/teams/' + this.id;
      //return { name: "team-members", params: { teamId: this.id } };
      // this.$router.push({ name: 'team-members', params: { teamId: this.id } });
    },
  },
};
</script>
<style scoped>
p {
  background-color: greenyellow;
}
</style>
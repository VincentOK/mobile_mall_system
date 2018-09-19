<template>
    <div class="index">
      <side-bar></side-bar>
      <div>
        <router-view></router-view>
      </div>
    </div>

</template>

<script>
import SideBar from "./publicComponents/slideBar/slideBar.vue";
export default {
  name: "index",
  components: { "side-bar": SideBar },
  data() {
    return {};
  },
  methods: {
  },
  mounted: function() {}
};
</script>

<style scoped>
</style>

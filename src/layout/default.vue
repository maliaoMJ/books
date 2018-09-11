<template>
	<div class="defaultLayout">
    <app-header></app-header>
    <slot></slot> 
  </div>
</template>

<script type="text/javascript">
import appHeader from "@/common/AppHeader";
export default {
  name: "defaultLayout",
  components: {
    appHeader
  },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
@import "../static/style/mixin";
.defaultLayout {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  padding-top: px2rem(48px);
}
</style>

<template>
	<div class="appHeader">AppHeader</div>
</template>

<script type="text/javascript">
export default {
  name: "appHeader"
};
</script>

<style lang="scss">
@import "../../static/style/mixin";
.appHeader {
  width: 100%;
  height: px2rem(48px);
  background: orange;
  color: #fff;
  text-align: center;
  font-size: px2rem(16px);
  line-height: px2rem(48px);
}
</style>

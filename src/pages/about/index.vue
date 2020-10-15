<template>
  <div class="container">
    <logo />
    <text>this is about page</text>
  </div>
</template>
<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo,
  },
  setup() {},
}
</script>
<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text {
    font-size: @font-base;
  }
}
</style>

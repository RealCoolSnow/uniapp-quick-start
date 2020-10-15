<template>
  <view class="content">
    <navigator url="/pages/about/index">
      <button type="primary">
        Show About
      </button>
    </navigator>
  </view>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const msg = ref('Hello World')
    return {
      msg,
    }
  },
}
</script>

<style>
.content {
  text-align: center;
  padding: 20rpx 20rpx;
}
</style>

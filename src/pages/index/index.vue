<template>
  <view class="content">
    <image class="logo" src="/static/images/logo.png" />
    <view>
      <text class="title">
        {{ msg }}
      </text>
      <button @click="this.msg='button clicked'">
        click
      </button>
    </view>
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
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>

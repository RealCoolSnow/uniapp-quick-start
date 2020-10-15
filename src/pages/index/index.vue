<template>
  <view class="content">
    <view>
      <button @click="inc">
        counter - {{ state.counter }}
      </button>
    </view>
    <navigator url="/pages/about/index">
      <button>Show About</button>
    </navigator>
  </view>
</template>

<script>
import { reactive, computed } from 'vue'
import store from '@/store'
import MutationTypes from '@/store/mutation-types'

export default {
  setup() {
    const state = reactive({
      counter: computed(() => store.getters.counter),
    })
    const inc = () => {
      store.commit(MutationTypes.APP.SET_COUNTER, 1)
    }
    return {
      state,
      inc,
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

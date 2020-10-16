<template>
  <view class="content">
    <button @click="inc">
      Counter - {{ state.counter }}
    </button>
    <button class="mt" @click="httpTest">
      Http Test
    </button>
    <navigator url="/pages/about/index" class="mt">
      <button>Show About</button>
    </navigator>
  </view>
</template>

<script>
import { reactive, computed } from 'vue'
import store from '@/store'
import MutationTypes from '@/store/mutation-types'
import { helloGet } from '@/service/api'

export default {
  setup() {
    const state = reactive({
      counter: computed(() => store.getters.counter),
    })
    const inc = () => {
      store.commit(MutationTypes.APP.SET_COUNTER, 1)
    }
    const httpTest = () => {
      helloGet()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return {
      state,
      inc,
      httpTest,
    }
  },
}
</script>

<style lang="less">
.content {
  text-align: center;
  padding: 20rpx 20rpx;
  .mt {
    margin-top: 20rpx;
  }
}
</style>

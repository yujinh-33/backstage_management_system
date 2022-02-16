<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <n-card>
      <n-tabs default-value="signin" size="large">
        <n-tab-pane name="signin" tab="密码登录">
          <login-account ref="acountRef" />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="手机登录">
          <login-phone />
        </n-tab-pane>
      </n-tabs>

      <div class="account-control">
        <n-checkbox v-model:checked="isKeepPassword" label="记住密码" />
        <n-button text> 忘记密码 </n-button>
      </div>
      <n-button type="primary" block secondary strong @click="handleLoginClick">
        登录
      </n-button>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  props: {},
  emits: {},
  setup() {
    const isKeepPassword = ref(false)
    // acount组件对象
    const acountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      acountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      handleLoginClick,
      acountRef
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 400px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
}
</style>

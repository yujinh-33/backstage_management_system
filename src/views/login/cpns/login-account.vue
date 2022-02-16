<template>
  <!-- 密码登录组件 -->
  <div class="login-account">
    <n-form :rules="rules" :model="account" ref="formRef">
      <n-form-item-row path="name" label="账号">
        <n-input v-model:value="account.name" placeholder="请输入账号" />
      </n-form-item-row>
      <n-form-item-row path="password" label="密码">
        <n-input v-model:value="account.password" placeholder="请输入密码" />
      </n-form-item-row>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { rules } from '../config/account-config'
import { NForm } from 'naive-ui'

export default defineComponent({
  components: {},
  props: {},
  emits: {},
  setup() {
    const account = ref({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof NForm>>()

    // 登录逻辑
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (!valid) {
          console.log('loginAction')
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style lang="less" scoped></style>

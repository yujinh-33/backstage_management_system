<template>
  <!-- 密码登录组件 -->
  <div class="login-account">
    <n-form :rules="rules" :model="account" ref="formRef">
      <n-form-item-row path="name" label="账号">
        <n-input v-model:value="account.name" placeholder="请输入账号" />
      </n-form-item-row>
      <n-form-item-row path="password" label="密码">
        <n-input
          v-model:value="account.password"
          type="password"
          show-password-on="click"
          placeholder="请输入密码"
          :maxlength="8"
        />
      </n-form-item-row>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { NForm } from 'naive-ui'
import localCache from '@/utils/cache'
import { useLoginStore } from '@/store/index'

export default defineComponent({
  components: {},
  props: {},
  emits: {},
  setup() {
    const loginStore = useLoginStore()

    const account = reactive({
      name: localCache.getItem('name') ?? '',
      password: localCache.getItem('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof NForm>>()

    // 登录逻辑
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) {
          // 1. 判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setItem('name', account.name)
            localCache.setItem('password', account.password)
          } else {
            localCache.removeItem('name')
            localCache.removeItem('password')
          }

          // 2. 开始登录
          loginStore.accountLogin({ ...account })
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

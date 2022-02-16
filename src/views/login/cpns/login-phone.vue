<template>
  <div class="login-phone">
    <n-form>
      <n-form-item-row label="手机">
        <n-input />
      </n-form-item-row>
      <n-form-item-row label="验证码">
        <n-input />
        <n-button class="verification" type="primary"> 获取 </n-button>
      </n-form-item-row>
    </n-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login-phone {
  .verification {
    margin-left: 5px;
    width: 80px;
  }
}
</style>

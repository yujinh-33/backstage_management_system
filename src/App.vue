<template>
  <div class="app">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  components: {
    ElButton
  },
  props: {},
  emits: {},
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>

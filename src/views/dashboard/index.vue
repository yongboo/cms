<template>
  <div class="dashboard-container">
    <div class="dashboard-text">姓名:{{name}}</div>
    <div class="dashboard-text">权限:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin-top: 120px;
  }
  &-text {
    font-size: 24px;
    line-height: 48px;
    text-align: center;
  }
}
</style>

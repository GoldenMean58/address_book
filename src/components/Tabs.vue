<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="信息管理查询" name="first">信息查询</el-tab-pane>
        <el-tab-pane label="信息分析" name="second">信息分析</el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
  name: 'mytabs',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      if (tab.index === '0') {
        this.$router.push('/table')
      } else {
        this.$router.push('/charts')
      }
    }
  }
}
</script>

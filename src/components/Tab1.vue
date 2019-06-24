<template>
    <div id="tab1">
        <mytabs></mytabs>
        <mytable :tableData="tableData" @update:chart="updateChart"></mytable>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="totalList"
            :current-page.sync="currentPage"
            @current-change="currentPageChange"
        >
        </el-pagination>
        <myform url="http://localhost:5000/add"></myform>
        <el-button @click="getData()">获取数据</el-button>
        <el-button @click="addData()">添加</el-button>
        <myform
            :dialog-form-visible.sync="dialogFormVisible"
            :init-form="form"
            url="http://localhost:5000/add"
            @update:form="addForm"
            @update:chart="updateChart"
            index="0"
        ></myform>
    </div>
</template>

<script>
import mytable from './Table'
import myform from './Form'
import myEcharts from './myEcharts'
import mytabs from './Tabs'
export default {
  name: 'tab1',
  methods: {
    currentPageChange (page) {
      this.currentPage = page
      this.getData()
    },
    async getData () {
      const axios = require('axios')
      var response = await axios.post('http://localhost:5000/getCount')
      this.totalList = response.data.count
      console.log(this.currentPage)
      const qs = require('qs')
      response = await axios.post('http://localhost:5000/get', qs.stringify({ page: this.currentPage }))
      this.tableData = response.data.data
      this.showData = true
    },
    addData () {
      this.dialogFormVisible = true
    },
    addForm (index, form) {
      this.tableData.push(form)
      this.updateChart()
      console.log('updateForm')
    },
    updateChart () {
      this.$refs.major_percent.getData()
      this.$refs.province_percent.getData()
      this.$refs.grade_percent.getData()
      this.$refs.sex_percent.getData()
      console.log('updateChart')
    }
  },
  data () {
    return {
      showData: false,
      totalList: 0,
      tableData: [],
      currentPage: 1,
      dialogFormVisible: false,
      form:
      {
        QQ: '',
        address: '',
        age: '',
        cno: '',
        email: '',
        grade: '',
        major: '',
        name: '',
        pnum: '',
        province: '',
        sd: '',
        sex: '',
        sno: '',
        tele: '',
        wx: ''
      }
    }
  },
  components: {
    mytable,
    myform,
    myEcharts,
    mytabs
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

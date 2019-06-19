<template>
    <div id="app">
        <!--<router-view /> -->
        <mytable :tableData="tableData"></mytable>
        <myform url="http://localhost:5000/add"></myform>
        <el-button @click="getData()">获取数据</el-button>
        <el-button @click="addData()">添加</el-button>
        <myform
            :dialog-form-visible.sync="dialogFormVisible"
            :form="form"
            url="http://localhost:5000/add"
            @update:form="updateForm"
        ></myform>
    </div>
</template>

<script>
import mytable from './components/Table'
import myform from './components/Form'
export default {
  name: 'App',
  methods: {
    async getData () {
      const axios = require('axios')
      const response = await axios.post('http://localhost:5000/get')
      this.tableData = response.data.data
    },
    addData () {
      this.dialogFormVisible = true
    },
    updateForm (index, form) {
      this.tableData.push(form)
      console.log('updateForm')
    }
  },
  data () {
    return {
      tableData: [],
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
    myform
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

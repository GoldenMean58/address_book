<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            :row-class-name="rowClassName"
        >
            <el-table-column
                fixed
                prop="cno"
                label="编号"
                width="60"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120"
            ></el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
                width="60"
            ></el-table-column>
            <el-table-column
                prop="age"
                label="年龄"
                width="60"
            ></el-table-column>
            <el-table-column
                prop="pnum"
                label="移动电话"
                width="150"
            ></el-table-column>
            <el-table-column prop="QQ" label="QQ" width="120">
            </el-table-column>
            <el-table-column prop="wx" label="微信" width="120">
            </el-table-column>
            <el-table-column prop="email" label="邮箱" width="220">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="address" label="详细地址" width="320">
            </el-table-column>
            <el-table-column prop="tele" label="固定电话" width="120">
            </el-table-column>
            <el-table-column prop="sno" label="学号" width="120">
            </el-table-column>
            <el-table-column prop="major" label="专业" width="220">
            </el-table-column>
            <el-table-column prop="grade" label="年级" width="120">
            </el-table-column>
            <el-table-column prop="sd" label="宿舍" width="220">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button
                        @click="deleteClick(scope.row)"
                        type="text"
                        size="small"
                        >删除</el-button
                    >
                    <el-button
                        type="text"
                        size="small"
                        @click="editClick(scope.row)"
                        >编辑</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <myform
            :dialog-form-visible.sync="dialogFormVisible"
            :init-form="form"
            :old_cno="old_cno"
            @update:form="updateForm"
            :index="selectedIndex"
            url="http://localhost:5000/update"
        ></myform>
    </div>
</template>

<script>
import myform from './Form'
export default {
  name: 'mytable',
  components: {
    myform
  },
  methods: {
    updateForm (index, form) {
      this.$set(this.tableData, index, form)
      console.log(this.tableData)
    },
    async deleteClick (row) {
      const axios = require('axios')
      const qs = require('qs')
      var response = await axios({
        method: 'post',
        url: 'http://localhost:5000/delete',
        data: qs.stringify({
          'cno': row.cno
        })
      })
      if (response.data.code === 0) {
        console.log('删除成功')
        this.tableData.splice(row.index, 1)
      } else {
        console.log('删除失败')
      }
    },
    editClick (row) {
      this.form = row
      this.old_cno = row.cno
      this.dialogFormVisible = true
      this.selectedIndex = row.index
    },
    rowClassName ({ row, rowIndex }) {
      row.index = rowIndex
    }
  },
  props: ['tableData'],
  data () {
    return {
      dialogFormVisible: false,
      form: {},
      old_cno: 0,
      selectedIndex: 0
    }
  }
}
</script>

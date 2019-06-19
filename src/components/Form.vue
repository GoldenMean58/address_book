<template>
    <el-dialog title="信息" :visible="dialogFormVisible">
        <el-form>
            <el-form-item label="编号" :label-width="formLabelWidth">
                <el-input v-model="cno" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-input
                    v-model="sex"
                    autocomplete="off"
                ></el-input> </el-form-item
            ><el-form-item label="手机" :label-width="formLabelWidth">
                <el-input v-model="pnum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="省份" :label-width="formLabelWidth">
                <el-input v-model="province" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-input v-model="address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="QQ" :label-width="formLabelWidth">
                <el-input v-model="QQ" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="微信" :label-width="formLabelWidth">
                <el-input v-model="wx" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="固定电话" :label-width="formLabelWidth">
                <el-input v-model="tele" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="sno" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="专业" :label-width="formLabelWidth">
                <el-input v-model="major" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年级" :label-width="formLabelWidth">
                <el-input v-model="grade" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宿舍" :label-width="formLabelWidth">
                <el-input v-model="sd" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="sendDataToParent(false)">取 消</el-button>
            <el-button type="primary" @click="sendDataToParent(true)"
                >确 定</el-button
            >
        </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'myform',
  props: ['url', 'dialogFormVisible', 'old_cno', 'QQ', 'address', 'age', 'cno', 'email', 'grade', 'major', 'name', 'pnum', 'province', 'sd', 'sex', 'sno', 'tele', 'wx', 'index'],
  methods: {
    async sendDataToParent (ok) {
      var form = {
        QQ: this.QQ,
        address: this.address,
        age: this.age,
        cno: this.cno,
        email: this.email,
        grade: this.grade,
        major: this.major,
        name: this.name,
        pnum: this.pnum,
        province: this.province,
        sd: this.sd,
        sex: this.sex,
        sno: this.sno,
        tele: this.tele,
        wx: this.wx
      }
      this.$emit('update:dialogFormVisible', false)
      if (ok) {
        const axios = require('axios')
        const qs = require('qs')
        form.old_cno = this.old_cno
        form.new_cno = this.cno
        var response = await axios({
          method: 'post',
          url: this.url,
          data: qs.stringify(form)
        })
        if (response.data.code === 0) {
          this.$emit('update:form', this.index, form)
          console.log('ok')
        } else {
        }
        console.log(response.data.msg)
      }
    }
  },
  computed: {
  },
  data () {
    return {
      formLabelWidth: '120px'
    }
  }
}
</script>

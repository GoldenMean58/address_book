<template>
    <el-dialog title="信息" :visible="dialogFormVisible">
        <el-form>
            <el-form-item label="编号" :label-width="formLabelWidth">
                <el-input v-model="form.cno" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-input
                    v-model="form.sex"
                    autocomplete="off"
                ></el-input> </el-form-item
            ><el-form-item label="手机" :label-width="formLabelWidth">
                <el-input v-model="form.pnum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="省份" :label-width="formLabelWidth">
                <el-input v-model="form.province" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="QQ" :label-width="formLabelWidth">
                <el-input v-model="form.QQ" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="微信" :label-width="formLabelWidth">
                <el-input v-model="form.wx" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="固定电话" :label-width="formLabelWidth">
                <el-input v-model="form.tele" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.sno" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="专业" :label-width="formLabelWidth">
                <el-input v-model="form.major" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年级" :label-width="formLabelWidth">
                <el-input v-model="form.grade" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="宿舍" :label-width="formLabelWidth">
                <el-input v-model="form.sd" autocomplete="off"></el-input>
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
function deepClone (obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  var key
  if (obj && typeof obj === 'object') {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}
export default {
  name: 'myform',
  props: ['url', 'old_cno', 'dialogFormVisible', 'index', 'initForm'],
  methods: {
    async sendDataToParent (ok) {
      this.$emit('update:dialogFormVisible', false)
      if (ok) {
        const axios = require('axios')
        const qs = require('qs')
        this.form.old_cno = this.old_cno
        this.form.new_cno = this.form.cno
        var response = await axios({
          method: 'post',
          url: this.url,
          data: qs.stringify(this.form)
        })
        if (response.data.code === 0) {
          this.$emit('update:form', this.index, this.form)
          console.log('ok')
        } else {
        }
        console.log(response.data.msg)
      }
    }
  },
  watch: {
    initForm: function (newForm) {
      this.form = deepClone(newForm)
    }
  },
  computed: {
  },
  data () {
    return {
      formLabelWidth: '120px',
      form: this.initForm
    }
  }
}
</script>

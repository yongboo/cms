<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="中文名称：">
        <el-input v-model="form.name_cn"></el-input>
      </el-form-item>
      <el-form-item label="官网地址：">
        <el-input v-model="form.website" placeholder="多个地址用竖线'|'隔开'"></el-input>
      </el-form-item>
      <el-form-item label="白皮书：">
        <el-input v-model="form.white_paper" placeholder="白皮书地址"></el-input>
      </el-form-item>
      <el-form-item label="区块站：">
        <el-input v-model="form.block_site" placeholder="多个区块站地址用竖线'|'隔开'"></el-input>
      </el-form-item>
      <el-form-item label="发布时间：">
        <el-col :span="6">
          <el-date-picker type="date" placeholder="选择发布时间" v-model="form.release_date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="货币简介：">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.brief"></el-input>
      </el-form-item>
      <el-form-item label="货币介绍：">
        <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.coin_desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        name_cn: '',
        website: '',
        white_paper: '',
        block_site: '',
        release_date: '',
        brief: '',
        coin_desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.el-form{
  .el-input{
    width: 360px;
  }
  .el-textarea{
    width: 480px;
  }
  .el-rate{
    position: relative;
    top: 8px;
  }
  .notice-container > div{
    border: solid 2px #dcdfe6;
    padding: 24px 12px;
    border-radius: 4px;
    max-height: 320px;
    overflow-y: scroll;
  }
  .notice-title{
    width: 320px;
    margin-bottom: 12px;
  }
  .notice-url{
    margin-bottom: 12px;
  }
}
.line{
  text-align: center;
}
</style>


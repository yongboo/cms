<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所在地：">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <el-form-item label="官网地址：">
        <el-input v-model="form.website" placeholder="多个地址用竖线'|'隔开'"></el-input>
      </el-form-item>
      <el-form-item label="交易方式：">
        <el-select v-model="form.mode" multiple placeholder="选择支持的交易方式">
          <el-option label="法币" value="1"></el-option>
          <el-option label="现货" value="2"></el-option>
          <el-option label="期货" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="星级：">
        <el-rate v-model="form.grade"></el-rate>
      </el-form-item>
      <el-form-item label="简介：">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.brief"></el-input>
      </el-form-item>
      <el-form-item label="费率说明：">
        <el-input type="textarea" :autosize="{ minRows: 2}" v-model="form.rate_desc"></el-input>
      </el-form-item>
      <el-form-item label="交易所介绍：">
        <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.ex_desc"></el-input>
      </el-form-item>
      <el-form-item class="notice-container" label="最新公告：">
        <template v-for="(notice,index) in form.notices">
          <div class="notice" :key="index">
            <el-tag type="success" v-model="notice.date">{{notice.date}}</el-tag>
            <el-input class="notice-title" placeholder="标题" v-model="notice.title"></el-input> -
            <el-input class="notice-url" placeholder="链接地址" v-model="notice.url"></el-input>
            <el-button size="mini" type="primary" @click="addNotice()">+</el-button>
            <el-button size="mini" type="danger" @click="removeNotice(index)">-</el-button>
          </div>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { parseTime } from '@/utils/index'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        website: '',
        mode: [],
        grade: 1,
        brief: '',
        rate_desc: '',
        ex_desc: '',
        notices: [
          {
            title: 'a',
            url: '1',
            date: '12-03 16:30'
          },
          {
            title: '2',
            url: 'c',
            date: '01-03 16:30'
          }
        ]
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
    },
    getCuttentTime() {
      return parseTime((new Date()).getTime(), '{m}-{d} {h}:{i}')
    },
    addNotice() {
      this.form.notices.unshift({ title: '', url: '', date: this.getCuttentTime() })
    },
    removeNotice(index) {
      if (window.confirm('确定删除这条公告？')) {
        this.form.notices.splice(index, 1)
      }
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
    width: 280px;
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


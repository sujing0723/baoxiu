<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/FailureReporting" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20" class="title_header">
            <div class="grid-content">
              <p class="title">报修成功</p>
            </div>
          </el-col>
          <el-col :span="2">
            <router-link to="/" tag="li">
              <div class="grid-content">
                  <i class="el-icon-menu"></i>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-card class="box-card" :model="list">
      <el-row>
        <h4>报修单号：{{failureReportingId}}</h4>
        <h4>报修时间：{{list.time}}</h4>
        <h4>报修手机：{{userPhone}}</h4>
        <h4>报修队列数：{{list.number}}</h4>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <el-row>
        <p>请您在报修完成后，在 <router-link to="/BxList">我的报修</router-link>中为我们的服务打分</p>
      </el-row>
    </el-card>
    <el-row>
      <router-link to="/BxList">
        <el-button type="warning">我的报修</el-button>
      </router-link>
    </el-row>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { getSuccessList } from '../api/baoxiu'
export default {
  data () {
    return {
      userPhone: '',
      failureReportingId: '',
      list: ''
    }
  },
  methods: {
    loadCurrentUserPhone: function () {
      this.userPhone = this.$store.getters.userPhone
    },
    loadCurrentFailureReportingId: function () {
      this.failureReportingId = this.$store.getters.failureReportingId
    },
    loadUserLists: function () {
      getSuccessList(this.failureReportingId).then((res) => {
        let list = res.data.list
        this.list = list
      })
    }
  },
  mounted () {
    this.loadCurrentUserPhone()
    this.loadCurrentFailureReportingId()
    this.loadUserLists()
  }
}
</script>

<style>
.header {
  width: 100.5%;
  padding: 0px;
  text-align: center;
}
.el-menu-demo {
  background-color: #409EFF;
  height: 50px;
  color:#ffffff;
  font-weight: 400;
  margin-left: -0.9%;
  width: 100%;
}
.grid-content {
  color: #ffffff;
}
.title_header {
  text-align: center;
}
.title {
  margin-top: -3px;
}
.grid-content {
  margin-top: 15px;
}
.text {
  font-size: 14px;
}
.box-card {
  margin-top: 10px;
  padding: 0px;
}
.el-card__body _{
  margin-top: 30px;
  padding: 0px;
}
.second {
  padding:0px;
}
.el-icon-success {
  margin-top: 2px;
  font-size: 50px;
  color: #67C23A;
}
.footer {
  background-color: #409EFF;
  height: 50px;
  color:#ffffff;
  font-weight: 400;
  margin-left: -0.9%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footerTitle {
  margin-top: 16px;
}
.el-button--warning {
  width: 98%;
  margin-top: 20px;
}
.router-link-active {
  color: #409EFF;
}
.el-row{
  text-align: left
}
</style>

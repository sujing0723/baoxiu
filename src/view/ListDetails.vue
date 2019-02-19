<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/BxList" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20" class="title_header">
            <div class="grid-content">
              <p class="title">报修单详情{{list.id}}</p>
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
        <h4>区域:<span class="details">{{list.campus}}</span></h4>
        <h4>地点:<span class="details">{{list.place}}</span></h4>
        <h4>位置:<span class="details">{{list.position}}</span></h4>
        <h4>设备:<span class="details">{{list.equipment}}</span></h4>
        <h4>描述:<span class="details">{{list.description}}</span></h4>
      </el-row>
    </el-card>
    <el-card class="box-card" :model="operation">
      <h5><span>{{operation.list}}</span></h5>
      <h5><span>{{operation.list}}</span></h5>
    </el-card>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { getSuccessList, getOperation } from '../api/baoxiu'
export default {
  data () {
    return {
      tabPosition: '',
      list: '',
      operation: ''
    }
  },
  methods: {
    loadCurrentFailureReportingId: function () {
      this.failureReportingId = this.$store.getters.failureReportingId
      console.log(this.failureReportingId)
    },
    loadUserLists: function () {
      getSuccessList(this.failureReportingId).then((res) => {
        let list = res.data.list
        this.list = list
      })
    },
    loadOperation: function () {
      getOperation(this.failureReportingId).then((res) => {
        let operation = res.data.operation
        this.operation = operation
      })
    }
  },
  mounted () {
    this.loadCurrentFailureReportingId()
    this.loadUserLists()
    this.loadOperation()
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
.details {
  float: right
}
</style>

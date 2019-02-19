<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content">
              <p class="title">{{msgHeader}}</p>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <img src="../assets/user_presence.jpg" class="imgUrl">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content first">
          <router-link to="/failureReporting">
            <el-button type="primary" icon="el-icon-edit">我要报修</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content">
          <router-link to="/TelCheck">
            <el-button type="primary" icon="el-icon-document">我的报修</el-button>
          </router-link>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content first">
          <router-link to="/Evaluate">
            <el-button type="primary" icon="el-icon-edit">评价</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-card class="box-card" shadow="never">
      <div class="text item">
        自来水管线爆裂等需要紧急维修的情况，请直接拨打后勤处维修科报修电话<i class="el-icon-phone"></i>84108410(点击号码可直接拨打)
      </div>
    </el-card>
    <el-footer class="footer"><p class="footerTitle">{{msgFooter}}</p></el-footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msgHeader: '大连交通大学后勤维修管理系统 ',
      msgFooter: '程序设计：大连交通大学56工作室'
    }
  }
}
</script>

<style>
.imgUrl {
  width: 100%;
}
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
.title {
  margin-top: -3px;
}
.grid-content {
  margin-top: 15px;
}
.item {
  padding: 0px 0;
}
.box-card {
  margin-top: 20px;
  width: 100%;
  float: left;
  text-align: left;
}
.text {
  font-size: 14px;
}
.el-card__body _{
  margin-top: 28px;
  padding: 0px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.first {
  margin-top: 50px;
}
.second {
  margin-top: 30px;
}
.el-button--primary {
  width: 50%;
  height: 45px;
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
</style>

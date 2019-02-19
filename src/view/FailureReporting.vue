<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20">
            <div class="grid-content">
              <p class="title">故障报修</p>
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
    <el-card class="box-card">
      <el-form :model="list" :rules="rules" ref="list" label-width="78px" class="demo-list" @submit="submitForm">
        <el-form-item label="校区" prop="campus">
          <el-select v-model="list.campus" placeholder="请选择校区" @change = "campusChanged">
            <el-option v-for = "campus in campuses" :key = "campus.id" :label="campus.name" :value="campus.id">{{ campus.name }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地点" prop="place">
          <el-select v-model="list.place" placeholder="请选择地点" @change = "placeChanged">
           <el-option v-for = "place in places" :key = "place.id" :label="place.name" :value="place.id">{{ place.name }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="位置" prop="position">
          <el-select v-model="list.position" placeholder="请选择位置" @change = "positionChanged">
            <el-option v-for = "position in positions" :key = "position.id" :label="position.name" :value="position.id">{{ position.name }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备" prop="equipment">
          <el-select v-model="list.equipment" placeholder="请选择设备">
            <el-option v-for = "equipment in equipments" :key = "equipment.id" :label="equipment.name" :value="equipment.id">{{ equipment.name }}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="故障描述" prop="description">
          <el-input type="textarea" v-model="list.description" placeholder="请填写楼号和房间号码（室外请说明附近的参照物）并描述故障情况；"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userphone">
          <el-input v-model="list.userphone" placeholder="请准确填写手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button lain @click="resetForm('list')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">报修</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { getAllCampuses, loadPlaces, loadPositions, loadEquipments, postNewFailureReporting } from '@/api/baoxiu'

export default {
  data () {
    return {
      list: {
        campus: '',
        place: '',
        position: '',
        equipment: '',
        userphone: '',
        description: '',
        listNumber: ''
      },
      campuses: [],
      places: [],
      positions: [],
      equipments: [],
      rules: {
        campus: [
          {
            required: true,
            message: '请选择校区',
            trigger: 'blur'
          }
        ],
        place: [
          {
            required: true,
            message: '请选择地点',
            trigger: 'blur'
          }
        ],
        position: [
          {
            required: true,
            message: '请选择位置',
            trigger: 'blur'
          }
        ],
        equipment: [
          {
            required: true,
            message: '请选择设备',
            trigger: 'change'
          }
        ],
        userphone: [
          {
            required: true,
            message: '请准确填写手机号码',
            trigger: 'change'
          },
          {
            min: 8,
            max: 11,
            message: '请正确输入手机号',
            trigger: 'blur'
          }
        ],
        description: [
          {
            required: true,
            message: '请填写楼号和房间号码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    loadCampuses: function () {
      getAllCampuses().then((res) => {
        let campuses = res.data.campuses

        if (campuses) {
          this.campuses = campuses

          this.campusChanged(this.list.campus)
        }
      })
    },
    // 改变校区以加载地点
    campusChanged: function (value) {
      if (value) {
        let param = {
          campusId: value
        }

        loadPlaces(param).then((res) => {
          let places = res.data.places

          this.places = places
        })
      }
    },
    // 改变地点以加载位置
    placeChanged: function (value) {
      if (value) {
        let param = {
          placeId: value
        }

        loadPositions(param).then((res) => {
          let positions = res.data.positions

          this.positions = positions
        })
      }
    },
    // 改变位置以加载设备
    positionChanged: function (value) {
      if (value) {
        let param = {
          positionId: value
        }

        loadEquipments(param).then((res) => {
          let equipments = res.data.equipments

          this.equipments = equipments
        })
      }
    },
    submitForm (list) {
      this.$refs.list.validate((valid) => {
        if (valid) {
          this.$confirm('请确认您所填写的信息', this.list.userphone, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // vuex
            postNewFailureReporting(this.list).then((res) => {
              let list = res.data.list

              this.$store.commit('storeFailureReportingId', list.id)
              this.$store.commit('storeUserPhone', list.userphone)
              this.$router.push('/Success')
              this.$message({
                message: '添加成功',
                type: 'success'
              }, () => {

              })
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (list) {
      this.$refs[list].resetFields()
    }
  },
  mounted () {
    this.loadCampuses()
  }
}
</script>

<style>
.el-row {
  width: 101%
}
.header {
  width: 101.5%;
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
.el-form-item__label {
  width: 70px;
  float: left;
}
.el-textarea__inner {
  font-size: 10px;
  height: 80px;
}
.el-message-box {
  width: 340px;
}
</style>

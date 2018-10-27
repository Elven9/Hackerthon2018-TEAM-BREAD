<template>
  <div>
    <el-row>
      <el-col span= "3">
        <el-button id="MenuButton" type="primary" ></el-button>
        </el-col>
    
      <el-col span= "17">
        <el-input-group>
          <el-input placeholder="" v-model="input">
            <el-button slot="append"></el-button>
          </el-input>
          <el-input placeholder="" v-model="input">
            <el-button slot="append"></el-button>
          </el-input>
        </el-input-group>
      </el-col>
      
      
      <el-col span="4">
        <el-select v-model="value" placeholder="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>      
    </el-row>
      

    
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      options: [{
        value: '1',
        label: '地點'
      }, {
        value: '2',
        label: '景物'
      }, {
        value: '3',
        label: '路線'
      }],
      value: ''
    }
  }
}
</script>

<style lang="scss">
.SearchGroup{

}
// .TypeButton{
//   margin-right: 10%;
// }
</style>

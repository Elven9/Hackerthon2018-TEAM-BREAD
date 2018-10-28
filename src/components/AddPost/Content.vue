<template>
  <div>
      <div id="content-wrapper">
         <el-input  v-model="input" placeholder="地點"></el-input>

        <el-upload id="uploadPhoto"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i>picture</i>
        </el-upload>
        <div id="textArea">
          <el-input type="textarea" :placeholder="text" v-model="textarea2"></el-input>
        </div>
    
      </div>
  <div id="AddPostButton">
      <el-button-group >
        <el-button type="primary">取消</el-button>
        <el-button type="primary">確定<i></i></el-button>
      </el-button-group>
    </div>
  </div>
  
  
</template>

<script>

export default {
  data() {
    return {
      text:'',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }

}
</script>

<style lang="scss">
#app{
  background-color: var(--li_blue);
}
#content-wrapper{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: flex-start;
  margin-left: 7%;
  margin-right: 7%;
  .el-input{
    margin-top: 7%;
    margin-bottom: 5%;
    width: 50vw;
  }
  #uploadPhoto{
    margin-top: 5%;
    margin-bottom: 7%;
    
    .el-upload{
      width: 86vw;
    }
  }
  #textArea{
    margin-top: 5%;
    margin-bottom: 7%;
    .el-textarea{
      height: 25vh;
      width: 100%;
      .el-textarea__inner {
        height: 100%;
      }
    }
  }
}
#AddPostButton{
  .el-button-group{
    position: fixed;
    width: 100%;
    height: 9%;

    bottom: 0%;
    .el-button{
      width: 50%;
      height: 100%;
      margin: 0%;
      border-radius: 0px;
      background: var(--bg_blue);
      border-top: 0;
      border-bottom: 0;
      border-color: var(--bg_white);
    }
  } 
}
</style>

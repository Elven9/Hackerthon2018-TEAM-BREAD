<template>
  <div class="outter">
    <div class="list-container">
    <!-- profile -->
      <div id="LeftBarProfile">
        <img src="@/assets/img/svg/leftbar/Avatar.svg" alt="share" height="30vw"/>
        <p id="ProfileText">Account</p>
      </div>
      <div class="LeftBarGroup">
        <div class="LeftBarButton" @click="shareLocation">
          <img src="@/assets/img/svg/leftbar/shareTool.svg" alt="share" height="15vw"/>
          <div class="LeftBarText">分享地點位置</div>
        </div>
        <div class="LeftBarButton" @click="toHomePage">
          <img src="@/assets/img/svg/leftbar/Asset 9.svg" alt="Init" height="15vw"/>
          <div class="LeftBarText">回到地圖</div>
        </div>
        <div class="LeftBarButton">
          <img src="@/assets/img/svg/leftbar/searchLocationTool.svg" alt="searchLocation" height="15vw"/>
          <div class="LeftBarText">搜尋地點</div>
        </div>
        <div class="LeftBarButton" @click="changeToSearch">
          <img src="@/assets/img/svg/leftbar/ItemSearchTool.svg" alt="ItemSearch" height="15vw"/>
          <div class="LeftBarText">搜尋景物</div>
        </div>
        <div class="LeftBarButton" @click="pushToArticle">
          <img src="@/assets/img/svg/leftbar/photo.svg" alt="photo" height="15vw"/>
          <div class="LeftBarText">為地點新增照片或文字</div>
        </div>
        <div class="LeftBarButton">
          <img src="@/assets/img/svg/leftbar/FavoriteTool.svg" alt="favorite" height="15vw"/>
          <div class="LeftBarText">我的最愛</div>
        </div>
        <div class="LeftBarButton">
          <img src="@/assets/img/svg/leftbar/logout.svg" alt="logout" height="15vw"/>
          <div class="LeftBarText">Logout</div>
        </div>
      </div>
    </div>
    <div id="MenuButton" @click="closeLeftList">
      <img src="@/assets/img/svg/homepage/leftBar.svg" alt="leftBar" />
    </div>
  </div>
</template>

<script>
// Import API

export default {
  data() {
    return {

    }
  },
  methods: {
    closeLeftList() {
      this.$emit('closeLeftList', false);
    },
    shareLocation() {
      this.$message({
        message: '成功將地址複製到剪貼本',
        type: 'success'
      });
    },
    pushToArticle() {
      this.$router.push("/Article")
    },
    toHomePage() {
      this.$router.push("/Home")
    },
    changeToSearch() {
      this.$emit("changeToSearch");
    }
  }
}
</script>

<style lang="scss" scoped>
  .outter {
    display: flex;
    flex-direction: row;
    background-color: RGBA(0, 0, 0, 0.3);
    overflow: hidden;
    #MenuButton {
      margin-top: 25px;
      margin-left: 10px;
      width: 10vw;
      height: 10vh;
    }
    .list-container {
      width: 70vw;
      height: 100vh;
      z-index: 20002;
      background-color: var(--bg_blue);
      #LeftBarProfile{
        display: flex;
        align-items: center;
        height: 14vh;
        background-color: var(--li_blue);
        img {
          height: 70%;
          margin: 6%;
        }
        #ProfileText{
          color: var(--bg_white);
          font-size: 6vw;
        }
      }
      .LeftBarGroup {
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        .LeftBarButton{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 7vh;
          &:hover {
            background-color: #0A4659;
          }
          img {
            height: 50%;
            flex-grow: 1;
          }
          .LeftBarText{
            width: 0;
            flex-grow: 7;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bg_white);
          }
        }
      }
    }
  }
</style>
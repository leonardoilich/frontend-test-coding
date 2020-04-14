<template>
  <div>
      <div class="container">
        <div class="nav navbar-nav">
        <span>{{UserName}}</span>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      UserName:"",
      recentTracks:null
    }
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch("UserGetInfo").then((response)=>{
      this.UserName=response.user.name
    })
    this.$store.dispatch("UserGetRecentTracks")
  }
};
</script>

<style>
.container {
  position: absolute;
  top: 0px; left: 1160px;
  width: 50px;
  height: 100px;
  background: white;
}
</style>
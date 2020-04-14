<template>
  <div class="wraper" id="app">
      <side-bar></side-bar>
      <main class ="contenido" style="width: 100%;background-color: white">
        <app-header></app-header>
        <div class="d-flex align-items-stretch flex-wrap">
          <track-card v-for="track in lastTenTracks" :key="track.mbid" :track="track.track" />
        </div>

        <button @click="getProducts()">Submit</button>
      </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import SideBar from "./components/SideBar";
  import AppHeader from "./components/AppHeader";
  import TrackCard from "./components/TrackCard";
  import Footer from "./components/Footer";
  import { mapGetters } from "vuex";
  export default {
    components:{SideBar,AppHeader,TrackCard,Footer},
    name: "app",

    computed:{
      ...mapGetters({
        contador: "contador",
      }),
      lastTenTracks(){
        return this.$store.state.user.LastTenTracks;
      }
    },

    methods: {
      getProducts() {
        //this.$store.dispatch("AlbumGetTags",{artist:"cher",album:"believe"});
        this.$store.dispatch("TrackGetTopTags",{artist:"cher",track:"believe"});
      }
    }
  };
</script>
<style>
  html{
    font-size: 13px;
  }
  .wraper{

    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .contenido {
      padding-top: 444px;
      padding-left: 370px;
      width: 970px;
      height: 987px;
      background: white;
  }

</style>

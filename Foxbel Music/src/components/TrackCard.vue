<template>
    <div >
        <div>
            <img :src="track.album.image[2]['#text']" alt="">
        </div>
        <div>
            <p>{{track.name}}</p>
            <p>{{track.artist.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrackCard",
        props:["track"]
    }
</script>

<style>


</style>

<template>
    <footer>
        <div id="reproductor">
            <ul id="portada"><img src="../images/portada.png" class="portada_musica">
            </ul></div>
        <div id="datos_cancion">
            <ul id="cancion">Canción
            </ul>
            <ul id="artista">Artista - Albúm
            </ul></div>
        <div id="previous">
            <i class="icono_previous fas fa-step-backward"></i>
        </div>
        <div class="circle"></div>
        <div id="play">
            <i class="f04b"></i>
        </div>
        <div id="next">
            <i class="icono_next fas fa-step-forward"></i>
        </div>
        <div id="vol">
            <i class="icon_vol_on fas fa-volume-off"></i>
        </div>

    </footer>

</template>



<script>
    export default {
        name: "Footer"
    }
</script>

<style>

    #reproductor {
        position: absolute;
        top: 987px; left: 0px;
        width: 100%;
        height: 100px;
        background: #EB5757;
    }

    #portada {
        margin: 0;
        padding: 0;
        width: 100px;
        height: 100px;
    }

    .portada_musica{
        width: 100px; height: 100px;
    }

    #datos_cancion{
        position: absolute;
        top: 987px; left: 120px;
        width: 450px;
        height: 100px;
    }
    #cancion{
        color: white;
        font-size: 14px;
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        padding-top: 24px;
        padding-left: 0px;
        border-bottom: 8px;
    }

    #artista{
        color: white;
        font-size: 12px;
        font-family: Quicksand;
        font-style: normal;
        font-weight: normal;
        padding-top: 8px;
        padding-left: 0px;
        border-bottom: 8px;
    }

    #previous{
        position: absolute;
        top: 1027px; left: 570px;
        width: 22px;
        height: 22px;
    }

    .icono_previous {
        color: white;
        font-size: 24px;
    }

    #play{
        position: absolute;
        top: 1025px; left: 642px;
        width: 22px;
        height: 22px;
    }

    .icono_play {
        color: white;
        font-size: 24px;
    }

    .circle {
        position: absolute;
        top: 1007px; left: 620px;
        width: 60px;
        height: 60px;;
        background: #FF7676;
        border-radius: 50%;
    }

    #next{
        position: absolute;
        top: 1027px; left: 704px;
        width: 22px;
        height: 22px;
    }

    .icono_next {
        color: white;
        font-size: 24px;
    }


    #vol{
        position: absolute;
        top: 1025px; left: 1250px;
        width: 22px;
        height: 22px;
    }

    .icon_vol_on {
        color: white;
        font-size: 36px;
    }
</style>
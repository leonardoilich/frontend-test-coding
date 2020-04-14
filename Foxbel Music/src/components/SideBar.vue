<template>
        <div id="sidebar">
            <ul>
                <h2>
                    <img src="../images/foxbel-music.png" class="logo">
                </h2>
                <h3 class="Sm1">Mi Libreria</h3>
                <li>Recientes</li>
                <li>Artistas</li>
                <li>Albums</li>
                <li>Canciones</li>
                <li>Estaciones</li>
                <h3 class="Sm1">Playlist</h3>
                <li>Metal</li>
                <li>Para bailar</li>
                <li>Rock 90s</li>
                <li>Baladas</li>
            </ul>
        </div>

</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    #sidebar {
        position: fixed;
        width: 330px;
        height: 100%;
        background: #662323;
    }

    .logo{
        width: 250px; height: 59px;
    }

    #sidebar h2{
        padding-top: 50px;
        padding-left: 40px;
    }

    .Sm1{
        color: white;
        font-size: 22px;
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        padding-top: 30px;
        padding-left: 40px;
        border-bottom: 8px;
    }

    #sidebar ul li{
        color: white;
        font-size: 16px;
        font-family: Quicksand;
        font-style: normal;
        font-weight: normal;
        padding: 8px 40px;
        border-bottom: 8px;
    }

    #sidebar ul li:hover{
        border-left: 5px solid #E86060;
        color: #E86060;
        font-weight: bold;
    }


</style>
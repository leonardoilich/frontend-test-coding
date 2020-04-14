import Api from "../../apis/Api";
import Key from "../../apis/Key";
import Username from "../../apis/Username";

const state={
    users: [],
    user: null,
    recentTracks: null,
    load: true,
    LastTenTracks:[],
};

const getters={
    getLastTenTracks(){
        return state.LastTenTracks;
    }
};

const actions={
    UserGetInfo({commit}){
        return new Promise((resolve,reject)=>{
            Api.get(`?method=user.getinfo&user=${Username}${Key}`).then(response => {
                commit('SET_USER', response.data.recentTracks);
                resolve(response.data)
            }).catch(error => {
                    commit('FAIL_QUERY')
                    reject(error)
                });
        });
    },
    UserGetRecentTracks({commit}){
        return new Promise((resolve,reject)=>{
            Api.get(`?method=user.getrecenttracks&user=${Username}${Key}`).then(response => {
                commit('SET_RECENT_TRACKS', response.data.recenttracks);
                let lasttentracks=response.data.recenttracks.track.slice(0, 10)
                lasttentracks.forEach(function (element,index) {
                    element.order=index
                });
                commit('CLEAN_LAST_TEN_TRACKS');
                let auxarray=[];
                lasttentracks.forEach(function (element) {
                    let artistname=element.artist['#text'];
                    let track=element.name;
                    Api.get(`?method=track.getInfo&artist=${artistname}&track=${track}${Key}`).then(resp => {
                        let object={};
                        object=resp.data;
                        object.order=element.order;
                        auxarray.push(object);
                    })
                });
                setTimeout(function () {
                    auxarray.sort((a,b)=>{
                        return(a.order>b.order) ? 1 : -1
                    })
                    commit("SET_LAST_TEN_TRACKS",auxarray)
                },1000);
                resolve(response.data.recenttracks)
            }).catch(error => {
                commit('FAIL_QUERY')
                reject(error)
            });
        });
    }

};

const mutations={
    SET_USERS (state, users) {
        state.users =users;
    },
    FAIL_QUERY() {
        state.load = false;
    },
    SET_RECENT_TRACKS(state,data){
        state.recentTracks=data;
    },
    CLEAN_LAST_TEN_TRACKS(state){
        state.LastTenTracks=[];
    },
    SET_LAST_TEN_TRACKS(state,data){
        state.LastTenTracks=data;
    },
    SET_USER (state, user) {
        state.user = user;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}